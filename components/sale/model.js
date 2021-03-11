const mongoose = require('mongoose')

const descriptionSaleSchema = new mongoose.Schema({
 idBook: { type: Schema.Types.ObjectId, required: true, ref: 'books' },
 nameBook: { type: String, required: true },
 priceBook: { type: Number, required: true, min: 0 },
 quantity: { type: Number, required: true, min: 1 }
})
const saleSchema = new mongoose.Schema({
    date: { type: Date, required: false, default: Date.now },
    total: { type: Number, required: true, min: 0 },
    idClient: { type: Schema.Types.ObjectId, required: true, reference: 'clients' },
    details: {
      type: [descriptionSaleSchema],
      required: false,
      validate: {
        validator: (val) => {
          return Array.isArray(val) && val.length > 0
        },
        message: props => 'Error la venta debe tener descripcion'
      }
    },  

}, {
  timestamps: true
})

const Sale = mongoose.model('sale', saleSchema)

module.exports = Sale
