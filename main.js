var config = {
    apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
  authDomain: "effort-5efac.firebaseapp.com",
  databaseURL: "https://effort-5efac.firebaseio.com",
  projectId: "effort-5efac",
  storageBucket: "effort-5efac.appspot.com",
  messagingSenderId: "771931121287",
  appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
  measurementId: "G-GLD9CY5VPF"};
firebase.initializeApp(config);

  
  var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token);
      console.log(user);
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code);
      console.log(error.message);
   });
}

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull');
   }, function(error) {
      console.log('Signout Failed');  
   });
}


firebase.auth().onAuthStateChanged(user => {
  if (user) {

            var Fuid = user.uid;
            Duid = "User/"+(Fuid);
  document.getElementById("uid").innerHTML= Fuid;
  document.getElementById("uname").innerHTML= user.displayName;
  document.getElementById("uemail").innerHTML= user.email;
  document.getElementById("uphoto").src = user.photoURL;
  alert(user.photoURL);
			
			}

      else {
      
      }

    });

