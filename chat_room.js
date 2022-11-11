//Start code
function getData() 
{
    firebase.database().ref("/").on('value',
     function (snapshot) 
     {
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
         
    Room_names= childKey;  
    
    }); }); };
    user_name = localStorage.getItem("user_name");
//End code getData();