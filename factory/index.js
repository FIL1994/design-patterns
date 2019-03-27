const Types = {
  FULL_TIME: "fulltime",
  PART_TIME: "partime"
};

class Factory {
  createEmployee(type) {
    let employee;
    switch (type) {
      case Types.FULL_TIME:
        employee = new FullTime();
      case Types.PART_TIME:
        employee = new PartTime();
    }

    employee.type = type;

    return employee;
  }
}

class FullTime {
  constructor() {
    this.hourly = 20;
  }
}

class PartTime {
  constructor() {
    this.hourly = 15;
  }
}

function run() {
  let employees = [];
  const factory = new Factory();

  employees.push(factory.createEmployee(Types.FULL_TIME));
  employees.push(factory.createEmployee(Types.PART_TIME));

  console.log(employees);
}

run();
