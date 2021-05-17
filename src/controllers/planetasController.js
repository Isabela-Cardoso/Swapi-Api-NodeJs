const https = require ('https');

Planeta = require ('../models/planetaModel')


//consumindo a API 

var swapi = (url) => {
    
    return new Promise( (resolve, reject) => {

        https.get(url, (resp) => {

            var dados = '';

            resp.on('data', (par) => {
                dados += par;

            });

            resp.on('end', () => {

                var resultado = JSON.parse(dados)['results'][0];
                resolve(resultado)

            });

        }).on('Error', (err) => {

            reject(err)

        });
    });

}

exports.index = (req, res) => {

    Planeta.get( (err, planetas) => {
        if(err){
            res.json({
                status: "Erro",
                message: "Deu ruim aqui ó"
            });
        }
        res.json({
            status: "Tudo certo Isabela",
            message: "Carregada a lista de planetas! UHUL",
            data: planetas

        });
    });
};

//Utilizando a API para exportar os dados

exports.new = (req, res) => {
    const nomeDoplaneta = req['body']['nome'];

    if (nomeplaneta) {

        swapi('https://swapi.co/api/planets/?search=' + nomeDoplaneta).then( (result) => {
            if (result !== undefined) {
                req.body['quantidadeDeAparicoes'] = result['films'].length;
            }

            var novo_planeta = new Planeta(req.body);

            novo_planeta.save( (err, planeta) => {
                if (err)
                    res.send(err);
                    res.json(planeta);
            });
        })

    } else {
        res.json({message: 'Digite o nome do planeta.'});
    }
};


//Busca planeta por nome

exports.v = (req, res) => {
    Planeta.findOne({
        nome: req.params.nome
    }, (err, planeta) => {
        if (err) {
            return res.send(err);
        }

        res.json({
            message: "Carregando dados do planeta!",
            data: planeta
        })

    })
}

//ID - localização 

exports.view = (req, res) => {
    Planeta.findById(req.params.planeta_id, (err, planeta) => {
        ir (err)
        res.send(err);
        
        res.json({
            message:'Carregando os dados do planeta!',
            data: planeta
        });
    });
;
}

//Deletando planeta pelo ID

exports.delete = (req, res) => {
    Planeta.remove({
        _id: req.params.planeta_id
    }, (err, planeta) => {
        if (err)
        res.send(err);

        res.json({
            status: "Deu bom",
            message: "Planeta deletado com sucesso!"
        });
    });
};


