//Schema del graphql
//Query se podra mostar todos los contactos o solo un contacto por el id

export const typeDefs = `#graphql
    type Contacto {
        nombre: String!
        numeroTelefono: Int!
    }
    
    type Query{
        getContacto: [Contacto]!
        getContactoID(id_Contacto: ID!): Contacto!
    }

    type Mutation{
        addContacto(nombre: String!, numeroTelefono: Int!): Contacto!
        getContacto(id_Contacto: ID!): Contacto!
        deleteContacto(id_Contacto: ID!): Contacto!
        updateContacto(id_Contacto: ID!): Contacto!
    }

`;
