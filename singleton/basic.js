const Singleton = (() => {
  let instance;

  function createInstance() {
    let object = new Object("instance");
    return object;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function run() {
  const instance = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log(Object.is(instance, instance2));
}

run();
