# Árvore Binária Vermelha e preta

# Introdução:

Uma Árvore Binária Vermelha e Preta é uma estrutura de dados que nos permite armazenar e organizar dados de maneira mais eficiento, usando nós na estruturação dos daods no projeto. O difecial desse tipo de Árvore binária é o armazenamento da cor preta ou vermelha em suas características.

# Regras desse tipo de Árvore Binária:

A Árvore rubro-negra possue algumas regras, entre elas estão:

O nó raiz (nó superior) é sempre preto.

Nós vermelhos não podem ter filhos vermelhos (dois nós vermelhos não podem estar próximos um do outro).

Cada caminho da raiz até a folha tem o mesmo número de nós pretos.

A árvore permanece equilibrada usando essas regras, o que ajuda a manter sua altura (o caminho mais longo da raiz até a folha) o mais curta possível.

Graças a essas regras, é garantido que a árvore permaneça balanceada, o que significa que operações como pesquisar, inserir e excluir dados podem ser feitas de forma mais rápida e eficiente.

# Propriedades:

Cores dos nós:
Cada nó em uma Árvore Rubro-Negra é vermelho ou preto. Essa coloração ajuda a manter o equilíbrio da árvore.

Propriedade Raiz:
A raiz da árvore (o nó mais alto) é sempre preta. Essa propriedade garante que a árvore comece com um estado equilibrado.

Propriedade Vermelha:
Nós vermelhos não podem ter filhos vermelhos. Em outras palavras, se um nó é vermelho, ambos os seus filhos devem ser pretos. Essa propriedade impede nós vermelhos consecutivos ao longo de qualquer caminho na árvore, ajudando a manter o equilíbrio.

Propriedade Negra:
Cada caminho de um nó para suas folhas descendentes (nós nulos) deve ter o mesmo número de nós pretos. Essa propriedade garante que nenhum caminho seja significativamente mais longo do que qualquer outro, mantendo a árvore balanceada.

Propriedade de profundidade:
Todas as folhas (nós nulos) são consideradas pretas. Este é um detalhe técnico que simplifica a implementação e garante que as outras propriedades sejam aplicadas consistentemente.

# Exemplo de uma Árvore Vermelha e preta:

![image](https://github.com/user-attachments/assets/cf07dc28-e662-4ffb-9243-fcdc10347f41)
Neste exemplo:

A raiz (10) é sempre preta.

Os nós vermelhos (5, 15, 30) não possuem filhos da cor vermelha.

Cada caminho da raiz até as folhas tem o mesmo número de nós pretos.
