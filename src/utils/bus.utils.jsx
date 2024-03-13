class EventBusGenerator {
  events = {};

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    } else {
      this.events[eventName] = [];
    }
  }

  emit(eventName, params = null) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(params);
      });
    }
  }

  once(eventName, callback) {
    const handler = (params) => {
      callback(params);
      this.off(eventName, callback);
    };

    if (this.events[eventName]) {
      this.events[eventName].push(handler);
    } else {
      this.events[eventName] = [handler];
    }
  }
}

const EventBusUtils = new EventBusGenerator();

export default EventBusUtils;
