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

        describe("getName", () => {
            it("should return return the name of the 'Intern' object", () => {
                const name = 'Joseph';
    
                const obj = new Intern(name);
    
                expect(obj.getName()).toEqual(name);
            })
        })
    
        describe("getId", () => {
            it("should return return the id of the 'Intern' object", () => {
                const id = '19';
    
                const obj = new Intern('Joseph', id, 'Email');
    
                expect(obj.getId()).toEqual(id);
            })
        })
    
        describe("getEmail", () => {
            it("should return return the email of the 'Intern' object", () => {
                const email = 'joseph_anderson11@yahoo.com';
    
                const obj = new Intern('Joseph', '19', email);
    
                expect(obj.getEmail()).toEqual(email);
            })
        })

        describe("getSchool", () => {
            it("should return the school of the 'Intern' object", () => {
                const school = 'Georgia Tech';

                const obj = new Intern('Joseph', '19', 'email', school);

                expect(obj.getSchool()).toEqual(school);
            })
        })
    
        describe("getRole", () => {
            it("should return the role of the 'Intern' object", () => {
                const obj = new Intern('J', 1, "ga");
    
                expect(obj.getRole()).toEqual('Intern');
            })
        })
    })