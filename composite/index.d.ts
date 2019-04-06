interface IFile {
    print: () => void;
}
declare class File implements IFile {
    name: string;
    constructor(name: string);
    print(): void;
}
declare class Directory implements IFile {
    name: string;
    files: File[];
    constructor(name: string);
    add(file: File): Directory;
    remove(file: File): Directory;
    print(): void;
}
declare const file: File;
declare const directory: Directory;
