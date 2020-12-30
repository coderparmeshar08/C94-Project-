
    
var firebaseConfig = {
    apiKey: "AIzaSyCEzMbRTvSY6d9BZ3PLMrPsndxL6tM5zTc",
    authDomain: "kwitter-6d579.firebaseapp.com",
    databaseURL: "https://kwitter-6d579-default-rtdb.firebaseio.com",
    projectId: "kwitter-6d579",
    storageBucket: "kwitter-6d579.appspot.com",
    messagingSenderId: "822624067609",
    appId: "1:822624067609:web:b7551a44199e83c8600a88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
     purpose : "addinguser"
    });
  }