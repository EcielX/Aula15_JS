function incluir1() {

    let nomeUser = document.getElementById('nome').value
    if (nomeUser != "") {

        let tabela = document.getElementById('tabelaUser')
        let numerolinhas = tabela.ariaRowCount
        let linha = tabela.insertRow(numerolinhas)
        let campo1 = linha.insertCell(0)
        let campo2 = linha.insertCell(1)
        campo1.innerHTML = nomeUser
        campo2.innerHTML = "<button class='btn btn-danger' onclick ='removerlinha(this)'>Remover</>"

        document.getElementById('nome').value = ""
    }
    else {
        alert('Incosistente')
    }
}

function removerlinha(linha) {
    let i = linha.parentNode.parentNode.rowIndex
    document.getElementById('tabelaUser').deleteRow(i)
}