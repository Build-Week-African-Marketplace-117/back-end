const supertest = require("supertest")
const server = require("../server")

describe("Various users integration tests", () => {
    it("gets a list of users", async () => {
        const res = await supertest(server).get("api/users")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })
    it("Testing to see if Jest works", () => {
        expect(1).toBe(1)
    })
})