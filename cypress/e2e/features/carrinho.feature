# language: pt
Funcionalidade: Carrinho
 O usuário deve conseguir adicionar um produto ao carrinho,
 e as informações do carrinho devem ser exibidas corretamente.

 Cenario: Carrinho deve esta vazio quando não houver produto adicionado
    Dado que estou na home
    Quando acessar o carrinho sem produto adicionado
    Então vejo carrinho sem produto

  Cenario: Adicionar um produto ao carrinho com sucesso
    Dado que estou na home
    Quando adicionar um produto no carrinho
    Então vejo produto adicionado com sucesso

  Cenario: Adicionar um ou mais produto ao carrinho com sucesso
    Dado que estou na home
    Quando adicionar um ou mais produto no carrinho
    Então vejo produto adicionado com sucesso

  Cenario:Remover produtos do carrinho com sucesso
    Dado que estou na home
    E adicionar um produto no carrinho
    Quando remover o produto
    Então vejo produto removido com sucesso