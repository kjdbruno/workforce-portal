import { CapitalizeWords } from 'src/utils/StringHelper';

export default ({ app }) => {
  app.config.globalProperties.$CapitalizeWords = CapitalizeWords;
};
