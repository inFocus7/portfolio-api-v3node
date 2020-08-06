import apollo from "apollo-server-express";
const {gql} = apollo;

export const typeDefs = gql`
    """
    Media point of contact.
    """
    type Contact {
        """
        The type of the social media/point-of-contact.
        Current Options (if you want an icon in front-end): [ email | twitter | linkedin | github ]
        """
        type: String!
        """
        Contact link extra information.
        """
        info: String
        """
        Link to point of contact.
        If using email: using either 'mailto:' or plain email works fine. The resolver handles adding 'mailto:'.
        """
        link: String!
    }
    
    """
    Main information about the author.
    """
    type About {
        name: String!
        """
        Sub-information. Important to showcase something if wanted.
        """
        sub: String
        """
        A list of contact information.
        """
        contact: [Contact!]
        """
        Tech/work stack the author is currently using.
        """
        stack: [String!]
        """
        Professional title(s) to display.
        """
        titles: [String!]
        """
        Bullet point content list (as Markdown) describing the author.
        Bound to change in a future update, but kept as markdown to simplify simple styling.
        Future update could replace with type Content {html: ... markdown: ...}
        """
        content: [String!]
    }
`
