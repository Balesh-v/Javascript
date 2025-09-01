// -----------------------------Object Accessors --------------------
// JavaScript Getter (The get Keyword)
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
};
console.log(person.lang)

// JavaScript Setter (The set Keyword)

const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
};
person2.lang = "en";
console.log(person2.language)

// JavaScript Function or Getter?

const person3 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person3.fullName())

const person4 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person4.fullName)

// Data Quality

const person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language.toUpperCase();
    }
};
console.log(person5.lang)
  