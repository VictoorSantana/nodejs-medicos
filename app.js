const path = require('path');
const express = require('express'); //npm install express
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const medicoController = require('./controllers/medicoController');
const errorController = require('./controllers/error');

const User = require('./models/user');


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/medico', medicoController);
app.use(errorController.get404);

app.listen(5000, () => {
    console.log('Servidor está rodando na porta 5000');
});



mongoose
    .connect('mongodb+srv://victorls:q1w2e3@cluster0.xeftu.mongodb.net/desafio?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'Victor',
                    email: 'victor@test.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });