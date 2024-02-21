import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  baseApiUrl: 'https://lizard-x7ky.onrender.com/'
};
