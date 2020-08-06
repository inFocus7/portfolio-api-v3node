import apollo from "apollo-server-express";
const {gql} = apollo;

export const typeDefs = gql`
    type Date {
        start: TimeStamp!
        end: TimeStamp
    }
    
    """
    Singular experience the author has.
    Used for projects and companies.
    """
    type Experience {
        name: String!
        """
        Link to online-stored icon of project/company.
        """
        icon: String
        position: String!
        description: String
        content: [String]
        date: Date!
    }
`;