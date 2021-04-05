// function Circle(rad) {
//     this.radius = rad, // instance member
//         this.move = function() {
//             console.log("move");
//         }
// }

// Circle.prototype.draw = function() { // anything part of a prototype can be called to create multiple objects with one declartion 
//     this.move();
//     console.log("circle", this.radius); // prototype member
// }
// const c1 = new Circle(2);
// const c2 = new Circle(3);
function bitwiseAND(n1, n2) {
    return (n1.toString(2) && n2.toString(2));
}
bitwiseAND(7, 12);