import fastify from "fastify";
import { usersRoutes } from "./routes/users";

export const app = fastify();

app.addHook("preHandler", async (request) => {
  console.log(`[${request.method}] ${request.url}`);
});

app.register(usersRoutes, {
  prefix: "/users",
});

app.listen({ port: 3333 }).then(() => console.log("HTTP Server Running!"));