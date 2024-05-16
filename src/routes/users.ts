import crypto from "node:crypto";
import { FastifyInstance } from "fastify";

import { knex } from "../database";

export async function usersRoutes(app: FastifyInstance) {
  app.get("/", (request, reply) => {
    reply.send({ hello: "Hello User" });
  });
}
