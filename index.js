// Code your solution here

function findMatching(listname, name){
  return listname.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}