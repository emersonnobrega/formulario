// Função criada para validar alguns dados e não deixar o usuário de preencher
function Enviar(){
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var meuarquivo = document.getElementById("meuarquivo");

    if (nome.value == "") {
        alert("Nome não informado");    
        return;
      }

    if (sobrenome.value == ""){
        alert("Sobrenome não informado");
        return;
    }

    if (email.value == ""){
        alert("Email não informado");
        return;
    }
    if (meuarquivo.value == ""){
        alert("Você esqueceu de anexar o currículo");
        return;
    }else (alert('Obrigado sr(a) ' + nome.value + ' por enviar seus dados, em breve entraremos em contato :D '))
}