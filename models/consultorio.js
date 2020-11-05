const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consultorioSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  telefone: {
    type: Number,
    required: true
  },
  especialidades: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Especialidade',
        required: true
      },
      nome: { type: String, required: true }
    }
  ]
});


module.exports = mongoose.model('Consultorio', consultorioSchema);