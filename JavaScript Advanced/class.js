// ES6 classes
class Circle1 {
    constructor(rad) {
        this.rad = rad;
        this.move = function() { // if the fucntion needs to be part of the object 

        }
    }
    draw() { // if the function needs to be on prototype of the object 

    }
}

const c = new Circle1(2);

// Static methods - are not part of the object but is avialable to the class only 

class Circle {
    constructor(rad) {
            this.rad = rad;
            this.move = function() {}
        }
        // Instance Method
    draw() {}

    // Static Method
    static turn(str) {
        const rad = JSON.parse(str).rad;
        return new Circle(rad);
    }
}

const cir = Circle.turn('{"rad":2}');
console.log(cir);

// ** This Key word in ES6 classes by default returns undefiend for gloabal object**

class Circl {
    draw() {
        console.log('s', this);
    }
}

const ci = new Circl();
const draw = ci.draw;
draw();

// ** Private Member using symbols **
const _radius = Symbol();
const _draw = Symbol(); //symbol are always unique identifier 

class Ci {
    constructor(rad) {
            this[_radius] = rad; // [] reference to _radius
        }
        [_draw]() { // in ES6 [_draw] resolves to expression and method name is set 

        }
}

const c1 = new Ci(1);
const key = Object.getOwnPropertySymbols(c1)[0]; // return an array of symbol 
console.log(c1[key])

// ** Private Methods using WeakMaps**

const _name = new WeakMap(); // weak Map are dictionaries where key is an object and value can be anything
// _name is just for naming convention and indicates that this is a private identifier

const _mov = new WeakMap();

class Square {
    constructor(side) {
        _name.set(this, side); //this reference to square object and side is the value
        // _mov.set(this, function() { //here a function is set as a value
        _mov.set(this, () => { // arrow function makes 'this' ref the square object.
            console.log('move', this);
        });
    }

    draw() {
        const name = _name.get(this); //get is used to access the private identifier/method
        _mov.get(this)(); //move method is called 
        console.log('draw', name);
    }
}

const na = new Square(2);

// **Getter Setter**

const _game = new WeakMap();

class Prime {
    constructor(name) {
        _game.set(this, name);
    }

    get game() {
        return _game.get(this);
    }

    set game(val) {
        if (val < 0)
            throw new Error('invalid')
        _game.set(this, val);
    }
}

const bat = new Prime(2)

// Inheritence 
class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

class Sq extends Shape { //extends makes all the properties of shape available in proto
    constructor(color, radius) { //child can only have a constructor while using super();
        super(color); //super keyword to ref the parent constuctor 
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
}

const s = new Sq('red', 3);

// Method Over riding
class Test {
    move() {
        console.log('move at parent')
    }
}

class child extends Test {
    move() { // Overriding the Parent Move Method 
        console.log('move at child/ this Method is used ')
        super.move(); //super method will call the move() in parent class
    }
}

const st = new child()

const items = new WeakMap();
class Stack {
    constructor() {
        items.set(this, []);
    }

    push(obj) {
        items.set(this).push(obj);
    }

    pop() {
        const item = items.get(this);

        if (item.length === 0)
            throw new Error('Already Empty')
        return item.pop();
    }

    peek() {
        const item = items.get(this);

        if (item.length === 0)
            throw new Error('Empty')
        return item[item.length - 1];
    }
}
const stack = new Stack();