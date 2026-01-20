import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { LocalStorage } from 'quasar';
import { useRouter } from 'vue-router';
import { Router } from 'src/router/index';
// import { socket } from 'src/boot/socket'; // Not needed to import directly here for subscription

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        isAuthenticated: !!localStorage.getItem('token'),
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        //
        onlineUsers: [],
        notificationCount: 0,
        notificationList: [],
        hasNotifications: null,
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await api.post('/login', {
                  username, password
                });
                this.token = response.data.token;
                this.user = response.data.user;
                this.isAuthenticated = true;

                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));

                // The socket connection and authentication will be handled by the $subscribe in src/boot/socket.js
                // once isAuthenticated becomes true.

                return true;
            } catch (error) {
                console.error('Login failed:', error.response?.data?.error || error.message);
                this.clearAuthData();
                throw error;
            }
        },
        async logout() {
            try {
                await api.post('/logout'); // If you have server-side logout
                this.clearAuthData();
                // Use the globally exported Router instance
                if (Router) { // Check if Router is defined
                    Router.push('/');
                } else {
                    console.error('Router instance not available for redirect (exported method).');
                }
                return true;
            } catch (error) {
                console.error('Logout failed (client-side cleanup anyway):', error);
                this.clearAuthData();
                // Ensure Router is available even on error paths
                if (Router) {
                    Router.push('/');
                } else {
                    console.error('Router instance not available for redirect after error (exported method).');
                }
                throw error;
            }
        },
        clearAuthData() {
            this.token = null;
            this.isAuthenticated = false;
            this.user = null;
            LocalStorage.remove('jwt_token');
            LocalStorage.remove('user_data');
            // The socket's disconnect will be triggered by the $subscribe in src/boot/socket.js
        },
        async checkAuthStatus() {
            // This method remains primarily for HTTP-based token validation
            if (!this.token) {
                this.clearAuthData();
                return false;
            }
            try {
                await api.get('/check-token');
                this.isAuthenticated = true;
                return true;
            } catch (error) {
                console.error('JWT validation failed on client startup or explicit check:', error);
                this.clearAuthData(); // Interceptor also does this, but good to ensure
                return false;
            }
        },
        async readNotification() {
            this.notificationCount = 0;
            // this.socket.emit('readNotification', { id });
        },
    },
    persist: true,
});