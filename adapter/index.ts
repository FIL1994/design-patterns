class Target {
  public request(): string {
    return "target";
  }
}

class Adaptee {
  public specificRequest() {
    return "specific request";
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee
      .specificRequest()
      .split("")
      .reverse()
      .join("");

    return `Adapter: ${result}`;
  }
}

function printRequest(target: Target) {
  console.log(target.request());
}

function run() {
  const target = new Target();
  printRequest(target);

  const adaptee = new Adaptee();
  console.log(`Adaptee: ${adaptee.specificRequest()}`);

  const adapter = new Adapter(adaptee);
  printRequest(adapter);
}

run();
