# Desafios:

- Criar teste para o componente de input cobrindo diversos casos:
  - Evento input
  - Valor do input é alterado quando o v-model já contem algum dado
  - Evento Blur
  - Evento Focus
  - Label está sendo renderizada
  - Sinta-se livre para cobrir mais casos que achar necessario.

- Criar teste para o container cobrindo diversos casos:
  - Formulario é renderizado na primeira tentativa
  - Se caso der algum erro no retorno da requisição é mostrado uma mensagem de erro e um botão de tentar novamente.
  - Se caso der algum erro na requisição é mostrado uma mensagem de erro e um botão de tentar novamente.
  - Se der sucesso no retorno da requisição é mostrado uma mensagem de sucesso e não contem o botão de tentar novamente
  - Sinta-se livre para cobrir mais casos que achar necessario.

- Criar componente de botão para o componente LoginForm seguindo o TDD:
  - O botão deve receber as props que um botão padrão recebe.
  - Ele deve ficar desabilitado quando o formulário não estiver preenchido corretamente (Será necessario alterar o teste e o componente LoginForm).
  - Sinta-se livre para cobrir mais casos que achar necessario.
  

Considerações: 
  - No teste do container não devemos acessar os outros componentes, qualquer interação que for necessaria como preencher inputs de um formulario deve ser feito acessando diretamente o elemento, o `userEvent` pode te ajudar com essas interações.

  - Algumas alterações só ocorrem na tela após alguma requisição ou qualquer outra Promise e para ajudar a identificar essas alterações o `waitFor` pode te ajudar.

  - Em algumas situações pode ser necessario fazer o uso de mocks.

  - Não se apague a usar somente o getByTextId. A testing library fornce outros metodos para ver/pegar elementos (Se ta no jogo é pra usar).

  - Você não deve se importar com comportamentos internos do componente, se o componente altera a variavel A ou B após um click no botão isso não te interessa a não ser que seja mostrado na tela, emita um evento ou altera o output de alguma forma.

  - Sempre iremos presumir que lib/api/serviço de terceiros está funcionando corretamente.

  - Qualquer duvida que você tenha, não hesite em perguntar (mas também não hesite em pesquisar no google).