const churrasco = {
    /* Capturar */
        /* Declarar */
            carnivoro: null,
            criancas: null,
            vegetariano: null,
            horas: null,
        /* Declarar FIM */
        getElement(id){
            let get = document.getElementById(id).value

            let element =  get ? parseFloat(get) : 0

            return element
        },
        getValues(){
            carnivoro = this.getElement('carnivoros')
            criancas = this.getElement('criancas')
            vegetariano = this.getElement('vegetarianos')
            horas = this.getElement('hora')
        },
    /* Capturar FIM */
    /* Validar o sistema */
        validate(){
            this.getValues()

            let checker = false
            horas > 0  && carnivoro > 0 || criancas > 0 || vegetariano > 0 ? checker = true : checker = false

            checker ? this.calcAlimento() : alert("Favor preencher a hora e 1 das quantidades de pessoas")
        },
    /* Validar o sistema FIM */
    /* Lógica do sistema */
        calcAlimento ( ) {
            let crianca = criancas / 2
            let carnivoros = carnivoro + crianca
            let pessoas = carnivoros + vegetariano
            let adultos = carnivoro + vegetariano
            
            let carne = (carnivoros * 0.2) * horas
            let vegetal = (vegetariano * 0.3 + carnivoros * 0.02) * horas
            let paoAlho = (pessoas / 4) * horas
            let arroz = (pessoas * 0.03) * horas
            let carvao = carne / 3
            let salGrosso = (carne * 0.001) * horas
            let cerveja = ((adultos * 0.5) * horas) * 1000
            let refrigerante = (((pessoas * 0.2) * horas) / 2)  * 1000
            let queijo = (pessoas / 4) * horas
        
            function total(value, type, medida) {
                console.log(value)

                if(type == 'kg') {
                    let volume = parseFloat(value.toFixed(2))
                                .toString()
                                .replace('.', ',')
                    return `${volume} ${medida}`
                } else if(type == 'l') {
                    let volume = parseFloat(value.toFixed(3))
                                .toString()
                                .replace('.', ',')
                    return `${volume} ${medida}`
                } else if(type == 'un') {
                    let volume = parseFloat(value.toFixed(0))
                                .toString()
                                .replace('.', ',')
                    if(volume <= 0) {
                        volume = 1
                    }                        
                    return `${volume} ${medida}`
                }
            }

            document.getElementById('carne').innerHTML = total(carne, 'kg', 'kg')
            document.getElementById('salada').innerHTML = total(vegetal, 'kg', 'kg')
            document.getElementById('paoAlho').innerHTML = total(paoAlho, 'un', 'unidades')
            document.getElementById('arroz').innerHTML = total(arroz, 'kg', 'kg')
        
            document.getElementById('cerveja').innerHTML = total(cerveja / 350, 'un', 'Latas')
            document.getElementById('refrigerante').innerHTML = total(refrigerante / 2000, 'un', 'Pet 2L')
            document.getElementById('carvao').innerHTML = total(carvao, 'kg', 'kg')
            document.getElementById('salGrosso').innerHTML = total(salGrosso, 'un', 'pacote')
            
            document.getElementById('queijo').innerHTML = total(queijo, 'un', 'unidades')
            document.getElementById('carneVermelha').innerHTML = total(carne / 2, 'kg', 'kg')
            document.getElementById('carneVariadas').innerHTML = total(carne / 2, 'kg', 'kg')
        },
    /* Lógica do sistema FIM */

}




