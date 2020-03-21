
function calcAlimento ( ) {
    let carnivoro = document.getElementById('carn').value
    let vegetariano = document.getElementById('veg').value
    let horas = document.getElementById('hora').value

    let Carne = (carnivoro * 50) * horas
    
    let Vegetal = (vegetariano * 100 + carnivoro * 50) * horas

    let Cerveja = ((carnivoro + vegetariano) * 365) * horas

    let Refri = ((carnivoro + vegetariano) * 100) * horas

    Total = [Carne, Vegetal, Cerveja, Refri]

    console.log (Total)

    let totalCarne = Total[0]
    let totalVegetal = Total[1]
    let totalCerveja = Total[2]
    let totalRefri = Total[3]

    document.getElementById('carne').innerHTML = totalCarne + 'g'
    document.getElementById('salada').innerHTML = totalVegetal + 'g'
    document.getElementById('cerveja').innerHTML = totalCerveja + 'ml'
    document.getElementById('refrigerante').innerHTML = totalRefri + 'ml'

    /*
    document.getElementById('cerveja').innerHTML = totalCerveja
    document.getElementById('refrigerante').innerHTML = totalRefri

    console.log(totalCarne + ' ' + totalVegetal  + ' ' + totalCerveja + ' ' + totalRefri)
    */
}
/*
function calcAlimento ( ) {



}*/
