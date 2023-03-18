import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv";
import { startStandaloneServer } from "@apollo/server/standalone";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

import AlbumsService from "./adapters/AlbumsService";
import CommentsService from "./adapters/CommentsService";
import PhotosService from "./adapters/PhotosService";
import PostsService from "./adapters/PostsService";
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
          AlbumsService: new AlbumsService({ cache }),
          CommentsService: new CommentsService({ cache }),
          PhotosService: new PhotosService({ cache }),
          PostsService: new PostsService({ cache }),
          TodosService: new TodosService({ cache }),
          UsersService: new UsersService({ cache }),
        },
      };
    },
  });

  console.log(`Server ready at: ${url}`);
};

startServer();
