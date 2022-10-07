// Suppose to do this first :(
const Engineer = require('../lib/engineer');

    describe("Engineer", () => {
        describe("Initialization", () => {
            it("should return an object containing a 'name'", () => {
                const obj = new Engineer();
    
                expect('name' in obj).toEqual(true);
            })
    
            it("should return an object containing an 'id'", () => {
                const obj = new Engineer();
    
                expect('id' in obj).toEqual(true);
            })
    
            it("should return an object containing an 'email'", () => {
                const obj = new Engineer();
    
                expect('email' in obj).toEqual(true);
            })

            it("should return an object containing a 'userName'", () => {
                const obj = new Engineer();

                expect('userName' in obj).toEqual(true);
            })
        })
    })