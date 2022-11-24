/* Entrada */
var input = document.getElementById("inputNome")
//ações
var botao = document.getElementById("btnCriar")

//manipular
var foto = document.getElementById("fotoPerfil")
var nomeUsuario = document.getElementById("nomeUsuario")
var localizacao = document.getElementById("localizacao")
var bio = document.getElementById("bio")
var linkPerfil = document.getElementById("linkPerfil")

botao.addEventListener("click", (event)=>{
    event.preventDefault()
    var githubUser = input.value 
    fetch(`https://api.github.com/users/${githubUser}`)

    
    .then((response) => response.json())
    .then((data) => {
        //comece a fazer a manipulação
        foto.setAttribute("src", data.avatar_url);
        nomeUsuario.innerText = data.name
        localizacao.innerText = data.location
        bio.innerText = data.bio
        linkPerfil.setAttribute("href", data.html_url)
    });
});