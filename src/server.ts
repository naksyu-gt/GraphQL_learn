import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const typeDefs = gql`
    type Query {
        message: String
    }
`;

const resolvers = {
    Query: {
        message: () => "Hello World"
    }
}

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀 Server is running on ${url}`);
}

startApolloServer().catch((err) => {
    console.error("Error starting server:", err);
});