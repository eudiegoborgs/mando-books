# Mando Books

![Mando Books Icon](./assets/icon.png)

Mando books é um projeto de um sistema de emprestimo de livros feito para aperfeiçoamento prático do curso extra curricular de testes da EMGE.

Dentro deste repositório você encontrará o front e o back end deste projeto.

## Primeiros passos

Faça um fork deste projeto e use o git para baixar para a sua máquina com o comando `git clone https://github.com/{seu_usuário}/mando-books.git`

Para instalar as dependencias do projeto rode o comando `npm install` nas pastas raiz, interface e api.

Execute o projeto com o comando `npm start` na pasta api e `npm run dev` na pasta interface.

## Prática com o Cypress

Para praticarmos o que aprendemos até aqui, iremos criar os seguintes testes end to end com o cypress para este projeto:

1 - Cenário de cadastro com sucesso:
```
Dado que você deseja criar uma conta
    E informou "um e-mail que ainda não está cadastrado"
    E informou "uma senha com mais de 8 caracteres"
    E informou "um nome válido"
Quando entrar com essas informações no formulário de cadastro
Então uma nova conta deve ser criada e autenticada no sistema
```

2 - Cenário de cadastro com com erro por e-mail já existente:
```
Dado que você deseja criar uma conta
    E informou "um e-mail que já está cadastrado"
    E informou "uma senha com mais de 8 caracteres"
    E informou "um nome válido"
Quando entrar com essas informações no formulário de cadastro
Então uma mensagem de "Já existe outro cadastro com esse e-mail." deverá ser retornada
```

3 - Cenário de login com sucesso:
```
Dado que você deseja fazer login no sistema
    E informou "um e-mail que está cadastrado no sistema"
    E informou "uma senha correta"
Quando entrar com essas informações no formulário de login
Então a conta deve ser autenticada no sistema
```

4 - Cenário de login com com erro por e-mail que não existe:
```
Dado que você deseja fazer login no sistema
    E informou "um e-mail que não está cadastrado no sistema"
    E informou "uma senha correta"
Quando entrar com essas informações no formulário de cadastro
Então uma mensagem de "Usuário não encontrado." deverá ser retornada
```

5 - Cenário de login com com erro por senha invalida:
```
Dado que você deseja fazer login no sistema
    E informou "um e-mail que está cadastrado no sistema"
    E informou "uma senha incorreta"
Quando entrar com essas informações no formulário de cadastro
Então uma mensagem de "Senha invalida." deverá ser retornada
```

6 - Cenário de listar livros com sucesso:
```
Dado que você deseja ver a lista de livros disponiveis no sistema
Quando entrar na pagina de listagem
Então deve encontrar o livro "Arquitetura Limpa" como o primeiro livro da lista
```

7 - Cenário de ver detalhes de um livro com sucesso:
```
Dado que você deseja ver detalhes de um livro
    E selecionou o livro "Arquitetura Limpa" na lista
Quando entrar na pagina de detalhes
Então deve encontrar o titulo "Arquitetura Limpa"
```
## Prática com o Jest

Para praticarmos o que aprendemos até aqui, iremos criar testes de integração que validem os mesmos cenários da tarefa anterior, mas para não virar rotina teremos um cenário extra

8 - Cenário de cadastro de livro com sucesso:
```
Dado que você deseja criar um livro
    E informou "um título"
    E informou "um autor"
    E informou "uma descrição"
    E informou "uma quantidade maior que 0"
Quando entrar com essas informações no formulário de cadastro
Então um novo livro deve ser criado no sistema
```

## DESAFIO EXTRA [VALENDO UM CUPOM DE R$ 50,00 NO IFOOD]: 

No dia 14 de agosto teremos nossa ultima aula e ainda não estou seguro sobre o melhor horário para que ela aconteça, para me ajudar nessa decisão e também gerar um pouco mais de prática resolvi criar esse desafio que consiste em resolver só um cenário e enviar um vídeo gravado pelo Cypress para o e-mail `ferreirabdiego@gmail.com`.

As opções de horários de inicio e fim são:
- 10:00 às 12:00
- 15:00 às 17:00
- 19:00 às 21:00

### Dúvida 1:
- Aluno diz: Ah professor! Mas vc não mostrou como grava vídeo no Cypress... Como vou saber como faz isso? 
- Diego diz: Olha na documentação oficial do cypress https://cypress.io

### Dúvida 2:
- Aluno diz: Ah professor... Esse negócio de ler documentação é chato dms.
- Diego diz: Olha os exemplos que o Cypress gera quando é instalado

### Cenário:
```
Dado que você deseja enviar sua votação sobre o melhor horário disponível para a realização da aula
    E acessou "http://diegoborgs.com.br/"
    E clicou em "CONTATO"
    E informou "seu nome"
    E informou "seu e-mail"
    E informou "uma mensagem" 
    com os seguintes dados "Eu gostaria que a aula do dia 14 de agosto acontecesse de {hora_de_inicio} até a {hora_de_fim}"
Quando entrar com essas informações no formulário de contato
Então você será redirecionado para uma mensagem de agradecimento
```
