Feature: Busca de produtos
  Como um usuário
  Quero buscar produtos pelo campo de busca
  Para encontrar rapidamente o item desejado

    Scenario Outline: Produto é exibido nos resultados ao realizar uma busca
        Given que estou na página inicial da loja
        When eu busco por "<produto>" no campo de busca
        Then o produto "<produto>" deve aparecer nos resultados de busca

    Examples:
        |produto                 |
        |HP ROAR WIRELESS SPEAKER|