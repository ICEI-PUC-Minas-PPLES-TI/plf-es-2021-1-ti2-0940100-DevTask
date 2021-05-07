'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Adminisitrador',
        cpf_cnpj: '0000000000000',
        phone: '0000000000000',
        email: 'admin@devtask.com',
        password:
          '$2a$04$ZzL9D/AdWJU/D/sIAfK9q.K7vDQzM524Cv9qWkgqrMXDp7xjxtEnK',
        description: ' ',
        admin: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
