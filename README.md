# typescript-alura
Esse projeto foi desenvolvido ao longo dos três cursos da formação TypeScript da Alura.

## Sobre o projeto
O projeto consiste num sistema de registro de transações financeiras.
Nele é possível registrar transações com data, quantidade e valor.
Após registradas, as transações são mostradas em uma tabela.

![A tela da aplicação contém uma notificação em azul que indica sucesso ao adicionar uma negociação. No centro há um formulário para cadastro de negociações com dois botões: 'Incluir' e 'Importar'. Na parte inferior há uma tabela com negociações registradas.][negociacoes-incluir]

Também é possível importar dados de transações de uma API.
Um subprojeto que simula uma API foi disponibilizado no diretório `servidor-api`.

![A tela da aplicação contém uma notificação em azul que indica sucesso ao importar negociações. No centro há um formulário para cadastro de negociações com dois botões: 'Incluir' e 'Importar'. Na parte inferior há uma tabela com negociações registradas.][negociacoes-importar]

[negociacoes-incluir]: ./docs/images/negociacoes-incluir.png
[negociacoes-importar]: ./docs/images/negociacoes-importar.png

## Executando o projeto

Clone esse repositório no seu computador:

```
git clone https://github.com/andrefelipeos/typescript-alura.git
```

Entre no diretório criado e instale as dependências do projeto:

```
cd typescript-alura && npm install
```

Execute o projeto com o comando:

```
npm run server
```

Seu navegador padrão deve abrir uma nova aba no endereço `http://localhost:3000/dist/index.html`.

Para utilizar a função de importar transações é preciso executar o subprojeto que simula uma API.
Para isso, entre no subdiretório `servidor-api` utilizando outro terminal e instale as dependências do servidor:

```
cd typescript-alura/servidor-api && npm install
```

Então execute o servidor com o comando:

```
npm start
```

Agora você pode testar todo o projeto, incluindo a função de importação.

## Sobre a formação TypeScript da Alura
Durante os três cursos dessa formação fui apresentado ao sistema de tipos do TypeScript.

A uso de tipos permite que alguns erros sejam detectados rapidamente.
Basta definirmos os tipos esperados para dados passados como parâmetros ou retornados por funções e requisições para APIs.
Caso o tipo de algum dado não corresponda ao tipo esperado, a IDE acusará o erro em tempo de desenvolvimento.
Essa previsibilidade também permite que a IDE autocomplete certas partes do código.

Também fez parte do meu estudo nessa formação:
- a configuração do compilador TypeScript
- o uso de classes, interfaces e polimorfismo
- o uso de herança e dos modificadores de visibilidade
- a solicitação de dados de APIs (uso comum do JavaScript)
