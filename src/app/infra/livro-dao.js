class LivroDao {

    constructor(db) {
        this._db = db;
    }

    listaLivros() {
        return new Promise((resolve, reject) =>{
            this._db.all(
                'SELECT * FROM livros',
                function(erro, resultados) {
                    if(erro) return reject('Se fodeu! Não fiu possível listar livros!');
                   
                    return resolve(resultados);
                }        
            )
        })
       
    }

}

module.exports = LivroDao; 