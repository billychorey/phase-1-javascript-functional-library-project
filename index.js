function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }

  function myMap(collection, callback) {
    // Initialize an empty array to store the mapped values
    let mappedArray = [];

    if (Array.isArray(collection)) {
        // If the collection is an array, use Array.prototype.map()
        mappedArray = collection.map(callback);
    } else if (typeof collection === 'object' && collection !== null) {
        // If the collection is an object, iterate through its values and apply the callback
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                const value = collection[key];
                mappedArray.push(callback(value, key));
            }
        }
    }

    return mappedArray;
}



  function myReduce(collection, callback, acc = undefined) {
    const values = Array.isArray(collection) ? collection.slice() : Object.values(collection);

    if (acc === undefined) {
        acc = values.shift();
    }

    for (let value of values) {
        acc = callback(acc, value, collection);
    }

    return acc;
}




  function myFind(collection, predicate) {
    for (let key in collection) {
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  
    return undefined;
  }

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }

  function myFilter(collection, predicate) {
    let result = [];
  
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      for (let key in collection) {
        if (predicate(collection[key])) {
          result.push(key);
        }
      }
    } else if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    }
  
    return result;
  }

  function mySize(collection) {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      let count = 0;
      for (let key in collection) {
        count++;
      }
      return count;
    } else if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return 0;
    }
  }



  function myFirst(array, n) {
    if (n) {
      return array.slice(0, n);
    } else {
      return array[0];
    }
  }

  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    } else {
      return array[array.length - 1];
    }
  }