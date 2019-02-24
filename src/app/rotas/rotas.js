module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> server operando com sucesso! </h1>
                    </body> 
                </html> 
        `
        );
    
    });
    
    app.get('/livros', function(req, resp){
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Listagem de livros!! </h1>
                    </body> 
                </html> 
        `
        );
    
    });
    

};
