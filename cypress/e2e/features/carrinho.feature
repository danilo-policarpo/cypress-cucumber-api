# language: pt
Funcionalidade: Carrinho
  
  Cenario: Adicionar um produto ao carrinho com sucesso
    Dado que estou na home
    Quando adicionar um produto no carrinho
    Então vejo produto adicionado com sucesso

  Cenario:Remover produtos do carrinho com sucesso
    Dado que estou na home
    E adicionar um produto no carrinho
    Quando remover o produto
    Então vejo produto removido com sucesso