"use strict";
class File {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
class Directory {
    constructor(name) {
        this.files = [];
        this.name = name;
    }
    add(file) {
        this.files.push(file);
        return this;
    }
    remove(file) {
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
