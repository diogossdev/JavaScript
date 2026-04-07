//Exercício de Sistema Bancário

//Criando a classe
class ContaBancaria{
    constructor(titular){
        this.titular = titular
        this.saldo = 0 //valor padrão
    }

    //método de depósito
    depositar(valor){
        this.saldo += valor
        console.log(`Depósito de ${valor} feito! Agora seu novo saldo é de ${this.saldo}R$.`)
    }

    //método de saque
    sacar(valor){
        if (this.saldo - valor < 0){
            console.log('ERRO --- Saldo Insuficiente')
        } else{
            self.saldo -= valor
            console.log(`Saque de ${valor} feito! Agora seu novo saldo é de ${this.saldo}R$.`)
        }
    }
}

//Programa Principal
const minhaConta = new ContaBancaria("Diogo")
minhaConta.depositar(100)
minhaConta.depositar(50)
minhaConta.sacar(500)
minhaConta.sacar(65)