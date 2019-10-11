// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var users = [
    {
        userName: "Abbe",
        password: "Abualhaijja"
    }, {
        userName: "Rezan",
        password: "Turan"
    }
]

function validateForm(){
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    for (i = 0; i < users.length; i++){
      
            if(usernameInput == users[i].userName && passwordInput == users[i].password){
                //  logga in
                window.open("./index.html","_blank");
                window.close();
                
            
               
              }
          
        }
    }
    function logout() {
        window.open("login.html","_blank");
        window.close();
       
       
      
    
        
    }
    


//To Do function



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  li.appendChild(span);

  
}
