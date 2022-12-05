const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    env: import.meta.env.MODE,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    key: import.meta.env.VITE_API_KEY,
    hash: import.meta.env.VITE_API_HASH,
    ts: import.meta.env.VITE_API_TS,
  },
  i18n: {
    debugg: import.meta.env.VITE_I18N_DEBBUG,
  },
};
export default Config;
