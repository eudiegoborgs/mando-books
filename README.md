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
