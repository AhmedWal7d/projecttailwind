import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { createContext, useState, useEffect } from "react";
import { generateToken } from "../../firebase";

// إنشاء سياق Firebase
export let FirebaseContext = createContext();

// تكوين Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAa5MvV_gw-9MTe9IMKoVUfTPWutK3HsZQ",
    authDomain: "cmask-e1ccc.firebaseapp.com",
    projectId: "cmask-e1ccc",
    storageBucket: "cmask-e1ccc.appspot.com",
    messagingSenderId: "196469293624",
    appId: "1:196469293624:web:fdfc62596d1bb835bc9ccd",
    measurementId: "G-E4B8W6VPMW"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export default function FirebaseContextProvider(props) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
                try {
                    const currentToken = await getToken(messaging, {
                        vapidKey: "BEvQE3pG_DLFay6ogH9ihh2a1f7zy-ti7yBuShSmUQJLKHXWbENKE613jIlpFBC2IPz6VHS4Jjkorhy4w74owdk"
                    });
                    if (currentToken) {
                        setToken(currentToken);
                    } else {
                    }
                } catch (error) {
                }
            }
        };
        

        fetchToken();
    }, []); // تشغيل useEffect عند تحميل المكون فقط

    return (
        <FirebaseContext.Provider value={{ token, generateToken }}>
            {props.children}
        </FirebaseContext.Provider>
    );
}
