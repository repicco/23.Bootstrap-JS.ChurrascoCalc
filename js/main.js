
function calcAlimento ( ) {
    let carnivoro = document.getElementById('carn').value
    let vegetariano = document.getElementById('veg').value
    let horas = document.getElementById('hora').value

    let Carne = ((carnivoro * 0.4)) * horas
    
    let Vegetal = ((vegetariano * 0.2) + (carnivoro * 0.15)) * horas

    let Cerveja = ((carnivoro + vegetariano) * 0.365) * horas

    let Refri = ((carnivoro + vegetariano) * 0.3) * horas

    Total = [Carne, Vegetal, Cerveja, Refri]

    console.log (Total)

    let totalCarne = Total[0]
    let totalVegetal = Total[1]
    let totalCerveja = Total[2]
    let totalRefri = Total[3]

    totalCarne = parseFloat(totalCarne.toFixed(2))
    totalVegetal = parseFloat(totalVegetal.toFixed(2))
    totalCerveja = parseFloat(totalCerveja.toFixed(2))
    totalRefri = parseFloat(totalRefri.toFixed(2))

    document.getElementById('carne').innerHTML = totalCarne + ' kg'
    document.getElementById('salada').innerHTML = totalVegetal + ' kg'
    document.getElementById('cerveja').innerHTML = totalCerveja + ' Litros'
    document.getElementById('refrigerante').innerHTML = totalRefri + ' Litros'
}


