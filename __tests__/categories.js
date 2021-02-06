const supertest = require("supertest");
const server = require("../server");

describe("Categories integration test", () => {
  it("tries to get a list of categories, but should get 401", async () => {
    const res = await supertest(server).get("/api/categories");
    expect(res.statusCode).toBe(401);
    expect(res.type).toBe("application/json");
  });
});
