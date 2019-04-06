interface IFile {
  print: () => void;
}

class File implements IFile {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  print() {
    console.log(this.name);
  }
}

class Directory implements IFile {
  name: string;
  files: File[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(file: File): Directory {
    this.files.push(file);
    return this;
  }

  remove(file: File): Directory {
    const index = this.files.findIndex(f => f === file);
    this.files.splice(index, 1);
    return this;
  }

  print() {
    this.files.forEach(file => file.print());
  }
}

console.log("File:");
const file = new File("file 1");
file.print();

console.log("\nDirectory:");
const directory = new Directory("dir");
directory.add(file);
directory.add(new File("file 2"));
directory.print();
