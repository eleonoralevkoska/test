let family = {
    numberOfMembers: 4,
    ageOfMembers: [50, 50, 20, 15],

    sumOfAge: function () {
        let number = this.ageOfMembers;
        let sum = 0

        for (let i = 0; i < number.length; i++) {
            sum += number[i];
        }
        return sum;
    },

    averageAge: function () {
        let element = this.ageOfMembers;
        let sumAge = 0;

        for (let i = 0; i < element.length; i++) {
            sumAge += element[i];
        }
        return average = sumAge / element.length;
    },


}
console.log("The sum of ages is:" + family.sumOfAge())
console.log("The average age is:" + family.averageAge())




