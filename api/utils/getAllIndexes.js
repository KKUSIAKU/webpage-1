
module.exports = function getAllIndexes(collection){
  // need to check is this is instance on mongoDb collection
  return collection.indexes();
}; 