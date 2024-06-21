// // src/api/syncConfig.ts
// import { Config } from '../context/ConfigContext';
//
// const API_URL = 'https://your-api-endpoint.com/config';
//
// export const syncConfigWithServer = async (config: Config) => {
//   try {
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(config),
//     });
//     if (!response.ok) {
//       throw new Error('Failed to sync config with server');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
