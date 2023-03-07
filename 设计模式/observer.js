// 被观察者
class Subject {

  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  removeObserver(observer) {
    const index = this.observerList.findIndex(o => o.name === observer.name);
    this.observerList.splice(index, 1);
  }

  notifyObservers(message) {
    const observers = this.observerList;
    observers.forEach(observer => observer.notified(message));
  }
}

// 观察者
class Observer {

  constructor(name, subject) {
    this.name = name;
    if (subject) {
      subject.addObserver(this);
    }
  }

  notified(message) {
    console.log(this.name, 'got message', message);
  }
}

const subject = new Subject();
const observerA = new Observer('observerA', subject); // 生成实例并订阅
const observerB = new Observer('observerB');
subject.addObserver(observerB);  // 订阅
subject.notifyObservers('Hello from subject'); // 被观察者发布
subject.removeObserver(observerA); // 移除订阅
subject.notifyObservers('Hello again');