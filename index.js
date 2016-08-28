(function (window) {
  window.bus = {
    events: [],
    subscribe: function (name, callback) {
      if(this.events[name]) {
        this.events[name].push(callback);
      } else {
        this.events[name] = [callback];
      }
    },
    publish: function (name, params) {
      if(this.events[name]) {
        this.events[name].forEach(function(callback) {
          callback(params);
        })
      }
    },
    unsubscribe: function(name, callback) {
      if(this.events[name]) {
        this.events[name] = this.events[name].filter(function (item) {
          return item !== callback;
        });
      }
    }
  };
})(window);
