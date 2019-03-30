const Store = (() => {
  let data = [];

  return {
    add(item) {
      data.push(item);
    },
    get(id) {
      return data.find(item => item.id === id);
    }
  };
})();

Object.freeze(Store);

function run() {
  const i1 = Store.get();
  const i2 = Store.get();

  console.log(Object.is(i1, i2));
}

run();
