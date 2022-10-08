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

        describe("getName", () => {
            it("should return return the name of the 'Manager' object", () => {
                const name = 'Joseph';
    
                const obj = new Manager(name);
    
                expect(obj.getName()).toEqual(name);
            })
        })
    
        describe("getId", () => {
            it("should return return the id of the 'Manager' object", () => {
                const id = '19';
    
                const obj = new Manager('Joseph', id, 'Email');
    
                expect(obj.getId()).toEqual(id);
            })
        })
    
        describe("getEmail", () => {
            it("should return return the email of the 'Manager' object", () => {
                const email = 'joseph_anderson11@yahoo.com';
    
                const obj = new Manager('Joseph', '19', email);
    
                expect(obj.getEmail()).toEqual(email);
            })
        })

        describe("getOfficeNumber", () => {
            it("should return the officeNumber of the 'Manager' object", () => {
                const officeNumber = '1234567890';

                const obj = new Manager('Joseph', '19', 'email', officeNumber);

                expect(obj.getOfficeNumber()).toEqual(officeNumber);
            })
        })
    
        describe("getRole", () => {
            it("should return the role of the 'Manager' object", () => {
                const obj = new Manager('J', 1, "ga");
    
                expect(obj.getRole()).toEqual('Manager');
            })
        })
    })