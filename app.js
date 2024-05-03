// console.log('hello');
// Question No 1 :
// 1. Suppose You have an array of object 
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

// SOLUTION :


// let itemsArray = [
//     {name:'juice', price:50, quantity:3},
//     {name:'cookie',price:30, quantity:9},
//     {name:'shirt',price:880, quantity:1},
//     {name:'pen',price:100, quantity:2}
// ];

//                      :::::::    THIS IS BETTER WAY    :::::

 


// let juicePrice =(itemsArray[0].price * itemsArray[0].quantity);
// console.log(juicePrice);
// let cookiePrice =(itemsArray[1].price * itemsArray[1].quantity);
// console.log(cookiePrice);
// let shirtPrice =(itemsArray[2].price * itemsArray[2].quantity);
// console.log(shirtPrice);
// let penPrice =(itemsArray[3].price * itemsArray[3].quantity);
// console.log(penPrice);

// let totalPrice = juicePrice + cookiePrice + shirtPrice + penPrice
// console.log(totalPrice);



//                      THIS IS NOT BETTER WAY 

// let eachpricejuice =50*3
// let eachpricecookie= 30*9
// let eachpriceshirt =880*1
// let eachpricepen= 100*2

// let total = eachpricecookie + eachpricejuice + eachpricepen + eachpriceshirt

// console.log(total);
// console.log(135*740);







// Question No 2 :

/* 2. Create an object with properties name, email, password, age, 
 gender, city, country
 Check if age and country properties exist in object or not.
 Also check firstName and lastName properties in object.
*/
// SOLUTION :

// let object = {
//     name : 'Arsalan',
//     email : 'muhammad@gmail.com',
//     password: 'arSaLaN',
//     age : 17 ,
//     gender : 'male' ,
//     city : 'Karachi' ,
//     country : 'Pakistan' ,
// }

// console.log(`This is the age ${object.age}`);
// console.log(`This is the country ${ object.country}`);
// console.log(`This is the first name ${ object.firstname}`);
// console.log(`This is the last name ${ object.lastname}`);


// Question No 3:

// 3. Create a constructor function with some properties. Now 
// create multiple records using the constructor.

// SOLUTION :



// let construct = [
// {name : 'Waheed', position:'Supervisor',age :'39'},
// {name : 'Hammad', position:'Supervisor',age :'40'},
// {name : 'Sabir', position:'Head of supervision Depart',age :'45'},
// {name : 'Jamshed', position:'Worker',age :'55'},

// ];
// console.log(construct[2].name);
// console.log(construct[2].position);
// console.log(construct[2].age);




// Question No 4 :
// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following 
// properties:
// Name, gender, address, education, profession, 
// Enter all records one by one. 
// Hint: 
//  use select box for education and profession, 
//  use radio box for gender

// SOLUTION :

// let edu = document.querySelector('#edu');
// let gender = document.querySelector('#gender');
// let prof = document.querySelector('#prof');
// let name = document.querySelector('#name');
// let education = document.querySelector('#Education');
// let address = document.querySelector('#address');
// let profession = document.querySelector('#Profession');
// function getInfo(){
// let constObj={
//     name:name.value,
//     gender:gender.value,
//     education:edu.value,
//     address:address.value,
//     profession:prof.value,
// }
// console.log(constObj);
// }

















