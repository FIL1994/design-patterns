class Prototype {
  clone() {
    return { ...this };
  }
}

function run() {
  const p1 = new Prototype();
  p1.num = 2;
  p1.date = new Date();

  const p2 = p1.clone();

  p1.num = 12;

  console.log(p1, p2);
}

run();
