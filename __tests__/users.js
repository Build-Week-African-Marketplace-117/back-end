const supertest = require("supertest")
const index = require("../index")


describe("Various users integration tests", () => {
    it("gets a list of users", async () => {
        const res = await supertest(index).get("api/users")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })
})