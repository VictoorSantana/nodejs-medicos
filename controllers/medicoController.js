
var express = require('express');
var router = express.Router();

const Medico = require('../models/medico');
const Especialidade = require('../models/especialidade');


router.get('/', async (req, res) => {

    res.render('medico/index', {
        teste: 'Hello World From NodeJS',
    });

});

router.get('/adicionar', async (req, res) => {

    Especialidade.find()
    .then(especialidade => {
      res.render('medico/add', {
        espc: especialidade,        
      });
    })
    .catch(err => {
      console.log(err);
    });

});


router.post('/adicionar', async (req, res) => {

    const nome = req.body.nome;
    const crm = req.body.crm;

    const medico = new Medico({
        nome,
        crm
      });

      medico
        .save()
        .then(result => {          
          console.log('Novo médico adicionado!');
          res.redirect('/medico/');
        })
        .catch(err => {
          console.log(err);
        });

});

router.post('/crm/', async (req, res) => {

  
});


module.exports = router;