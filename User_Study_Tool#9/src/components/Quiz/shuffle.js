const _ = require("lodash"); 

const shobj = {
    shuffleObject : function(obj) {
        // Get object key into tmp array in random order
        var keys = this.shuffle(_.keys(obj));
      
        // instantiate new object who will be returned
        var newObj = {};
      
        // Iterate over keys to populate object with same properties in a different order
        keys.forEach(function(elm, index){
          newObj[elm] = obj[elm];
          if(index === keys.length-1){
            return newObj;
          }
        })
      }
}


function groupBy(iterable, keyFn = obj => obj) {
    const groups = new Map();
    for (const item of iterable) {
      const key = keyFn(item);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    }
    return groups;
  }

  function shuffle(array) {
    array = array.slice(0);
    for (let limit = array.length; limit > 0; --limit) {
      const index = Math.floor(Math.random() * limit);
      array.push(...array.splice(index, 1));
    }
    return array;
  }
