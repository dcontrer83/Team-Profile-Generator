const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return the arguements of the constructor", () => {
        const intern = new Intern("Diana", "1", "fakeEmail@fakeemail.com", "UCR")

        expect(intern.name).toEqual("Diana");
        expect(intern.id).toEqual("1");
        expect(intern.email).toEqual("fakeEmail@fakeemail.com");
        expect(intern.school).toEqual("UCR");

    })

    it("should return school when calling getSchool function", () => {
        const intern = new Intern("Diana", "1", "fakeEmail@fakeemail.com", "UCR")

        const school = intern.getSchool()

        expect(school).toEqual("UCR")
    })

    it("should return 'Intern' when calling getRole function", () => {
        const intern = new Intern("Diana", "1", "fakeEmail@fakeemail.com", "UCR")

        expect(intern.getRole()).toEqual("Intern")
    })
})