// function Declaration, Hoisting is the process of moving function declartaion to the top by JS engine automatically
// function declared can be called before they are defined 
walk();

function walk() {
    console.log('walk');
}

// Anonymous function expression, Expression function cannot be called before defination 
let run = function() {
    console.log("run");
};

// name Function Expression
let move = function move() {
    console.log('move');
};

move();
run();

// ** sum Arguments **
function sum() {
    let total = 0;
    for (let val of arguments)
        total += val;
    return total;
}

console.log(sum(1, 2, 4, 5, 7, 8, 9, 20, 10));

// ** Rest Operator **

function sum(dis, ...prices) { //...rest operator is the last argument for any function, 
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - dis);
}
console.log(sum(0.25, 12, 2, 25, 12));

// ** DEfault Parameters **
function interest(principal, rate = 5, years = 7) { //default parametters always needs to be at the end or all pparameters after a def value should also have a def values
    return principal * rate / 100 * years;
}
console.log(interest(15000)); // interest(15000, 4, 8) ----here is rate and years = 8 but when not spcified rate and years are taken from def

// ** Getter and Setter **
const person = {
    firstName: 'Shiva',
    lastName: 'Kadavarthi',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1]
    }
};

person.fullName = 'shiva S';

// console.log(person.fullName);
console.log(person);

// *** TRY CATCH blocks
const personN = {
    firstName: 'anu',
    lastName: 'Kadavarthi',
    get fullName() {
        return `${personN.firstName} ${personN.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string'); // when the value is !string, it throws and error and the execution shifts to catch block to display the error

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter First and last Name')
        this.firstName = parts[0];
        this.lastName = parts[1]
    }
};
try {
    personN.fullName = '';
} catch (e) {
    console.log(e);
}
// *** this keyword ***
const movie = {
    title: 'abc',
    date: '1/1/1',
    paly() {
        console.log(this); // this inside an object refers to the whole object 
    }
}
movie.paly();

function title() {
    console.log(this); // this inside a funtion refeers to the global windows object.
}

title();

const tem = {
    title: 'a',
    map: 'asds',
    list: ['a', 'b', 'c'],
    print() {
        this.list.forEach(function(val) {
            console.log(val, this.title);
        }, this); // 'this' here is passed as a second argument to forEach(), otherwise this refers to global object 
    }
}

tem.print();

// ** 3 ways to use 'this' in function ***
// 1. use Self
const type1 = {
    title: 'a',
    map: 'asds',
    list: ['a', 'b', 'c'],
    print() {
        const self = this; // declarig a  const self that refers to this 
        self.list.forEach(function(val) {
            console.log('type1', val, self.title);
        });
    }
}
type1.print()

//2. use bind method
const type2 = {
    title: 'a',
    map: 'asds',
    list: ['a', 'b', 'c'],
    print() {
        this.list.forEach(function(val) {
            console.log('type 2', val, this.title);
        }.bind(this)); //bind is not part of the function so we can point to this using it 
    }
}
type2.print();

// 3. use fat Arrow 
const type3 = {
    title: 'a',
    map: 'asds',
    list: ['a', 'b', 'c'],
    print() {
        this.list.forEach(val => {
            console.log('type 3', val, this.title);
        }); // ES6 onwards this is a part of arrow function.
    }
}
type3.print();