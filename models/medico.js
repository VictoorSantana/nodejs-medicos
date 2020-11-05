const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicoSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  crm: {
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


module.exports = mongoose.model('Medico', medicoSchema);