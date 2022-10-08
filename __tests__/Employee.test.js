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

        it("should set 'name' when created", () => {
            const name = 'Joseph';

            const obj = new Employee(name)

            expect(obj.name).toEqual(name);
        })

        it("should set 'id' when created", () => {
            const id = '19';

            const obj = new Employee('Joseph', id, 'Email')

            expect(obj.id).toEqual(id);
        })

        it("should set 'email' when created", () => {
            const email = 'joseph_anderson11@yahoo.com';

            const obj = new Employee('Joseph', '19', email)

            expect(obj.email).toEqual(email);
        })
    })

    describe("getName", () => {
        it("should return return the name of the 'Employee' object", () => {
            const name = 'Joseph';

            const obj = new Employee(name);

            expect(obj.getName()).toEqual(name);
        })
    })

    describe("getId", () => {
        it("should return return the id of the 'Employee' object", () => {
            const id = '19';

            const obj = new Employee('Joseph', id, 'Email');

            expect(obj.getId()).toEqual(id);
        })
    })

    describe("getEmail", () => {
        it("should return return the email of the 'Employee' object", () => {
            const email = 'joseph_anderson11@yahoo.com';

            const obj = new Employee('Joseph', '19', email);

            expect(obj.getEmail()).toEqual(email);
        })
    })

    describe("getRole", () => {
        it("should return the role of the 'Employee' object", () => {
            const obj = new Employee('J', 1, "ga");

            expect(obj.getRole()).toEqual('Employee');
        })
    })
})