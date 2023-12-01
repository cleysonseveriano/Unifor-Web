# Unifor-Web
Atividade final, desenvolvimento web

O projeto está dividido em duas pastas, uma com o front-end e outra com o back-end. No back end utilizamos Node JS, Mongo DB, entre outros pacotes e o insomnia para as requisições. Já na parte do front-end utilizamos o básico de HTML, CSS, JS e utilizamos bootstrap como framework de estilização.

Para rodar o programa: 
- Você deve estar dentro da pasta back-end => Unifor-Web/back-end
- A API só inicia quando a senha do banco de dados for colocada na Connection String
Connection String: mongodb+srv://cleysontab:<password>@uniforweb-api.heqjtce.mongodb.net/?retryWrites=true&w=majority
- Digite no terminal: node src/index.js, e o servidor da api estará rodando em http://localhost:3000
- Você deve instalar a pasta node_modules
- Express: npm i express
- Manipulação de dados mongodb: npm i mongoose
- Instalação do cors: npm i cors

Front End:
- As páginas do front end estão em pages
- Para realizar o login, utilize estes dados:
    
    {
        email: 'cleyson@unifor.com',
        senha: '123456'
    },
    {
        email: 'heric@unifor.com',
        senha: '123456'
    }

- A lógica do login foi feito dentro do HTML
- Na página de gestão é possível visualizar os usuários cadastrados no sistema, se e somente se a api estiver rodando, caso contrário, estará vazia.

Pontos a melhorar:
- Responsividade, e implementação do do Editar no front end
