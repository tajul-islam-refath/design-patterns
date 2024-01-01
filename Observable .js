class Observable {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  subscribe(func) {
    func(this.state);
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  next(data) {
    this.state = data;
    this.observers.forEach((observer) => observer(data));
  }
}

const observer = new Observable();

observer.subscribe((value) => {
  console.log("Observer one notify---", value);
});

observer.subscribe((value) => {
  console.log("Observer two notify---", value);
});

observer.subscribe((value) => {
  console.log("Observer three notify---", value);
});

observer.next(2);
