// first class is employee parent class with following properties and methods: name, id, email, getName(), getId(), getEmail(), getRole()

// other three classes will extend employee

// manager will also have: officeNumber, getRole()

// engineer will also have: github, getGithub(), getRole()

// intern will also have: school, getSchool(), getRole()

// var dog={
//     name:"wolfy",
//     haircolor:"brown",
//     showHairColor: function(){
//         return this.haircolor
//     }
// }
// var cat={
//     name:"meow",
//     haircolor:"black",
//     showHairColor: function(){
//         return this.haircolor
//     }
// }

//es 5 use function constructor
// function Animal(name,haircolor){
//     this.name=name
//     this.haircolor=haircolor
//     this.showHairColor =function(){
//         return this.haircolor
//     }   
// }
// class Food{
//     constructor(food,drink){
//         this.food=food
//         this.drink=drink
//     }
//     getFood(){
//         return this.food
//     }
// }

// //es 6 constructor
// class Animal extends Food{
//     constructor(name,haircolor,food,drink){
//         super(food,drink)
//         this.name=name
//         this.haircolor=haircolor
         
//     }
     
//     getHairColor(){
//         return this.haircolor
//     }
// }
// var dog = new Animal("wolfy","brown")
// var cat = new Animal("Meow","black")