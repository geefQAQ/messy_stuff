// 发布，订阅，订阅中心
// 发布者比喻为公司，通过订阅中心发布产品，如电影、音乐、小说
// 通过订阅中心发布
// 订阅者需要订阅类型与定义收到消息的回调

// 订阅中心
// pubsub.notify('TYPE_C')
class PubSub {
  constructor() {
    this.messages = {};
    // {
    //   movies: ['三体', '流浪地球'], // 电影
    //   music: ['回到过去'], // 音乐
    //   novels: ['三国演义'], // 小说
    // }
    this.listeners = {};
    // old
    // {
    //   movies: [fnA],
    //   music: [fnA, fnB],
    //   novels: [fnC],
    // }
    // new
    // {
    //   movies: [{
    //     name: '流浪地球',
    //     cbs: [fnA, fnB]
    //   }, {
    //     name: '星际穿越',
    //     cbs: [fnA]
    //   }],
    //   music: [],
    //   novels: [],
    // }
  }

  publish(type, content) {
    if(!this.messages[type]) {
      this.messages[type] = [];
    }
    if(!this.listeners[type]) {
      this.listeners[type] = [];
    }
    this.messages[type].push(content);

    this.listeners[type].push({
      name: content,
      cbs: []
    })
  }

  subscribe(content, type, cb) {
    if(!this.listeners[type]) {
      console.log('没有该资源分类，订阅失败！');
      return;
    }
    const contentIndex = this.listeners[type].findIndex(item => item.name === content);
    if(contentIndex < 0) {
      console.log('没有该资源，订阅失败！');
      return;
    }

    const subItem = this.listeners[type][contentIndex]
    subItem.cbs.push(cb);
  }

  notify(type) {
    const messages = this.messages[type];
    const subscribers = this.listeners[type];
    const contentIndex = subscribers.findIndex(item => item.name === content);
    const subItem = this.listeners[type][contentIndex]
    subItem.forEach((cb, index) => {
      cb(messages[index]);
    })
  }
}

// 发布者
// 创建实例：const publisherA = new Publisher('publisherA', pubsub)
// 实例方法：publisherA.publish(TYPE_A, '三体')
class Publisher {
  // 创建订阅者名字，订阅中心
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }

  // 实例方法
  publish(type, content) {
    this.context.publish(type, content);
  }
}

// 订阅者
// const subscriberA = new Subscriber('subscriberA', pubsub)
// subscriberA(TYPE_A, () => {
//   console.log('subscriberA received!')
// })
class Subscriber {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }

  subscribe(type, cb) {
    this.context.subscribe(type, cb);
  }
}

const TYPE_A = 'movies';
const TYPE_B = 'music';
const TYPE_C = 'novels';

// 创建订阅中心
const pubsub = new PubSub();

// 创建发布者，通过订阅中心发布
const publisherA = new Publisher('发布者A', pubsub);
const publisherB = new Publisher('发布者B', pubsub);

// 创建订阅者，通过订阅中心订阅
const subscriberA = new Subscriber('订阅者A', pubsub);
const subscriberB = new Subscriber('订阅者B', pubsub);
const subscriberC = new Subscriber('订阅者C', pubsub);

// 发布者发布内容
publisherA.publish('movies', '三体');
publisherA.publish('movies', '流浪地球');
publisherB.publish('novels', '三国演义');

// 订阅者发起订阅
subscriberA.subscribe('流浪地球', 'movies', res => {
  console.log(`订阅者A收到${res}发布的消息了！`)
})
subscriberB.subscribe('三国演义', 'novels', res => {
  console.log(`订阅者B收到${res}发布的消息了！`)
})

// 订阅中心通知订阅者
pubsub.notify('movies');
pubsub.notify('novels');