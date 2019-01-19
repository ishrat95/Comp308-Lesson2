var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this._age = age;
            this._name = name;
        }
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.saysHello = function () {
            console.log(this.name + " says hello");
        };
        return Person;
    }());
    objects.Person = Person;
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(age, name, studentID) {
            var _this = _super.call(this, age, name) || this;
            _this.studentID = studentID;
            return _this;
        }
        Object.defineProperty(Student.prototype, "studentID", {
            get: function () {
                return this._studentID;
            },
            set: function (studentID) {
                this._studentID = studentID;
            },
            enumerable: true,
            configurable: true
        });
        Student.prototype.studies = function () {
            console.log(this.name + " has " + this.studentID + " is sudying");
        };
        return Student;
    }(objects.Person));
    objects.Student = Student;
})(objects || (objects = {}));
//IIFE- Immediately Invoked Function Expression
(function () {
    function Start() {
        var person = new objects.Person(20, "Ishrat");
        person.saysHello();
        var student;
        student = new objects.Student(20, "Ish", 300986);
        student.studies();
        student.saysHello();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map