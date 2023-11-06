//1st task 
const car = {
  name: 'car',
  start(pls) {
    console.log('Start the ' + this.name);
  },
  speedUp(pls) {
    console.log('Speed up the ' + this.name);
  },
  stop(pls) {
    console.log('Stop the ' + this.name);
  },
};

car.start.call(car);
car.speedUp.call(car);
car.stop.call(car);


const aircraft = {
  name: 'aircraft',
  fly() {
    console.log('Fly');
  },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly.call(aircraft);


// 2nd task:

let arr = [1, 2, 3];
let numbers = [4, 5, 6];
//let a = [...arr , ...numbers]
arr.push.apply(arr,numbers)
console.log(arr);


// 3rd task:

const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

console.log(computer.turnOn.apply(server));



// 4th task:


let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let a = runner.run.bind(flyer);
a(20);

