document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo)

function cadastrarVeiculo(e){
    var modeloCarro = document.getElementById('modelo').value
    var placaCarro = document.getElementById('placa').value
    var time = new Date()
   
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
        var carros = JSON.parse(localStorage.getItem('estacionamento'))
        carros.push(carro)
        localStorage.setItem('patio', JSON.stringify(carros))
    }

    e.preventDefault()
}