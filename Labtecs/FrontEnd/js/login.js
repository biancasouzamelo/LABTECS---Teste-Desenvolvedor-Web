function createUser() {
var nameUser = $( "#cad_nameUser" ).val();
var emailUser = $( "#cad_emailUser" ).val();
var senhaUser = $( "#cad_senhaUser" ).val();
var confirmeUser = $("#cad_confirmeUser" ).val();

 $.ajax({
  method: "POST",
  url: "http://127.0.0.1:3333/api/auth/register",
  data: { 
    email: emailUser, 
    password: senhaUser, 
    password_confirmation:confirmeUser 

/*função para redirecionar para o usuário para a tela de login */
  },success: function(data) {
      location.href = "login.html";
    },
    error: function() {
      alert("erro ao salvar usuário");
    }
 });

}
/*Função do Login*/ 
function loginUser() {

var emailUser = $("#login_emailUser").val();
var senhaUser = $("#login_senhaUser").val();


 $.ajax({
  method: "POST",
  url: "http://127.0.0.1:3333/api/auth/login",
  data: { 
  	email: emailUser, 
  	password: senhaUser

  /*função para redirecionar para o usuário da tela de login para a tela de Informações */
  },success: function(data) {
    saveStuff(data.token);
    console.log("new response"+data);
      location.href = "informacoes.html";
    },
    error: function() {
      alert("Senha ou email inválido");
    }
 });

}

function inicio () {
  if (localStorage.getItem("tokenLife") != null) {
     location.href = "informacoes.html";
  }
}

// Store your data.
function saveStuff(obj) {
  localStorage.removeItem("tokenLife");
  localStorage.setItem("tokenLife", obj);
}

function validaEmail () {
  console.log("djfhfhghgh");
var email = $("#cad_emailUser").val();
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
if (re.test(email)) {
    $('.msg').hide();
    $('.success').show();
} else {
    $('.msg').hide();
    $('.error').show();
}

}


inicio();

