var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
} 
console.log(listaUsuarios) 

function botaoLogin(){
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value
debugger
    var encontrado = false
    listaUsuarios.forEach ( item => {
        if (senha == item.senha && usuario == item.nome) {
            alert (`Bem vindo ao sistema, ${item.usuario}`)
            encontrado = true
            location.href="catalogomidias.html"
        }
    } )
    
    if (encontrado == false) {
        alert('Usuário não encontrado')
    }   

}