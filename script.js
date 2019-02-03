let person = {
  firstName: "Eleonora",
  lastName: "Levkoska",
  dateOfBirth: [03, 03, 1990],
  placeOfBirth: "Gostivar",
  details: function () {
    return `Full name and place of birth : ${this.firstName}  ${this.lastName}  ${this.placeOfBirth}`;


  },


  calculateAge: function () {
    let now = new Date();

    let yearNow = now.getFullYear();
    let monthNow = now.getMonth() + 1;
    let dateNow = now.getDate();


    let birthYear = this.dateOfBirth[2];
    let birthMonth = this.dateOfBirth[1];
    let birthDay = this.dateOfBirth[0];



    age = yearNow - birthYear;

    if (monthNow < (birthMonth - 1)) {
      age--;
    }
    if (((birthMonth - 1) == monthNow) && (dateNow < birthDay)) {
      age--;
    }
    return age;

  }
    
}
console.log(person.details());
console.log(person.calculateAge());

