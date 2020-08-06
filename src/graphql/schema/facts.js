import apollo from "apollo-server-express";
const {gql} = apollo;

export const typeDefs = gql`
    """
    A single fact about the author.
    """
    type Fact {
        """
        Fact text stored as markdown to allow text stylization when needed.
        """
        text: String!
        """
        Optional accent color stored as hex to add color to bolded text!
        """
        accent_color: String
    }
`;