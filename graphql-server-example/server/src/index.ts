import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function start() {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.log("Unable to start server", error);
  }
}

start();
