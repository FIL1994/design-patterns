class Product {
  constructor() {
    this.parts = [];
  }

  listParts() {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

class ConcreteBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.product = new Product();
  }

  productPartA() {
    this.product.parts.push("PartA");
  }

  productPartB() {
    this.product.parts.push("PartB");
  }

  getProduct() {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  setBuilder(builder) {
    this.builder = builder;
  }

  make() {
    this.builder.productPartA();
    this.builder.productPartB();
  }
}

function run() {
  const director = new Director();
  const builder = new ConcreteBuilder();

  director.setBuilder(builder);
  director.make();
  builder.getProduct().listParts();
}

run();
