<template>
    <q-page class="flex flex-center">
        <q-card class="radius-md no-shadow q-pa-lg" style="width: 65%; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
            <q-card-section class="text-center">
                <div class="text-h6 text-uppercase">track my leave</div>
            </q-card-section>
            <q-card-section v-if="info.length === 0">
                <div class="flex flex-center">
                    <div class="row items-center q-gutter-xs">
                        <!-- first 4 chars -->
                        <q-input
                            v-for="(char, index) in first"
                            :key="'f'+index"
                            v-model="first[index]"
                            maxlength="1"
                            outlined
                            class="char-input"
                            @update:model-value="moveNext(index, 'first')"
                            @keydown.backspace="movePrev(index, 'first', $event)"
                            ref="firstRefs"
                            :input-style="{ 'textAlign': 'center', 'fontSize': '2em' }"
                        />
                        <q-input
                            v-for="(char, index) in last"
                            :key="'l'+index"
                            v-model="last[index]"
                            maxlength="1"
                            outlined
                            class="char-input"
                            @update:model-value="moveNext(index, 'last')"
                            @keydown.backspace="movePrev(index, 'last', $event)"
                            ref="lastRefs"
                            :input-style="{ 'textAlign': 'center', 'fontSize': '2em' }"
                        />
                    </div>
                </div>
            </q-card-section>
            <q-card-section v-else class="text-center">
                <div class="q-mb-md">
                    <div class="text-caption text-uppercase text-grey">control no.</div>
                    <div class="text-h5 text-uppercase">{{ info?.control_no }}</div>
                </div>
                <div class="q-mb-md">
                    <div class="text-caption text-uppercase text-grey">employee</div>
                    <div class="text-h5 text-uppercase">{{ FormatName(info?.employee) }}</div>
                </div>
                <div class="row q-col-gutter-md">
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">leave type</div>
                        <div class="text-body1 text-uppercase">{{ info?.leaveType?.name }}</div>
                    </div>
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">status</div>
                        <div class="text-body1 text-uppercase">{{ info?.status }}</div>
                    </div>
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">leave duration</div>
                        <div class="text-body1 text-uppercase">{{ FormatLeaveDate(info?.date_from, info?.date_to) }}</div>
                    </div>
                    <div class="col">
                        <div class="text-caption text-uppercase text-grey">no of day</div>
                        <div class="text-body1 text-uppercase">{{ ComputeLeaveDays(info?.date_from, info?.date_to) }}</div>
                    </div>
                </div>
                <div class="row q-col-gutter-xl q-mt-lg">
                    <div class="col" v-for="(dt, index) in info?.approvals">
                        <div class="text-caption text-uppercase text-grey">{{ dt?.status == 'Pending' ? 'unsigned' : (dt?.setting?.description) }}</div>
                        <div v-if="dt?.status == 'Pending'">
                            <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                            <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                            <q-btn v-if="dt?.order === 1" unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" label="approve" @click="Approve(dt)" />
                        </div>
                        <div v-if="dt?.status == 'Approved'">
                            <div v-if="dt?.is_overide">
                                <div class="text-grey q-mb-lg">
                                    <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                    <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                                </div>
                                <div class="text-caption text-uppercase text-italic text-bold q-mb-lg">overiden by</div>
                                <img :src="FormatSignature(dt?.override_signature)" width="100"/>
                                <div class="text-h6 text-uppercase">{{ dt?.override_name }}</div>
                                <div class="text-body1 text-uppercase text-italic">{{ dt?.override_position }}</div>
                                <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                            </div>
                            <div v-if="!dt?.is_overide">
                                <img :src="FormatSignature(dt?.original_signature)" width="100"/>
                                <div class="text-h6 text-uppercase">{{ dt?.original_approver_name }}</div>
                                <div class="text-body1 text-uppercase text-italic">{{ dt?.original_approver_position }}</div>
                                <div class="text-caption text-uppercase text-italic">{{ FormatSigned(dt?.signed_at) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="q-gutter-sm">
                    <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" label="print" @click="Print(info?.id)" />
                    <q-btn unelevated size="md" color="primary" class="btn-md text-capitalize q-mt-md" outline label="clear" @click="Reset()" />
                </div>
            </q-card-section>
            <q-inner-loading :showing="SubmitLoading">
                <div class="text-center">
                    <q-spinner-puff size="xl" color="primary"/>
                    <div class="text-h6 text-dark text-uppercase q-mt-xs">we're working on it!</div>
                </div>
            </q-inner-loading>
        </q-card>
        <q-dialog v-model="printDialog" full-height full-width class="pdf">
        <q-card class="bg-white q-pa-none" style="height: 100vh; overflow: hidden;">
            <q-btn
                icon="close"
                class="fixed bg-white text-primary shadow-2"
                round
                dense
                v-close-popup
                style="top: 15px; right: 15px; z-index: 999;"
            />
            <q-card-section class="q-pa-none" style="height: 100%; overflow: hidden;">
                <div class="iframe-container">
                    <iframe v-if="pdf" :src="pdf" frameborder="0"></iframe>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
    </q-page>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount, watch, reactive, computed, nextTick  } from 'vue';
import { api } from 'src/boot/axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Toast } from 'src/boot/sweetalert'; 
import { useEmployeeStore } from 'src/stores/employee-store'
const EmployeeStore = useEmployeeStore();

const SubmitLoading = ref(false);

const info = ref([])

const TrackLeave = async (app) => {
    SubmitLoading.value = true;
    try {
        const response  = await api.get(`/portal/leave/${app}`);
        info.value = response.data.result;
    } catch (error) {
        console.error("Error fetching all data:", error);
        Toast.fire({
            icon: "error",
            html: `
                <div class="text-h6 text-bold text-uppercase">Error</div>
                <div class="text-caption text-capitalize;">Unable to fetch records</div>
            `
        });
    } finally {
        SubmitLoading.value = false;
    }
}

const first = ref(['','','',''])
const last = ref(['','',''])

const firstRefs = ref([])
const lastRefs = ref([])

const fullValue = computed(() =>
  `${first.value.join('')}-${last.value.join('')}`
)

function moveNext(index, group) {
  nextTick(() => {
    if (group === 'first') {
      if (index < 3)
        firstRefs.value[index + 1]?.focus()
      else
        lastRefs.value[0]?.focus()
    } else {
      if (index < 2)
        lastRefs.value[index + 1]?.focus()
    }
  })
}

function movePrev(index, group, e) {
  if (e.target.value) return

  nextTick(() => {
    if (group === 'last') {
      if (index > 0)
        lastRefs.value[index - 1]?.focus()
      else
        firstRefs.value[3]?.focus()
    } else {
      if (index > 0)
        firstRefs.value[index - 1]?.focus()
    }
  })
}

watch(fullValue, (val) => {

  const clean = val.replace('-', '')

  if (clean.length === 7) {
    onCompleted(val)
  }

})

function onCompleted(value) {
  TrackLeave(value)
}


const FormatSigned = (date) => {
    if (!date) return ''
    return moment(date).format('MMMM Do, YYYY hh:mm A')
}

const FormatName = (profile) => {
    if (!profile) return '';
    const firstname = profile.first_name || '';
    const middlename = profile.middle_name
        ? profile.middle_name.charAt(0).toUpperCase() + '.'
        : '';
    const lastname = profile.last_name || '';
    const suffix = profile.suffix ? ` ${profile.suffix}` : '';
    return `${firstname} ${middlename} ${lastname}${suffix}`.trim();
}

const FormatLeaveDate = (dateFrom, dateTo, locale = 'en-US') => {
    if (!dateFrom) return ''

    const from = new Date(dateFrom)
    const to = new Date(dateTo || dateFrom)

    const sameDay =
        from.getFullYear() === to.getFullYear() &&
        from.getMonth() === to.getMonth() &&
        from.getDate() === to.getDate()

    const monthName = (d) => d.toLocaleString(locale, { month: 'long' })
    const dayNum = (d) => d.getDate()
    const yearNum = (d) => d.getFullYear()

    if (sameDay) {
        // February 1, 2026
        return `${monthName(from)} ${dayNum(from)}, ${yearNum(from)}`
    }

    // Same month & year: February 1-3, 2026
    if (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) {
        return `${monthName(from)} ${dayNum(from)}-${dayNum(to)}, ${yearNum(from)}`
    }

    // Different month/year: February 28 - March 2, 2026
    return `${monthName(from)} ${dayNum(from)}, ${yearNum(from)} - ${monthName(to)} ${dayNum(to)}, ${yearNum(to)}`
}

const ComputeLeaveDays = (dateFrom, dateTo) => {
    if (!dateFrom) return 0

    const from = new Date(dateFrom)
    const to = new Date(dateTo || dateFrom)

    // normalize to midnight to avoid timezone issues
    from.setHours(0, 0, 0, 0)
    to.setHours(0, 0, 0, 0)

    const diff = Math.round((to - from) / (1000 * 60 * 60 * 24))
    return diff >= 0 ? diff + 1 : 0 // +1 for inclusive
}

const FormatSignature = (sign) => {
    return `${process.env.VUE_APP_BACKEND_URL}${sign.signature}`
}

const Approve = async (app) => {
    SubmitLoading.value = true;
    const approverId = app?.id;
    const id = info.value?.id;
    try {
        const response = await api.post(`/portal/leave/${id}/${approverId}/approve`);
        Toast.fire({
            icon: "success",
            html: `
                <div class="text-h6 text-bold text-uppercase">granted!</div>
                <div class="text-caption text-capitalize;">${response.data.message}<div>
            `
        });
    } catch (e) {

        if (e.response && e.response.data) {
            applyBackendErrors(e.response.data);
            Toast.fire({
                icon: "error",
                html: `
                    <div class="text-h6 text-bold text-uppercase">Request Failed</div>
                    <div class="text-caption">Something went wrong.</div>
                `
            })
        }

    } finally {
        Reset()
        SubmitLoading.value = false;
    }
}

const Reset = () => {
    info.value = [];
    first.value = ['','','','']
    last.value = ['','','']
    firstRefs.value = []
    lastRefs.value = []
}

const printDialog = ref(false);
const pdf = ref(null);

const Print = async (id) => {
    SubmitLoading.value = true;
    try {
        const res = await api.get(`/portal/leave/${id}/pdf`, {
            responseType: 'arraybuffer',
        })
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const pdfurl = window.URL.createObjectURL(blob) + "#view=FitW";
        pdf.value = pdfurl
        printDialog.value = true;
    } catch (error) {
        console.error("Error generating PDF:", error);
    } finally {
        SubmitLoading.value = false;
    }
}
</script>

<style lang="css" scoped>

.card-menu
{
    width: 150px;
    height: 175px;
}

.card-profile {
        overflow: hidden;
        background: linear-gradient(
  135deg,
  #c94a4a 0%,
  #a91f1f 65%,
  #900201 100%
);
    }

    /* COVER PHOTO */
    .cover-photo {
        height: 175px;
        width: 100%;
        position: relative;
    }

    .cover-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    /* Optional dark overlay for readability */
    .cover-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.55)
    );
    }

    /* PROFILE IMAGE SECTION */
    .profile-section {
    margin-top: -80px; /* pulls image over cover */
    }

    /* PROFILE IMAGE */
    .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #ffffff;
        background: #ffffff;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
    .char-input {
        width: 75px;
    }

</style>