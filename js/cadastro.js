var listaUsuarios = []
listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}
console.log(listaUsuarios)

function botaoCadastrar() {
    var nome = document.getElementById("nome").value
    var idade= document.getElementById("idade").value
    var endereco= document.getElementById("endereco").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    var possoCadastrar = validarCadastro(nome, idade,endereco,email,senha)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    var usuario = {
        nome: nome,
        idade: idade, 
        email: email,
        senha: senha,
        endereco: endereco
        
    }
    listaUsuarios.push(usuario)
    
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios) )

    document.getElementById("nome").value = ''
    document.getElementById("idade").value = ''
    document.getElementById("email").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("nome").focus()

    alert ('Usuário cadastrado com sucesso. Faça o login.')

    location.href = 'login.html'
}
function validarCadastro(nome, idade , senha,email){
    if (nome == '' || idade == '' || senha == '' || email == '' || endereco == '') {
        alert("e obrigatorio preencher todo os campos")
        return false
    } 
    return true
}

