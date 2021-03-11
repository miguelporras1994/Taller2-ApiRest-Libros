const Sale = require('./model')
 //Create
const createSale = (req, res) => {
    const newSale = new Sale(req.body)
    newSale.save((error, SaleSaved) => {
      if (error) {
        res.status(422).send(error)
      } else {
        res.status(201).send(SaleSaved)
      }
    })
  }
//Delete.

const deleteSale = (req, res) => {
    Sale.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) {
        res.status(500).send(error)
      } else {
        res.status(204)
      }
    })
  }
  //Get

  const getSale = (req, res) => {
    Sale.findById(req.params.id, (error, Sale) => {
      if (error) {
        res.status(500).send(error)
      } else if (book) {
        res.send(book)
      } else {
        res.status(404).send({})
      }
    })
  }

  const getSales = (req, res) => {
    let query = req.query
    if (req.query.name) {
      query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
    }
  
    Sale.find(query, (error, books) => {
      if (error) {
        res.status(500).send(error)
      } else {
        res.send(Sale)
      }
    })
  }

  //Update

  const updateSale = (req, res) => {
    Sale.updateOne({ _id: req.params.id }, req.body, (error, result) => {
      if (error) {
        res.status(422).send(error)
      } else {
        res.send(result)
      }
    })
  }

  module.exports = { createSale, deleteSale, getSale, getSales, updateSale }
