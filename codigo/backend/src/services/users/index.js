const { register } = require('./register.service')
const { update } = require('./update.service')
const { deleteOne } = require('./delete.service')
const { list } = require('./list.service')
const { get } = require('./get.service')



module.exports = {
  get,
  list,
  register,
  update,
  deleteOne
}
