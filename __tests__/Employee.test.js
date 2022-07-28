const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return the arguments of the constructor", () => {
        const employee = new Employee("Diana", "1", "fakeEmail@fakeEmail.com")

        expect(employee.name).toEqual("Diana");
        expect(employee.id).toEqual("1");
        expect(employee.email).toEqual("fakeEmail@fakeEmail.com");

    });

    it("should return name when calling getName function", () => {
        const employee = new Employee("Diana", "1", "fakeEmail@fakeEmail.com")

        const name = employee.getName();

        expect(name).toEqual("Diana")
    });

    it("should return ID when calling getIt function", () => {
        const employee = new Employee("Diana", "1", "fakeEmail@fakeEmail.com")

        const id = employee.getId();

        expect(id).toEqual("1")
    })

    it("should return email when calling getEmail function", () => {
        const employee = new Employee("Diana", "1", "fakeEmail@fakeEmail.com")

        const email = employee.getEmail();

        expect(email).toEqual("fakeEmail@fakeEmail.com")

    })

    it("should return 'Employee' when calling getRole function", () => {
        const employee = new Employee("Diana", "1", "fakeEmail@fakeEmail.com")

        expect(employee.getRole()).toEqual("Employee")
    })
});