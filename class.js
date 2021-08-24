// Advanced  Class , constructor , methos, create from class


// declare common class 

// parent class/ Base class/ Super class 
class TeamMember {
    name;
    designation = ' Support Web Dev';
    adress = "Gopalgonj";
    constructor(name, adress) {
        this.name = name;
        this.adress = adress;
    }
}

// Derived class

class Support extends TeamMember {
    time;
    constructor(name, adress, time) {
        super(name, adress)
        this.time = time;
    }
    startSession() { // function
        console.log(this.name, 'Start a suppor sesion');

    }
}

const bani = new Support('Bani Biswas', 'Dhaka', 'September');
bani.startSession();
console.log(bani);


// derived class

class StudentCare extends TeamMember {

    buildARoutine(student) {
        console.log(this.name, 'Build a routine ', student)
    }

}

const bipro = new StudentCare('bipro', 'kotali para');

bipro.buildARoutine('bipro')
console.log(bipro);



// derived class
class NeptuneDev extends TeamMember {

    editor;
    constructor(name, adress, editor) {
        super(name, adress);
        this.editor = editor;
    }

    releaseApp(version) {
        console.log(this.name, 'Release app version', version);
    }

}
const Bani = new NeptuneDev('Bani Biswas', 'Dhaka-gulshan', 'React');
Bani.releaseApp(4.5);
console.log(Bani);