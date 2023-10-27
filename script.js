// Q1: How to compare two JSON have the same properties without order?
// a. let obj1 = { name: "Person 1", age: 5 };
// b. let obj2 = { age:5, name: "Person 1"1

let obj1 = {name:"person 1", age:5};
let obj2 = {age:5, name:"person 2"};

var result1= JSON.stringify(obj1);
var result2 = JSON.stringify(obj2);

if (result1 === result2){
    console.log("The two JSON objects are equal.");
} else {
    console.log("The two JSON objects are not equal.");   
}


// Q2:
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    for (var i = 0; i < result.length; i++){
        console.log(result[i].flags);
    }
}






