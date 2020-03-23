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

    console.log(carro)

    e.preventDefault()
}