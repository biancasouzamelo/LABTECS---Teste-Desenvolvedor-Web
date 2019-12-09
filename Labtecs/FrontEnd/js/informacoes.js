// Obtem informações do usuário através do token
function onLoadPage () {

var token = loadStuff();

if (token == null ) {
  location.href = "login.html";
}

 $.ajax({
  method: "GET",
  url: "http://127.0.0.1:3333/api/user",
  headers: {
        "Authorization":("Bearer " + token)
    }, 
    success: function(data) {
     setInput(data);
    },
    error: function() {
      alert("error");
    }
 });

}

function setInput(data){

  $("#info_email").val(data.email);
  $("#info_dtCad").val(data.created_at);
  $("#info_dtAtual").val(data.updated_at);
}

function logout () {
  localStorage.removeItem("tokenLife");
  location.href = "login.html";
}

// Do something with your data.
function loadStuff() {
  return localStorage.getItem("tokenLife");
}

onLoadPage();