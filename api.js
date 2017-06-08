'use strict'

const Api = require('claudia-api-builder')
const api = new Api()
const facts = require('./amsterdam.json')

api.get('/', () => facts)

api.get('/{id}', req => facts.filter(fact =>
  fact.id == req.pathParams.id
)[0])

api.get('/random', () => facts[
  Math.floor(Math.random() * facts .length)
])

module.exports = api
