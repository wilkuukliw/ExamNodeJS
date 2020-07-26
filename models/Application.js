const { Model } = require('objection');

const Doggo = require('./Doggo.js')

class Application extends Model {
    
    static tableName = 'applications'

    static relationMappings = { 
        doggo: {
            relation: Model.BelongsToOneRelation,   // bi-directional
            modelClass: Doggo,
            join: {
                from: 'applications.doggoId',
                to: 'doggos.id'
            }
        }
    }
}

module.exports = Application;