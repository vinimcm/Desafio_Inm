Feature: Adição de produto ao carrinho
  Como um usuário
  Quero adicionar produtos ao meu carrinho
  Para que eu possa comprá-los posteriormente

    Scenario Outline: Adicionar um produto com cor e quantidade ao carrinho
        Given que estou na página do produto "<produto>"
        When eu seleciono a cor "<cor>" e a quantidade "<quantidade>"
        And adiciono o produto ao carrinho
        Then o produto "<produto>" com cor "<cor>" e quantidade "<quantidade>" deve aparecer no carrinho

    Examples:
        |produto                      |quantidade |cor    |
        |HP ROAR WIRELESS SPEAKER     |1          |YELLOW |

        