const http = require("http");
const port = 3000;

const rotas = {
    '/': 'curso de node', 
    '/livros': 'entrei na pagina de livros',
    '/autores': 'listage de autores ',
    '/editora': 'pagina editora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url]);
})

server.listen(port, () =>{
    console.log(`servidor escutando em http://localhost:${port}`)
})