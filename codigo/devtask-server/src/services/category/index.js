const { create } = require('./create.service')
const { list } = require('./list.service')
const { get } = require('./get.service')
const { update } = require('./update.service')
const { deleteOne } = require('./delete.service')

module.exports = {
  create,
  list,
  get,
  update,
  deleteOne
}
