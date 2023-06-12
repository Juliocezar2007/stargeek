var cadastrosM =[]
cadastrosM = JSON.parse(localStorage.getItem('bdfilmes'))
if (cadastrosM == null){
    cadastrosM = []
}

function validarCadastro(nome, imagem) {
    if (nome != '' && imagem!='') {
        return true
    } else{
        return false
    }
}

function cadastroM (){
    var nome = document.getElementById('nome').value
    var imagem = document.getElementById('imagem').value

    var cadastro = validarCadastro(nome,imagem)
    if(cadastro == false){
        alert('prencha todos os dados ')
        return
    }
    var filmes = {
        nomeS:nome,
        imagemS:imagem
    }
    cadastrosM.push(filmes)
    localStorage.setItem('bdfilmes', JSON.stringify(cadastrosM))
    alert('filme cadastrado com sucesso')
    location.href="catalogomidias.html"
}
function catalogofilmes(){
    document.getElementById('filmedeTerror').innerHTML = ''
    cadastrosM.forEach((item, pos) => {
        document.getElementById('filmedeTerror').innerHTML +=
        ` <img src= '${item.imagemS}' class="filmesnovos"> <img src='excluir.svg' onclick='excluirMidia(${pos})'>`
    })
}

catalogofilmes()

function excluirMidia(pos){
    if(confirm("Deseja realmente excluir?")){
        cadastrosM.splice(pos, 1)
        localStorage.setItem('bdfilmes', JSON.stringify(cadastrosM))
        catalogofilmes()
    }
}