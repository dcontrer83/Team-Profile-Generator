const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return the arguments of the constructor", () => {
        const engineer = new Engineer("Diana", "1", "fakeEmail@fakeemail.com", "dcontrer83")

        expect(engineer.name).toEqual("Diana");
        expect(engineer.id).toEqual("1");
        expect(engineer.email).toEqual("fakeEmail@fakeemail.com");
        expect(engineer.github).toEqual("dcontrer83");

    });

    it("should return github username when calling getGithub function", () => {
        const engineer = new Engineer("Diana", "1", "fakeEmail@fakeemail.com", "dcontrer83")

        const gitHubUser = engineer.github

        expect(gitHubUser).toEqual("dcontrer83")
    });

    it("should return 'Engineer' when calling getRole function", () => {
        const engineer = new Engineer("Diana", "1", "fakeEmail@fakeemail.com", "dcontrer83")

        expect(engineer.getRole()).toEqual("Engineer")
    })
})
