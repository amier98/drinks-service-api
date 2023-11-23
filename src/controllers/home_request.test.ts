import request from "supertest";
import { app } from "../app";

describe("Test home API endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Welcome to the Drinks API!");
    // expect(res.text).toEqual("This should fail");
  });

  test("GET should return correct message for coffee endpoint", async () => {
    const res = await request(app).get("/coffeeLover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee");
  });
});
