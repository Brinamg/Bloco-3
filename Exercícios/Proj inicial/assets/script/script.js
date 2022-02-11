let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk=false;
let emailOk=false;
let assuntoOk=false;
let mapa = document.querySelector('#mapa')

nome.style.width='100%';
email.style.width='100%';

function validNome(){
    let txtNome = document.querySelector('txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"   
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"  
        nomeOK = true
    }
}

function validEmail(){
    let txtEmail = document.querySelector('txtEmail')
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"   
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"  
        emailOK = true
    }
}

function validAssunto(){
    let txtAssunto = document.querySelector('txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "O texto utrapassa a quantidade de caracteres permitida"
        txtAssunto.style.color = "red"   
        txtAssunto.style.display = "none"  
    } else {
        txtAssunto.style.display = "none"  
        assuntoOK = true
    }
}
function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Preencha o formulário corretamente")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "400px"
}


/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()*/
