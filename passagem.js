class CLiente{
    #Nome
    #Cpf
    #DataNascimento

    constructor(nome, cpf, dataNascimento){
    this.setNome(nome)
    this.setCpf(cpf)
    this.setDataNascimento(dataNascimento)
}

    setNome(nome){
    while(nome.length>50){
        console.log("Informe seu nome, respeitando o limite de caracteres... 50")
        nome = prompt("Informe o nome novamente...")
    }
    this.#Nome = nome

}

    setCpf(cpf){
    while(cpf.length>11 && cpf.length<11){
        console.log("Informe seu cpf, respeitando o limite de caracteres... 11")
        cpf = prompt("Informe o cpf novamente...")
    }
    this.#Cpf = cpf

}

    setDataNascimento(dataNascimento){
        this.#DataNascimento = dataNascimento
    }

    getNome(){
    return this.#Nome
    }
    getCpf(){
    return this.#Cpf
    }
    getDataNascimento(){
    return this.#DataNascimento
    }
}

class PacoteViagem{
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal

    constructor(passagemA, passagemV) {
        this.setTitular(passagemA)
        this.setPassagemIda(passagemA)
        this.setPassagemVolta(passagemV)
        this.setValorTotal(passagemA)
    }

    setTitular(passagemA){
        this.#Titular = passagemA.getPassageiro()   
    }

    getTitular(){
        return this.#Titular
    }

    setPassagemIda(passagemA){
        this.#PassagemIda = passagemA.getVoo()
    }

    getPassagemIDa(){
        return this.#PassagemIda
    }

    setPassagemVolta(passagemV){
        this.#passagemV = passagemV
    }

    setValorTotal(passagemA){
        this.#ValorTotal = passagemA.getValor()
    }

    getValorTotal(){
        return this.#ValorTotal
    }

    }

class Voo{
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa, numero, data, horario, localDestino, localPartida){
        this.setEmpresa(empresa) 
        this.setNumero(numero)  
        this.setData(data) 
        this.setHorario(horario) 
        this.setLocalPartida(localPartida) 
        this.setLocalDestino(localDestino) 
    }

    setEmpresa(empresa){ 
        this.#Empresa = empresa 
    }

    setNumero(numero){
        this.#Numero = numero
    }

    setData(data){
        this.#Data = data
    }

    setHorario(horario){
        this.#Horario = horario
    }

    setLocalPartida(localPartida){
        this.#LocalPartida = localPartida
    }

    setLocalDestino(localDestino){
        this.#LocalDestino = localDestino
    }

    getEmpresa(){
        return this.#Empresa 
    }

    getNumero(){
        return this.#Numero 
    }

    getData(){
        return this.#Data 
    }

    getHorario(){
        return this.#Horario 
    }

    getLocalPartida(){
        return this.#LocalPartida
    }

    getLocalDestino(){
        return this.#LocalDestino 
    }
}

class PassagemAerea{
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo

    constructor(assento, primeiraClasse, valor, cliente, voo){
        this.setAssento(assento) 
        this.setPrimeiraClasse(primeiraClasse) 
        this.setValor(valor) 
        this.setPassageiro(cliente)
        this.setVoo(voo)
    }

    setAssento(assento){
        this.#Assento = assento
    }

    setPrimeiraClasse(primeiraClasse){
        while(primeiraClasse != true || false){
            console.log("Insira um valor aceitavel, verdadeiro ou falso!.")
            primeiraClasse = prompt("Informe o valor, verdadeiro para sim e falso para não.")
        }

        this.#PrimeiraClasse = primeiraClasse
    }

    setValor(valor){
        while(valor<=0){
            console.log("Não é permitido um valor menor ou igual a 0, informe outro valor.")
            valor = prompt("Informe o novo valor.")
        }

        this.#Valor = valor
    }

    setPassageiro(cliente){
        this.#Passageiro = cliente
    }

    setVoo(voo){
        this.#Voo = voo
    }




    getAssento(){
        return this.#Assento 
    }

    getPrimeiraClasse(){
        return this.#PrimeiraClasse 
    }

    getValor(){
        return  this.#Valor 
    }

    getPassageiro(){
        return this.#Passageiro 
    }

    getVoo(){
        return this.#Voo 
    }




    CalcularValor(){
        if(this.#PrimeiraClasse == true){
            this.#Valor = (this.#Valor/100) * 150
        }

        console.log("Funcionando certinho.")
    }

    ExibirResumo(){
        console.log(" Passagem no nome de: " + this.#Passageiro.Nome + "no assento: " + this.#Assento + " do voo " + this.#Voo.Numero + " com destino a " + this.#Voo.LocalDestino)
    }
}


let cliente = new Cliente("Victor Laves", "35476545370","28/09/2001")

let voo = new Voo("Azul","65322","20/11/2022",14,"Ribeirao Preto, Sao Paulo","Madrid, Espanha")

let passagemA = new PassagemA(14, true, 1500.00, cliente, voo)
passagemA.CalcularValor()

let pacoteViagem = new PacoteViagem(passagemA, "20/11/2022")
