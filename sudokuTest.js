var baseArray = [1,2,3,4,5,6,7,8,9
]


var hArray1 = [0,6,0,1,0,4,0,5,0]
var hArray2 = [0,0,8,3,0,5,6,0,0]
var hArray3 = [2,0,0,0,0,0,0,0,1]
var hArray4 = [8,0,0,4,0,7,0,0,6]
var hArray5 = [0,0,6,0,0,0,3,0,0]
var hArray6 = [7,0,0,9,0,1,0,0,4]
var hArray7 = [5,0,0,0,0,0,0,0,2]
var hArray8 = [0,0,7,2,0,6,9,0,0]
var hArray9 = [0,4,0,5,0,8,0,7,0]


var vArray1 = [0,0,2,8,0,7,5,0,0]
var vArray2 = [6,0,0,0,0,0,0,0,4]
var vArray3 = [0,8,0,0,6,0,0,7,0]
var vArray4 = [1,3,0,4,0,9,0,2,5]
var vArray5 = [0,0,0,0,0,0,0,0,0]
var vArray6 = [4,5,0,7,0,1,0,6,8]
var vArray7 = [0,6,0,0,3,0,0,9,0]
var vArray8 = [5,0,0,0,0,0,0,0,7]
var vArray9 = [0,0,1,6,0,4,2,0,0]


var bArray1 = [0,6,0,0,0,8,2,0,0]
var bArray2 = [1,0,4,3,0,5,0,0,0]
var bArray3 = [0,5,0,6,0,0,0,0,1]
var bArray4 = [8,0,0,0,0,7,0,0,6]
var bArray5 = [4,0,7,0,0,0,9,0,1]
var bArray6 = [0,0,6,3,0,0,0,0,4]
var bArray7 = [5,0,0,0,0,7,0,4,0]
var bArray8 = [0,0,0,2,0,6,5,0,8]
var bArray9 = [0,0,2,9,0,0,0,7,0]


var results = [];

function removeElement(arrayName,arrayElement)
 {
    for(var i=0; i<arrayName.length;i++ )
     {
        if(arrayName[i]==arrayElement)
            arrayName.splice(i,1);
      }
  }

  function removeTest(){
    removeElement(hArray9, 0);
    removeElement(hArray9, 0);
    removeElement(vArray1, 0);
    removeElement(vArray1, 0);
    removeElement(bArray7, 0);
    removeElement(bArray7, 0);
  }




  function mergeArray() {
  return results = baseArray.concat(hArray9, vArray1, bArray7).sort();
};

function removeDuplicate(e, index) {
  if(e != results[index+1] && e != results[index-1]){
    return e;
  }
};

function runTest(){
  removeTest();
  mergeArray();
  possibleAns = results.filter(removeDuplicate);
}
