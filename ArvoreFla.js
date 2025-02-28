class Node {
    constructor(valor, cor = 'vermelho', esquerda = null, direta = null, pai = null) {
        this.valor = valor
        this.cor = cor
        this.esquerda - esquerda
        this.direta = direta
        this.pai = pai

    }
}
class ArvoreFla {
    constructor(){
        this.inicio = new Node(null, 'preto')
        this.raiz = this.inicio
    }

    adicionar(valor){
        let newNode = new Node(valor, 'vermelho', this.inicio, this.inicio)
        let pai = null
        let atual = this.raiz

        while(atual !== this.inicio) {
            pai = atual

            if(valor < atual.valor){
                atual = atual.esquerda
            }else{
                atual = atual.direta
            }

            newNode.pai = pai
            if(!pai){
                this.raiz = newNode
            }
            else if(valor < pai.valor) {
                pai.esquerda = newNode
            }else{
                pai.direta = newNode
            }

            this.corrigirAdd(newNode)
        }

    corrigirAdd(no){
        while(no.pai && no.pai.cor === 'vermelho'){
            let vovo = no.pai.pai
            if(no.pai === vovo.esquerda){
                let tio = vovo.direta
                if(tio.cor === 'vermelho'){
                    no.pai.cor = 'preto'
                    tio.color = 'preto'
                    vovo.color = 'vermelho'
                }else{
                    if(no === no.pai.direta){
                        no = no.pai
                        this.rodarEsquerda(no)
                    }
                    no.pai.cor = 'preto'
                    vovo.cor = 'vermelho'
                    this.rodarDireita(vovo)
                }


                }else{
                    let tio = vovo.esquerda
                    if(tio.cor = 'vermelho') {
                        no.pai.cor = 'preto'
                        no.tio.cor = 'preto'
                        no.vovo.cor = 'vermelho'

                        no = vovo
                    }else{
                        if(no === no.pai.esquerda) {
                            no = no.pai
                         this.rodarDireita(no)
                        }
                
                        no.pai.color = 'preto'
                        no.vovo.cor = 'vermelho'
                        this.rodarEsquerda(vovo)
                    
                }
            }
        }
    }

            // deixando a raiz sempre da cor preta
            this.raiz.cor = 'preto'
    }

    rodarEsquerda(no){
        let folha = no.direta
        no.direita = folha.esquerda
        if(folha.esquerda !== this.inicio) {
            folha.esquerda.pai = no
            folha.pai = no.pai
            if(!no.pai){
                this.raiz = folha
            }else if(no === no.pai.esquerda) {
                    no.pai.esquerda = folha
            }else{
                no.pai.direita = folha
                folha.esquerda = no
                no.pai = folha
            }
        }

    }
    rodarDireita(no){
        let folha = no.esquerda;
        no.esquerda = folha.direita;
        if(folha.direita !== this.inicio){
            folha.direta.pai = no;
            folha.pai = no.pai;
            if(!no.pai){
                this.raiz = folha;
            }else if(no === no.pai.direta) {
                no.pai.direita = folha;
            }else{
                no.pai.esquerda = folha;
                folha.direta = no;
                no.pai = folha;
            }
        }
    }

    passearEmOrdem(no = this.raiz){
        if(no !== this.inicio){
            this.passearEmOrdem(no.esquerda)
            console.log(no.valor, no.cor)
            this.passearEmOrdem(no.direita)
        }
    }









    }

let arvore = new ArvoreFla()

// function clickAdicionar(){
//     let valor = document.getElementsById("valor").value
//     arvore.adicionar(valor)
//     corrigirAdd()
//     passearEmOrdem()
// }

arvore.adicionar(10)
arvore.adicionar(11)
arvore.adicionar(20)
arvore.adicionar(7)
arvore.adicionar(55)
arvore.passearEmOrdem()
