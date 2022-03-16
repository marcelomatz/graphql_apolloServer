import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      application: String
      service: String
    }
  `,
  resolvers: {
    Query: {
      application: () => {
        return 'Apollo Server + GraphQL';
      },
      service: () => {
        return 'Desenvolvimento Backend com Apollo Server e GraphQL';
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
