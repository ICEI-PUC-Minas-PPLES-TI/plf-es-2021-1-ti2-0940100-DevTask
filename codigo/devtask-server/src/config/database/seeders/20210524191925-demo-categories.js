'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        title: 'Front-end',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Back-end',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'FullStack',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
