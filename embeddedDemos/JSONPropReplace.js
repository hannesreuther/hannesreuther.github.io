// function createProperty (){

 //   var obj = {
  //      "attr1": "value1",
    //    "attr2": "value2"
 // };
  //var waterlevel = 1
  //obj["waterLevel"] = "waterlevel";
  
//  console.log(obj);

 // var parse_obj = JSON.parse(Str_txt);
//parse_obj['waterLevel'].push({"waterlevel"});
//Str_txt = JSON.stringify(parse_obj);
//Output //"{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"},{"teamId":"4","status":"pending"}]}"

/*function editJSON () {


    jsonfile.readFile(example.json, callback)

var obj = {
    table: []
 };
 obj.table.push({id: 1, square:2});

 var json = JSON.stringify(obj);

 JSON.stringify({ : 5, y: 6 })

 var fs = require('fs');

fs.readFile('example.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.table.push({id: 2, square:3}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('example.json', json, 'utf8', callback); // write it back 
}0
}*/
/*
const jsonfile = require('jsonfile')
 
const file = 'example.json'
const obj = {['metaObjects']:2,blabla:"hdhss"}
 
jsonfile.writeFileSync(file, obj)





  // the code you're looking for
var needle = "32IHwvbWr6LOFhvUQRyDii";

// iterate over each element in the array
for (var i = 0; i < obj.length; i++){
  // look for the entry with a matching `code` value
  if (obj['metaObjects'][i].code == needle){
     // we found it
    // obj[i].name is the matched result
    
  }
}

  
*/
/*
 * searches deep into an object recursively...
 * @param {Object} obj object to be searched
 * @param {any} searchValue the value/key to search for
 * @param {Object} [options]
 * @param {boolean} options.[searchKeys] whether to search object keys as well as values. Defaults to `true` if `serchValue` is a string, `false` otherwise.
 * @param {number} options.[maxDepth=20] maximum recursion depth (to avoid "Maximum call stack size exceeded")
 * @returns {string[]} Paths on the object to the matching results
 
const findPaths = (
    example.json,
    searchValue,
    { searchKeys = typeof searchValue === "32IHwvbWr6LOFhvUQRyDii", maxDepth = 20 } = {}
  ) => {
    const paths = []
    const notObject = typeof searchValue !== "object"
    const gvpio = (obj, maxDepth, prefix) => {
      if (!maxDepth) return
  
      for (const [curr, currElem] of Object.entries(obj)) {
        if (searchKeys && curr === searchValue) {
          // To search for property name too ...
          paths.push(prefix + curr)
        }
  
        if (typeof currElem === "object") {
          // object is "object" and "array" is also in the eyes of "typeof"
          // search again :D
          gvpio(currElem, maxDepth - 1, prefix + curr + "/")
          if (notObject) continue
        }
        // it's something else... probably the value we are looking for
        // compares with "searchValue"
        if (currElem === searchValue) {
          // return index AND/OR property name
          paths.push(prefix + curr)
          console.log(paths)
        }
      }
    }
    gvpio(obj, maxDepth, "")
    return paths
  }

console.log("pimmepl")
console.log(paths)


*/


/*
var x = data.key1.children.key4;

var path = "32IHwvbWr6LOFhvUQRyDii";
function search(path, obj, target) {
    for (var k in obj) {
        if (obj.hasOwnProperty(k))
            if (obj[k] === target)
                return path + "['" + k + "']"
            else if (typeof obj[k] === "object") {
                var result = search(path + "['" + k + "']", obj[k], target);
                if (result)
                    return result;
            }
    }
    return false;
}

var path = search(path, data, x);
console.log(path); //data['key1']['children']['key4']
*/
