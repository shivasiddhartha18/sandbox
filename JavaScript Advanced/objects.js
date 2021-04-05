const circle = {
    radius: 1, // objects has key value pairs called properties 
    location: {
        x: 1,
        y: 1
    },
    draw: function() { //function inside an object is called a Method
        console.log('draw');
    }
};

// circle.draw();

// *** Factory fucntion  ***
function createCircle(rad) {
    return { //returns one or more objects based on the number of times they being called, eliminates code redunduncy 
        radius: rad,
        draw: function() {
            console.log('draw Factory', rad);
        }
    };
}

const circ1 = createCircle(1)
const circ2 = createCircle(5)
circ1.draw();
circ2.draw();

// *** Constructors ***
function Circle(rad) {
    this.radius = rad; //2. this keyword points everything to the new empty object and returns it
    this.draw = function() {
        console.log('draw Constructor', rad);
    };
}
const circCon = new Circle(3); //1. new keyword creates a new empty object, 
circCon.draw();

// *** Constructor property *** //every object in JS has a contructor property that tells how was that object created 
console.log('factory -->', circ1.constructor);
console.log('constructor -->', circCon.constructor);

// *** Values and Reference types
let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y); //primitives are copied by values, here the value of x is copied into y

let x1 = { value: 10 };
let y1 = x1;

x.value = 20;

console.log(x1);
console.log(y1); //both X and Y have the reference of the object but not the value

// *** Adding removing Properties in object 

function Circ(rad) {
    this.radius = rad;
    this.draw = function() {
        console.log('draw');
    };
}

const newCirc = new Circ(3);

newCirc.location = { x: 1 }; //object name . followed by new property name can be used to add new properties
console.log(newCirc);
const newPro = 'propName'; //here as propName is the new property/key and y:2 is the value
newCirc[newPro] = { y: 2 };
console.log(newCirc);

delete newCirc.location; //to delete property from a object

// *** enumerating over properties of Objects
for (let key in newCirc) {
    console.log(key, newCirc[key]); // 
}

const keys = Object.keys(newCirc); //Object.keys to only get the keys of an object 
console.log(keys);

if ('radius' in newCirc) // to check if a property is part of a object 
    console.log('cicile has radius');

// Private Properties and methods - Abstraction - Hide the implementation 

function AbsCircle(rad) {
    this.radius = rad;
    let defaultLocation = { //this is a private property to AbsCircle and is not availabe outside it 
        x: 1,
        y: 2
    }
    let computerArea = function(rad) { //this is a private function to AbsCircle and is not availabe outside it 
        const area = rad * rad * Math.PI;
        console.log('area', area);

    }
    this.draw = function() {
        computerArea(2);
        console.log('draw');
        return 'hi'
    };

}

const abCircle = new AbsCircle(2);
console.log('sa', abCircle.draw());

function AbsGetSetCircle(rad) {
    this.radius = rad;
    let defaultLocation = {
            x: 1,
            y: 2
        }
        // this.getDefaultlocation = function() {
        //     return defaultLocation;
        // }
    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLoc', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            defaultLocation = value;
        }
    });
}

const getSetCircle = new AbsGetSetCircle(2);
getSetCircle.defaultLoc = { x: 2, y: 3 };
console.log(getSetCircle);