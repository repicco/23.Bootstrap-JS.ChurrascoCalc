
function calcAlimento ( ) {
    let carnivoro = document.getElementById('carn').value
    let vegetariano = document.getElementById('veg').value
    let horas = document.getElementById('hora').value

    function calc(value){
        let total = 0
        if(value == 'Carne'){
            total = (carnivoro * 0.4) * (horas / 4)
        } else if(value == 'Vegetal'){
            total = (vegetariano * 0.4 + carnivoro * 0.15) * (horas / 4)
        } else {
            total = (carnivoro + vegetariano) * 0.5 * (horas / 4)
            return parseFloat(total.toFixed(3))
        }
        return parseFloat(total.toFixed(2))
    }
      
    let totalCarne = calc('Carne')
    let totalVegetal = calc('Vegetal')
    let totalBebida = calc()

    document.getElementById('carne').innerHTML = totalCarne + ' kg'
    document.getElementById('salada').innerHTML = totalVegetal + ' kg'
    document.getElementById('cerveja').innerHTML = totalBebida + ' l'
    document.getElementById('refrigerante').innerHTML = totalBebida + ' l'
}


