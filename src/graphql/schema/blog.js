import apollo from "apollo-server-express";
const {gql} = apollo;

export const typeDefs = gql`
    """
    Interactions a post has had.
    """
    type Interactions {
        hearts: Int!
        applauses: Int!
        celebrations: Int!
        hates: Int!
        anger: Int!
    }
    
    """
    A blog post.
    """
    type Post {
        """
        Post id tied to MongoDB id.
        """
        id: ID!
        title: String!
        """
        Body content stored as markdown.
        Will likely store as markdown + html to simply send an html response on get, and edit markdown on patch/post.
        """
        body: String!
        date_posted: TimeStamp!
        date_edited: TimeStamp
        tags: [String!]!
        interactions: Interactions!
        """
        Amount of views a post has received.
        """
        views: Int!
    }
`;