import {typeDefs as About} from './schema/about.js';
import {typeDefs as Blog} from "./schema/blog.js";
import {typeDefs as Facts} from "./schema/facts.js";
import {typeDefs as Experience} from "./schema/experience.js";
import apollo from "apollo-server-express";

const {gql} = apollo;
import gqltools from "graphql-tools";

const {makeExecutableSchema} = gqltools;

// TODO Add blog interaction mutation to increase count.
const Query = gql`
    type Query {
        about: About!
        work: [Experience!]
        projects: [Experience!]
        facts: [Fact!]
        blogs: [Post!]
        blog(id: Int!): Post
    }

    type TimeStamp {
        month: Int!
        day: Int!
        year: Int!
        hour: Int
        minute: Int
        second: Int
    }
`;

const schema = makeExecutableSchema({typeDefs: [Query, About, Blog, Facts, Experience], resolvers: {}})