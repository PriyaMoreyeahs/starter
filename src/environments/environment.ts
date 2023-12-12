// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    // API_URL: 'http://1ade-103-15-67-130.ngrok-free.app',
    //  API_URL: 'http://192.168.1.50:8086', // new Dev
    API_URL: "http://192.168.1.50:8086", // new Dev
    // API_URL: 'http://192.168.1.129:8081', // Priya Mam
    // API_URL: 'http://192.168.1.103', // Ravi
    // API_URL: 'http://192.168.1.131:8086',  //Shivam,
    //  API_URL: 'http://192.168.1.128',  // Ravi
    // API_URL: 'http://192.168.1.117:8091',  // Harshit sir
    //API_URL: 'http://192.168.1.108:8080', // Ankit sir
    //  API_URL: 'http://192.168.1.127:8080', // Ankit sir
    // API_URL: 'http://192.168.1.117:8050',  // Harshit sir
    // API_URL: 'http://192.168.1.129:8081',  // Priya mam
    //API_URL: 'http://192.168.1.144:8081',  // Sanskriti
    // API_URL: 'http://192.168.1.124:8086',  // Anjali

    // AK SIR URL
    //  API_URL: 'https://emossybackend.moreyeahs.in', //UAT
    //  API_URL: 'https://emossybackend.moreyeahs.in', //UAT
    // hrHelpdesk URL
    // API_URL: 'https://emossyappbackend.emossy.com',  //5Live
    // attendance backend for biometrics

    biometrics_URL: "https://emossyattendance.emossy.com", //Live

    ngrok: "https://ac8f-103-15-67-130.ngrok-free.app", //ngrok for attendance
    Utility_URL: "https://emossyutilities.moreyeahs.in", // Roopesh sir
    instagram_token: "INSTA_TOKEN",
    stripe_token: "STRIPE_TOKEN",
    paypal_token: "PAYPAL_TOKEN",
  },
  // UAT
  clientId: '82deaf2c-374c-489f-b909-17a661fd1348',
  redirectUrl: 'https://tsf.moreyeahs.in',

  /*
 * For easier debugging in development mode, you can import the following file
  * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
  *
  * This import should be commented out in production mode because it will have a negative impact
  * on performance if an error is thrown.
  */
  firebase: {
    apiKey: "AIzaSyAbqzFmIICpccJdV1CziigCPbBINmE2gbA",
    authDomain: "testing-firebase-e02bb.firebaseapp.com",
    projectId: "testing-firebase-e02bb",
    storageBucket: "testing-firebase-e02bb.appspot.com",
    messagingSenderId: "414614663820",
    appId: "1:414614663820:web:c86ee5f86177976ed681a9",
    vapidKey: "BD5cZq2AgzewZ6-S0dpH81vZ3Hbgavpg2Zpv5bOLMpGFovbauWC8kUXHReFGhoadEbAa9D3WJz5S2FUxbEZG_GY",
  },

};
