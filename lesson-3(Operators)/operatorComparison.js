// Operator Comparison
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators



0 == false;     // true
0 == null;       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'}; 
object1.key == object2.key //true
0 == undefined;  // false
null == undefined;  // true


console.log("undefined == null", undefined == null);
console.log("null == 0", null == 0);
var test;
console.log("declared empty variable == undefined ",test == undefined);
console.log("[] == null", [] == null);
console.log("[] == undefined", [] == undefined);
console.log("{} == undefined", {} == undefined);
console.log("{} == null", {} == null);
console.log("true == 1", true == 1);
console.log("false == 1", false == 1);



// Object with equality problem

var car = { name: "Car" }, bike = { name: "Car" };
console.log(car, bike);
console.log('car == bike: ', car == bike , "false becuase the object refereing to different reference"); // false becuase the object refereing to different reference
console.log('car.name == bike.name',car.name == bike.name , "True because value are same"); // True because value are same

car = bike; // Assign bike object to car 
console.log("car = bike; // Assign bike object to car ");
console.log("car == bike",car == bike, "// true becuase the object refereing to same reference"); // true becuase the object refereing to same reference
console.log("bike.name = Bike; // I have changed bike name property ");
bike.name = "Bike"; // I have changed bike name property 

console.log("car.name",car.name, "// Its' showing car name as Bike but i havent updated"); // Its' showing car name as Bike but i havent updated


