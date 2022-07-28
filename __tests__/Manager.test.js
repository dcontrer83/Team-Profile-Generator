const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return the arguments of the constructor", () => {
        const manager = new Manager("Diana", "1", "fakeEmail@fakeemail.com", "2")

        expect(manager.name).toEqual("Diana");
        expect(manager.id).toEqual("1");
        expect(manager.email).toEqual("fakeEmail@fakeemail.com");
        expect(manager.officeNumber).toEqual("2");

    })

    it("should return 'Manager' when calling getRole function", () => {
        const manager = new Manager("Diana", "1", "fakeEmail@fakeemail.com", "2")

        expect(manager.getRole()).toEqual("Manager")
    })
})