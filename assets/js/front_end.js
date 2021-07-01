//Adicionando no Session Storage
function salvarSession(){
    sessionStorage.setItem("Nome", nomeid.value);
    sessionStorage.setItem("e-mail", emailid.value);
    sessionStorage.setItem("Telefone", foneid.value); 
    sessionStorage.setItem("Assunto", assuntoid.value);
    sessionStorage.setItem("Mensagem", msgid.value);
  
    alert("Adicionado ao SessionStorage!");
}

//Mostrando valores dos campos preenchidos
function mostrarDados(){
    var nome = document.getElementById('nomeid').value;
    document.getElementById('nomeDigitado').innerHTML = nome;

    var email = document.getElementById('emailid').value;
    document.getElementById('emailDigitado').innerHTML = email;

    var fone = document.getElementById('foneid').value;
    document.getElementById('foneDigitado').innerHTML = fone;

    var assunto = document.getElementById('assuntoid').value;
    document.getElementById('assuntoDigitado').innerHTML = assunto;

    var msg = document.getElementById('msgid').value;
    document.getElementById('msgDigitado').innerHTML = msg;  
} 

//Recuperando valores da Session Storage
var GetSessionNome = sessionStorage.getItem("Nome");
var GetSessionEmail = sessionStorage.getItem("e-mail");
var GetSessionTel = sessionStorage.getItem("Telefone");
var GetSessionAssunto = sessionStorage.getItem("Assunto");
var GetSessionMensagem = sessionStorage.getItem("Mensagem"); 

console.log("teste");