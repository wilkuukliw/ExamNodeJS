const { Model } = require('objection');

const Application = require('./Application.js')

class Doggo extends Model {
    
    static tableName = 'doggos'

    static relationMappings = { 
        applications: {
            relation: Model.HasManyRelation,    //documentation >> https://vincit.github.io/objection.js/guide/relations.html
            modelClass: Application,
            join: {
                from: 'doggos.id',
                to: 'applications.doggoId'
            }
        }
    }
}


module.exports = Doggo;