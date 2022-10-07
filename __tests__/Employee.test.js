// Suppose to do this first :(
const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name'", () => {
            const obj = new Employee();

            expect('name' in obj).toEqual(true);
        })

        it("should return an object containing an 'id'", () => {
            const obj = new Employee();

            expect('id' in obj).toEqual(true);
        })

        it("should return an object containing an 'email'", () => {
            const obj = new Employee();

            expect('email' in obj).toEqual(true);
        })
    })
})