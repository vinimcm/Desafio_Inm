Feature: Validação de produto na tela de pagamento
  Como um usuário
  Quero verificar os produtos incluídos no carrinho
  Para garantir que os detalhes estejam corretos antes de finalizar a compra

    Scenario Outline: Validar nome e valor do produto na página de pagamento
        Given que estou na página de pagamento com o produto "<produto>" no carrinho
        When o produto é exibido na lista de itens
        Then o nome do produto deve ser "<produto>"
        And o valor do produto deve ser "<valor>"
        

    Examples:
    |produto                 | valor|
    |HP ROAR WIRELESS SPEAKER|$84.99|