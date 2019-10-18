const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  remove,
};

function find() {
  return db('movies');
}

function findById(id) {
  return db('movies')
    .where({ id })
    .first();
}

function add(scheme) {
  return db('movies')
    .insert(movie)
    .then(ids => {
      return findById(ids[0]);
    });
}


function remove(id) {
  let movie = findById(id);
  return db('movie')
    .where({id})
    .del()
    .then(res=>{
      if(res){
        return movie;
      } else{
        return null;
      }
    });
}
