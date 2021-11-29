
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA-ZGz0GkdeyULipkALJbb0D2U85cBt1cc",
    authDomain: "login-d0713.firebaseapp.com",
    projectId: "login-d0713",
    storageBucket: "login-d0713.appspot.com",
    messagingSenderId: "441912840000",
    appId: "1:441912840000:web:519478706b51463365f4a5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

	const auth = firebase.auth();

	

	

	function signUp(){
var email = document.getElementById("email");

		var password = document.getElementById("password");

		

const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
		

	
alert("Signed Up");

	}

	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});



	


