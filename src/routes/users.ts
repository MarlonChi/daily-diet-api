import { FastifyInstance } from "fastify";
import crypto from "node:crypto";
import { z } from "zod";

import { knex } from "../database";

export async function usersRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    const users = await knex("users").select();

    return {
      users,
    };
  });

  app.post("/", async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const { name, email } = createUserBodySchema.parse(request.body);

    let sessionId = request.cookies.sessionId;

    if (!sessionId) {
      sessionId = crypto.randomUUID();

      reply.setCookie("sessionId", sessionId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });
    }

    const userByEmail = await knex("users").where({ email }).first();

    if (userByEmail) {
      return reply.status(400).send({ message: "User already exists" });
    }

    await knex("users").insert({
      id: crypto.randomUUID(),
      name,
      email,
      session_id: sessionId,
    });

    return reply.status(201).send();
  });
}
