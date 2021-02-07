const supertest = require("supertest");
const server = require("../server");

describe("Various users integration tests", () => {
  it("tries to get a list of users, but should get 401 unauthorized", async () => {
    const res = await supertest(server).get("/api/users");
    expect(res.statusCode).toBe(401);
    expect(res.type).toBe("application/json");
  });
  it("reads a specific users items", async () => {
    const res = await supertest(server).get("/api/users/4/items");
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
  });
  it("returns a 404 if user is not found", async () => {
    const res = await supertest(server).get("/api/users/900");
    expect(res.statusCode).toBe(404);
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("User not found");
  });
});
