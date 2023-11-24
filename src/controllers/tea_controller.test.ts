//import { Request } from "supertest";
import request from "supertest";
import { app } from "../app";

test("GET /tea endpoint should return correct object", async () => {
  const res = await request(app).get("/tea").query("Green Tea");

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Green Tea",
  });
});
