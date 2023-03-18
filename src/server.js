import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv";
import { startStandaloneServer } from "@apollo/server/standalone";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import TodosService from "./adapters/TodosService";
import UsersService from "./adapters/UsersService";

dotenv.config();

const PORT = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          TodosService: new TodosService({ cache }),
          UsersService: new UsersService({ cache }),
        },
      };
    },
  });

  console.log(`Server ready at: ${url}`);
};

startServer();
