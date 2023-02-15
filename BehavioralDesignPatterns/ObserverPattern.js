// The Observer pattern is a design pattern commonly used in software engineering.
//  It allows for an object (the subject) to notify other objects (the observers) automatically of any changes to its state.
//  In JavaScript, the Observer pattern can be implemented using the built-in events system or by creating custom event emitters.

// this subject whom observer subscibes or unsubscribes to get notified if any event happens
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }
  unSubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs != observer);
  }

  notify(data) {
    this.observers.forEach((obs) => obs.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`data packet recieved : ${data}`);
  }
}

const elonMusk = new Subject();

const fan1 = new Observer();

elonMusk.subscribe(fan1);

elonMusk.notify(`Thanks for Subscribing `);
