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

        describe("getName", () => {
            it("should return return the name of the 'Engineer' object", () => {
                const name = 'Joseph';
    
                const obj = new Engineer(name);
    
                expect(obj.getName()).toEqual(name);
            })
        })
    
        describe("getId", () => {
            it("should return return the id of the 'Engineer' object", () => {
                const id = '19';
    
                const obj = new Engineer('Joseph', id, 'Email');
    
                expect(obj.getId()).toEqual(id);
            })
        })
    
        describe("getEmail", () => {
            it("should return return the email of the 'Engineer' object", () => {
                const email = 'joseph_anderson11@yahoo.com';
    
                const obj = new Engineer('Joseph', '19', email);
    
                expect(obj.getEmail()).toEqual(email);
            })
        })

        describe("getGithub", () => {
            it("should return the github username of the 'Engineer' object", () => {
                const userName = 'josephfanderson';

                const obj = new Engineer('Joseph', '19', 'email', userName);

                expect(obj.getGithub()).toEqual(userName);
            })
        })
    
        describe("getRole", () => {
            it("should return the role of the 'Engineer' object", () => {
                const obj = new Engineer('J', 1, "ga");
    
                expect(obj.getRole()).toEqual('Engineer');
            })
        })
    })