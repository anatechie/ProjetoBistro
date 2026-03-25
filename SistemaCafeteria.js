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

    repor(quantidade){
        if(quantidade > 0){
            this.quantidade += quantidade
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
            this.itens.push(produto) //adiciona e joga para casa posterior, mantem a ordem
            console.log(`${produto.nome} foi adicionado ao pedido, estoque ${produto.quantidade}`)
        }else{
            console.log(`${produto.nome} está sem estoque`)
        }
    }

    verPedidos(){
        console.log(`${this.itens}`)
        if(this.itens.length === 0){
            console.log('Pedido sem produto')
        }

        this.itens.forEach((item, index) => { //for each = para cada
            console.log(`${index + 1}, ${item.nome}, R$${item.preco}`)
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

class Cafeteria{ 
    constructor(nome){
        this.nome = nome 
        this.cardapio = []

    }

    adicionarProduto(produto){
        this.cardapio.push(produto)

        console.log(`${produto.nome} foi adicionado ao pedido`)
    }

    listarCardapio(){
        //FAZ CONTRA BARRA NO ALT + 92
        console.log(`\n --- CARDÁPIO DA CAFETERIA ${this.nome} ---`)

        if(this.cardapio.length === 0){
            console.log('Nenhum produto no cardápio')
            
            return
        }
        for(let i = 0; i < this.cardapio.length; i++){
            let produto = this.cardapio[i]

            console.log((i + 1) + '.' + produto.nome + ' - R$ ' + produto.preco + ' Estoque: ' +  produto.quantidade)
        }
    }

    buscarProduto(){
        return this.cardapio.find(produto => produto.nome)
    }
}

//instancia de objeto
const cafeteria = new Cafeteria('CafféShop')
const cafeExpresso = new Bebida('Latte', 15, 1, 'Médio')
const capuccino = new Bebida('Capuccino', 10, 1, 'Pequeno')

console.log(capuccino)


const paoDeQue = new Comida('Pão de queijo', 10, 5, 'Comida de Sal')
const croissant = new Comida('Croissant', 25, 2, 'Salgado')
const bolo = new Comida('Bolu di Murango', 15, 2, 'Doce')

cafeteria.adicionarProduto(cafeExpresso)
cafeteria.adicionarProduto(capuccino)
cafeteria.adicionarProduto(paoDeQue)
cafeteria.adicionarProduto(croissant)
cafeteria.adicionarProduto(bolo)


cafeteria.listarCardapio()


//vendas
console.log('--- TESTE DE VENDAS ---')

cafeExpresso.vender()
capuccino.vender()
paoDeQue.vender()
paoDeQue.vender()
paoDeQue.vender()
paoDeQue.vender()
paoDeQue.vender()
paoDeQue.vender()

paoDeQue.exibirProduto()

console.log('--- REPONDO PÃO DE QUEIJO ---')
paoDeQue.repor(10)
cafeExpresso.repor(10)
paoDeQue.exibirProduto()


console.log('--- CRIANDO PEDIDO ---')

const pedido1 = new Pedido('Ana')

//adicionar item dentro de pedido
//pedido1.adicionarItem(paoDeQue)
pedido1.adicionarItem(cafeExpresso)



pedido1.fecharPedido()

//listar cardapio novamente
cafeteria.listarCardapio()


//buscando produto
const produtoEncontrado = cafeteria.buscarProduto('Pão de Queijo')
if(produtoEncontrado){
    console.log('Produto foi encontrado')
}else{
    console.log('O produto não foi encontrado')
}