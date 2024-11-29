// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAa5MvV_gw-9MTe9IMKoVUfTPWutK3HsZQ",
  authDomain: "cmask-e1ccc.firebaseapp.com",
  projectId: "cmask-e1ccc",
  storageBucket: "cmask-e1ccc.appspot.com",
  messagingSenderId: "196469293624",
  appId: "1:196469293624:web:fdfc62596d1bb835bc9ccd",
  measurementId: "G-E4B8W6VPMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const messaging = getMessaging(app);

export const generateToken = async ()=>{
    const permission = await Notification.requestPermission();
    if(permission === "granted"){
        const token =   await getToken(messaging , {
        vapidKey:"BEvQE3pG_DLFay6ogH9ihh2a1f7zy-ti7yBuShSmUQJLKHXWbENKE613jIlpFBC2IPz6VHS4Jjkorhy4w74owdk"
    });
    // console.log(token);
    }
 
}
// const analytics = getAnalytics(app);