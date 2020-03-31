document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo)

function cadastrarVeiculo(e){ //essa função cadastra o veículo num armazenamento local do navegador
    var modeloCarro = document.getElementById('modelo').value
    var placaCarro = document.getElementById('placa').value
    var time = new Date()
    
    if(!modeloCarro || !placaCarro){// esse if avisa ao usuario se nao tiver preenchido os campos para que o faça. Isso faz o sistema nao permitir que sejam cadastrados campos em branco.
        alert('Por favor, preencha os campos em branco!')
        return false// esse return especificamente faz com que os campos em brancos nao sejam cadastrados no armazenamento local.
    }
   
    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }

    if(localStorage.getItem('patio') === null){
        var carros = []
        carros.push(carro)
        localStorage.setItem('patio', JSON.stringify(carros))
    }else{
        var carros = JSON.parse(localStorage.getItem('patio'))
        carros.push(carro)
        localStorage.setItem('patio', JSON.stringify(carros))
    }

    document.getElementById('formulario').reset()// reseta formulario ao adicionar novo veículo

    mostraPatio()

    e.preventDefault()
}

function excluirVeículo(placa){
    var carros = JSON.parse(localStorage.getItem('patio'))//essa função verifica se há algum item na posição placa e se tiver ele remove da lista ao apertar o botão excluir

    for(var i = 0; i < carros.length; i++){
        if(carros[i].placa == placa)
            carros.splice(i, 1 )
    }

    localStorage.setItem('patio', JSON.stringify(carros))//essa linha especificamente transforma o objeto carro em string novamente

    mostraPatio()
}

function mostraPatio(){ //essa função mostra no html os dados do veiculo adicionado
    var carros = JSON.parse(localStorage.getItem('patio'))
    var carrosResultado = document.getElementById('resultados')

    carrosResultado.innerHTML = ''

    for( var i = 0; i < carros.length; i++){
        var modelo = carros[i].modelo
        var placa = carros[i].placa
        var hora = carros[i].hora
        var minutos = carros[i].minutos

        carrosResultado.innerHTML += '<tr><td>' + modelo + '</td><td>' + placa + '</td><td>' + hora + ' : ' + minutos + '</td><td><button class="btn btn-danger" onclick="excluirVeículo(\''+ placa +'\')" >Excluir</button></td>' + '</tr>'
    }
}