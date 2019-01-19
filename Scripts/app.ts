module objects {

    export interface Greeter{
        saysHello(): void;
}
    export  class Person implements objects.Greeter {
        private _age: number;
        private _name: string;

        get age(): number {
            return this._age;
        }
        set age(newAge: number) {
            this._age = newAge;
        }
        get name(): string {
            return this._name;
        }
        set name(newName: string) {
            this._name = newName;
        }
        constructor(age: number, name: string) {
            this._age = age;
            this._name = name;

        }
        public saysHello(): void {
            console.log(`${this.name} says hello`)
        }

    }

    export class Student extends objects.Person{
        private _studentID: number;
        get studentID(): number{
            return this._studentID;
        }
        set studentID(studentID: number) {
            this._studentID = studentID;
        }
        constructor(age:number,name:string,studentID:number) {
            super(age, name);
            this.studentID = studentID;
          
        }
        public studies(): void{
            console.log(`${this.name} has ${this.studentID} is sudying`);
      }
  }
}

//IIFE- Immediately Invoked Function Expression

(function(){
    function Start(){
        const person = new objects.Person(20, "Ishrat");
person.saysHello();



let student: objects.Student;
student = new objects.Student(20, "Ish", 300986);
student.studies();
student.saysHello();    
    }
    window.addEventListener("load",Start);
})();