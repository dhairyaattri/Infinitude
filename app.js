// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAIeLPBewIj5gA186I-A8ZFtD2fsNkAvzI",
    authDomain: "infinitude-corporation.firebaseapp.com",
    databaseURL: "https://infinitude-corporation.firebaseio.com",
    projectId: "infinitude-corporation",
    storageBucket: "infinitude-corporation.appspot.com",
    messagingSenderId: "678979206530",
    appId: "1:678979206530:web:10da955166f120aab8639b",
    measurementId: "G-GH1G832V9X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

//   var database = firebase.database();


// Reference messages collection    
var messagesRef = firebase.database().ref('messages');

// Listen to form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    // console.log(123);

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, subject, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, subject, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        subject: subject, 
        email: email,
        message: message, 
    });
}

ScrollReveal().reveal('.intro' ,{ delay: 500 });
ScrollReveal().reveal('.jumbotron', { delay: 500 });
ScrollReveal().reveal('.banner-provide');
ScrollReveal().reveal('.projects', { delay: 500 });
ScrollReveal().reveal('.team-section', { delay: 500 });
ScrollReveal().reveal('.sectionform', { delay: 500 });