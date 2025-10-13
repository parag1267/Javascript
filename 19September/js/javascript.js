// let cars = {
//     name : 'Creata',
//     model : 2026,
//     color : 'Black',
//     greet : function(){
//         return "Hello " + this.name;
//     }
// }

// console.log(cars);
// console.log(cars.greet());
// Access 
// console.log(cars.name);

// Adding / Modifying
// cars.year = 2026;
// cars.color = 'White';
// cars.model = 2024;
// cars.color = 'Black';
// cars.average = 16;
// console.log(cars);

// Delete 
// delete cars.average;
// console.log(cars);


// For..in
// for (const key in cars) {
//     console.log(key);
//     console.log(key,cars[key]);
// }



// Iteration method
// console.log(Object.keys(cars));
// console.log(Object.values(cars));
// console.log(Object.entries(cars));

// Checking properties
// console.log("name" in cars);
// console.log(cars.hasOwnProperty("color"));


// Object.assign()
// let obj1 = {
//     a:1
// }
// let obj2 = {
//     b:2
// }

// let merged = Object.assign({},obj1,obj2);
// console.log(merged);


// Spread Opeartor
// let obj1 = {
//     a:1
// }
// let obj2 = {
//     b:2
// }

// let merged = {...obj1,...obj2};
// console.log(merged);

// Object.freeze()
// let cars = {
//     name : "Creata",
//     color : "Black"
// }
// Object.freeze(cars);
// cars.name = "Fortuner";
// cars.model = 2026;
// cars.year = 2026;
// console.log(cars);

// Object.seal()
// let cars = {
//     name : "Creata",
//     color : "Black"
// }
// Object.seal(cars);
// cars.name = "Creata extraes";
// cars.year = 2026;
// cars.model = 2026;
// delete cars.name
// console.log(cars);


// Destrucuturing Objects
// let cars = {
//     name : "Creata",
//     color : "White"
// }
// let {name,color} = cars;
// console.log(name);
// console.log(color);


// Nested Object
// let cars = {
//     name : "Creata",
//     model : 2026,
//     year : 2026,
//     color : {
//         color1 : "White",
//         color2 : "Black"
//     }
// }
// console.log(cars);
// console.log(cars.name);
// console.log(cars.year);
// console.log(cars.color.color1);
// console.log(cars.color.color2);
