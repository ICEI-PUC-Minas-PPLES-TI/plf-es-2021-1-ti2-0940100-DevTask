const { create } = require('./create.service')
const { update } = require('./update.service')
const { deleteOne } = require('./delete.service')
const { list } = require('./list.service')
const { get } = require('./get.service')



module.exports = {
  get,
  list,
  create,
  update,
  deleteOne
}
