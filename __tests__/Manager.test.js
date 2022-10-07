// Suppose to do this first :(
const Manager = require('../lib/manager');

    describe("Manager", () => {
        describe("Initialization", () => {
            it("should return an object containing a 'name'", () => {
                const obj = new Manager();
    
                expect('name' in obj).toEqual(true);
            })
    
            it("should return an object containing an 'id'", () => {
                const obj = new Manager();
    
                expect('id' in obj).toEqual(true);
            })
    
            it("should return an object containing an 'email'", () => {
                const obj = new Manager();
    
                expect('email' in obj).toEqual(true);
            })

            it("should return an object containing a 'officeNumber'", () => {
                const obj = new Manager();
    
                expect('officeNumber' in obj).toEqual(true);
            })
        })
    })