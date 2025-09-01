// ------------------------- Class ----------------------------

// JavaScript Class Syntax

class admitionform {
    constructor (name , fn) {
        this.name = name;
        this.fathername = fn
    }
    full(){
      return this.name + this.fathername
    }

}

const student1 = new admitionform("balesh ", "mr deepak kumar")
document.getElementById("demo").innerHTML = student1.full()