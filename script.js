// #1


// function fiveAndGreaterOnly(arr, max){
//     let array = [];
//     arr.forEach(element => {
//         if(element > max){
//         return array.push(element)
//         }
//     });
//     console.log(array);
//  }
//  fiveAndGreaterOnly([3, 6, 8, 2], 5)



// #2



// function evensOnly(arr){
//     let array = [];
//     arr.forEach(element => {
//         if( element % 2 == 0 ){
//             return array.push(element)
//         }
//     });
//     console.log(array);
// }
// evensOnly([3, 6, 8, 2])



// #3



// function fiveCharactersOrFewerOnly(arr){
//     let newMassiv = [];
//     arr.forEach(element => {
//         if(element.length < 5){
//             return newMassiv.push(element)
//         }
        
//     });
//     console.log(newMassiv);
// }
// fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])



// #4



// let members= [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true },
// ]

//     const result = members.filter((element) =>  element.member == true);
//     console.log(result);



// #5


// function ofAge(arr){
//     return arr.filter((element) => element.age >= 18)
// }
// console.log(ofAge(
//     [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },
// ]));



// #6



// let ages = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },
// ];

// const result = ages.sort((a, b) => a.age - b.age);
// console.log(result)



// #7


// let players = [
//     {name: 'Wes',position: 'WR'}, 
//     {name: 'Coty', position: 'QB'}, 
//     {name: 'Joe', position: 'WR'}
// ]


// const result = players.filter((element) => element.position == "WR") 
// console.log(result);



// #8




// let students = [
//     { name: "Bob", group: "NT-79", voted: true },
//     { name: "Jake", group: "NT-77", voted: true },
//     { name: "Kate", group: "NT-70", voted: false },
//     { name: "Sam", group: "NT-77", voted: false },
//     { name: "Phil", group: "NT-70", voted: true },
//     { name: "Ed", group: "NT-79", voted: true },
//     { name: "Tami", group: "NT-77", voted: true },
//     { name: "Mary", group: "NT-70", voted: false },
//     { name: "Becky", group: "NT-79", voted: false },
//     { name: "Joey", group: "NT-70", voted: true },
//     { name: "Jeff", group: "NT-79", voted: true },
//     { name: "Zack", group: "NT-79", voted: false },
// ];


// function studentsByGroup(arr){
//     let nt70 = [];
//     let nt77 = [];
//     let nt79 = [];

//     arr.forEach(element => {
//         if(element.group === "NT-70" ){
//             nt70.push(element)
//         } else if(element.group === "NT-77" ){
//             nt77.push(element)
//         }else if(element.group === "NT-79" ){
//             nt79.push(element)
//         }
        
//     });
//     console.log("NT-70 Gurux" + nt70);
//     console.log("NT-77 Gurux" + nt77);
//     console.log("NT-79 Gurux" + nt79);
// }
// studentsByGroup(students)
