"use strict"
//Here I will create some functionality

const stuff = require('./Somemodule.js')
const util = require('util');
const EventEmitter = require('events');

//ES6 class
class Person extends EventEmitter {
    //ES6 constructor
    constructor(name) {
        super()
        this.name = name;
    }
}

let danny = new Person("Danny")

danny.on('speak', function(mssg) {
    console.log(this.name + " said: " + mssg);

});

danny.emit('speak', 'I emittted');