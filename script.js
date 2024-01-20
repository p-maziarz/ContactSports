// Function to toggle visibility of content based on page
function showPage(pageId) {
    const pages = ['index', 'connections', 'about', 'contact', 'login', 'register'];

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

        // Display welcome message on the home page
        if (pageId === 'index') {
            displayWelcomeMessage();
        }
    }
}

function displayWelcomeMessage() {
    // Retrieve user data from local storage or authentication state
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Display welcome message if user data is available
    if (userData && userData.firstName) {
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Hello, ${userData.firstName}!`;
        }
    }
}

// Initial setup - show the index page
document.addEventListener('DOMContentLoaded', function () {
    showPage('index');
});

// Button click events
const loginButton = document.getElementById('login-button');
if (loginButton) {
    loginButton.addEventListener('click', function () {
        showPage('index');
    });
}

const connectionsButton = document.getElementById('connections-button');
if (connectionsButton) {
    connectionsButton.addEventListener('click', function () {
        showPage('conections');
    });
}

const aboutButton = document.getElementById('about-button');
if (aboutButton) {
    aboutButton.addEventListener('click', function () {
        showPage('about');
    });
}

const contactButton = document.getElementById('contact-button');
if (contactButton) {
    contactButton.addEventListener('click', function () {
        showPage('contact');
    });
}

const registerButton = document.getElementById('register-button');
if (registerButton) {
    registerButton.addEventListener('click', function () {
        showPage('register');
    });
}

// Form submission event for login form
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
            // Redirect to the home page upon login (you can add authentication logic here)
            showPage('index');
        });
    }
});

// Form submission event for registration form
document.addEventListener('DOMContentLoaded', async function () {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                // Add user data to Firestore 'users' collection
                const docRef = await addDoc(collection(db, 'users'), {
                    username: username,
                    password: password,
                    // Add other user data as needed
                });

                console.log('Document written with ID: ', docRef.id);

                // Redirect to the home page upon successful registration
                showPage('index');
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        });
    }
});

// Firebase App and Firestore
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
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Example usage of Firestore (you may place this in appropriate functions or event handlers)
async function addUserToFirestore() {
    try {
        const docRef = await db.collection('users').add({
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
    const querySnapshot = await db.collection('users').get();
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

// Call your Firestore functions as needed
addUserToFirestore();
fetchUsersFromFirestore();
