# DevTask

DevTask é uma plataforma de desenvolvedores *freelancers*, no modo *marketplace*. A missão é conectar pessoas — físicas e/ou jurídicas — interessadas em serviços de *software* com os profissionais autônomos. O contato entre os desenvolvedores e clientes é direto via chat ou e-mail, além do suporte técnico em caso de dúvidas ou problemas.

## Integrantes

* Ana Clara Fonseca Campos
* Joao Pedro Mayrink de Jesus

## Professores

* Claudiney Vander Ramos
* Hugo Bastos de Paula
* Joyce Christina de Paiva Carvalho 

## Instruções de utilização

### Server - API - Backend

1. Rode o seguinte comando no terminal para instalar todos os pacotes necessários:

    ``yarn``  ou ``npm install``

2. Crie um banco de dados usando postgreSQL
3. Crie um arquivo .env e preencha ele conforme o arquivo .env.example
4. Rode os comandos a seguir para preencher o banco de dados com as tabelas e itens necessários

        ``npx sequelize-cli db:migrate``
        ``npx sequelize-cli db:seed:all``

5.   Teste a API usando postman de acordo com a coleção a seguir:
    https://www.getpostman.com/collections/c2a276e60b9b121f6a06
6.  Para maiores informações há uma documentação mais detalhada no link a seguir:
    https://www.notion.so/API-aff254c504594b579d664eb74f678bac

### Web - Client-side - Front-end

1. Rode o seguinte comando no terminal para instalar todos os pacotes necessários:

    ``yarn``  ou ``npm install``

2. Rode o comando a seguir para iniciar:

    ``yarn start``  ou ``npx start``

## Histórico de versões

* 0.1.1
    * CHANGE: Atualização das documentacoes. Código permaneceu inalterado.
* 0.1.0
    * Implementação da funcionalidade X pertencente ao processo P.
* 0.0.1
    * Trabalhando na modelagem do processo de negócios.

