import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAq2htMF1-T7A2dHNR5PnRDO_6i551Kj8o",
    authDomain: "medease-a1f31.firebaseapp.com",
    projectId: "medease-a1f31",
    storageBucket: "medease-a1f31.appspot.com",
    messagingSenderId: "409516427907",
    appId: "1:409516427907:web:c3e38bd14d15496a0429b6",
    measurementId: "G-7BDBRNPDG2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



let register_button = document.getElementById("register");


register_button.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById("register_email").value;
    let password = document.getElementById("register_password").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Account created successfully");
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("error:(");
            console.log(errorMessage);
        });
});