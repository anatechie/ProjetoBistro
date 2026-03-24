class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    exibirProduto(){
        console.log(`${this.nome} - R$${this.preco} | Estoque ${this.quantidade}`)
    }

    vender(){
        if(this.quantidade > 0){
            //this.quantidade += quantidade
            this.quantidade--
            console.log(`Unidade de ${this.nome} foi vendido`)
        }else{
            console.log(`${this.nome} está sem estoque`)
            //console.log('')
        }
    }

    repor(qtdReposicao){
        if(quantidade > 0){
            this.quantidade += qtdReposicao
            console.log(`${this.quantidade} de ${this.nome} foram adicionados ao estoque`)
        }else{
            console.log('Quantidade inválida')
        }
    }
}


class Bebida extends Produto{
    constructor(nome, preco, quantidade, tamanho){
        super(nome, preco, quantidade)
        this.tamanho = tamanho 
    }

    //metodo
    exibirProduto(){
        console.log(`${this.nome} - R$${this.preco} Tamanho - ${this.tamanho} Estoque ${this.quantidade}`)
    }


}


class Comida extends Produto{
    constructor(nome, preco, quantidade, tipo ){
        super(nome, preco, quantidade)
        this.tipo = tipo
    }

    exibirProduto(){
        console.log(`${this.nome} - R$${this.preco}  ${this.tipo} | Estoque ${this.quantidade}`)
    }


}


class Pedido{
    constructor(cliente){
        this.cliente = cliente
        this.itens = []
    }

    adicionarItem(produto){
        if(produto.quantidade > 0){
            this.itens.push() //adiciona e joga para casa posterior, mantem a ordem

        }else{
            console.log(`${this.nome} está sem estoque`)
        }
    }

    verPedidos(){
        console.log(`${this.itens}`)
        if(this.itens.length === 0){
            console.log('Pedido sem produto')
        }

        this.itens.forEach((item, index) => { //for each = para cada
            console.log(`${index + 1}, ${item.nome}, R$${this.preco}`)
        })
    }

    calcularTotal(){
        let total = 0
        this.itens.forEach(item =>{
            total += item.preco
        });
        return total 
    }

    fecharPedido(){
        this.verPedidos()

        console.log(`Total a pagar ${this.calcularTotal()}`)
    }
}


