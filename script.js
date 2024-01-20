// Function to toggle visibility of content based on page
function showPage(pageId) {
    const pages = ['profile', 'connections', 'about', 'contact', 'login', 'register'];

    // Hide all pages
    pages.forEach(page => {
        const element = document.getElementById(page);
        if (element) {
            element.style.display = 'none';
        }
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

// Initial setup - show the profile page
document.addEventListener('DOMContentLoaded', function () {
    showPage('profile');
});

// Button click events
document.getElementById('profile-button').addEventListener('click', function () {
    showPage('profile');
});

document.getElementById('connections-button').addEventListener('click', function () {
    showPage('connections');
});

document.getElementById('about-button').addEventListener('click', function () {
    showPage('about');
});

document.getElementById('contact-button').addEventListener('click', function () {
    showPage('contact');
});

document.getElementById('login-button').addEventListener('click', function () {
    showPage('login');
});

document.getElementById('register-button').addEventListener('click', function () {
    showPage('register');
});

// Form submission event for login form
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Basic alert for demonstration, replace with actual authentication logic
            alert('Login button clicked! Authentication logic goes here.');
        });
    }
});

// Form submission event for registration form
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                // Add user data to Firestore 'users' collection
                const docRef = await addDoc(collection(db, "users"), {
                    username: username,
                    password: password,
                    // Add other user data as needed
                });

                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        });
    }
});


// Firebase App and Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAw1eBrMaWdS9gTWgcTogeqEOVo86Rq0Xo",
  	authDomain: "consportsdata.firebaseapp.com",
  	projectId: "consportsdata",
  	storageBucket: "consportsdata.appspot.com",
  	messagingSenderId: "942262562721",
  	appId: "1:942262562721:web:1fd5edc57737711926e5e0",
  	measurementId: "G-E4QRPDHZG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Example usage of Firestore (you may place this in appropriate functions or event handlers)
async function addUserToFirestore() {
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            first: 'Ada',
            last: 'Lovelace',
            born: 1815
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

async function fetchUsersFromFirestore() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

// Call your Firestore functions as needed
addUserToFirestore();
fetchUsersFromFirestore();
