
  

# docker-compose-test

Projeto teste para aplicação de docker-compose na criação de  containers de bancos de dados e um servidor em nodejs.

### Requisitos

* [Docker] - Docker para gerenciamento de imagens e containers;
* [Docker-compose] - Docker-compose para orquestração de containers;

  

### Instalação

Após clonar este projeto, acesse o diretório docker-file-test e em seguida execute o comando 'docker-compose up -d'. Este comando irá executar o composer para a criação das imagens e containers necessários para que o projeto execute. 
* Postgres e PgAdmin4: Você pode acessar o pgadmin4 criado através do composer no endereço http://localhost:5433 com usuário e senha 'user'. Crie uma conexão com o banco postgres que está executando no ip 172.28.1.3 e com usuário e senha 'root'.
* MongoDB e nosqlClient: Para ter acesso ao nosqlClient, acesse o endereço http://localhost:27018. Crie uma conexão com o banco MongoDB através do ip 172.28.1.1 com usuário e senha 'root' e no campo 'Database Name' deixe vazio ou 'admin'.
* Redis: O banco de dados Redis estará em execução na porta 6379 e pode ser acessado através do terminal anexado no container respectivo;
*  API server de teste: Para testar o servidor/API criado através do projeto em NodeJs neste repositório, faça uma requsição get através de seu navegador ou client http ([Postman], [Insomnia], etc) no endereço http://localhost:3001.


### Contato

welingtonfidelis@gmail.com
Sugestões e pull requests são sempre bem vindos =)

License
----
MIT
**Free Software, Hell Yeah!**


[//]:  #  (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Docker-container]: <https://docs.docker.com/compose/install/>
[Docker]: <https://www.docker.com/get-started>
[Postman]: <https://www.postman.com/downloads/>
[Insomnia]: <https://insomnia.rest/>
