module.exports = function createIndex(collection, indexSpec,indexName, options){
  // check if this is an mongodb collection instance; 
  //check the options here 
  options = options ? options : {v:2,name:indexName};
  collection.ensureIndex(indexSpec, options, function(){
    console.log('success');
  }); 
  return true; // return true when index is create successuflly
};