// Suppose to do this first :(
const Intern = require('../lib/intern');

    describe("Intern", () => {
        describe("Initialization", () => {
            it("should return an object containing a 'name'", () => {
                const obj = new Intern();
    
                expect('name' in obj).toEqual(true);
            })
    
            it("should return an object containing an 'id'", () => {
                const obj = new Intern();
    
                expect('id' in obj).toEqual(true);
            })
    
            it("should return an object containing an 'email'", () => {
                const obj = new Intern();
    
                expect('email' in obj).toEqual(true);
            })

            it("should return an object containing a 'school'", () => {
                const obj = new Intern();

                expect('school' in obj).toEqual(true);
            })
        })
    })