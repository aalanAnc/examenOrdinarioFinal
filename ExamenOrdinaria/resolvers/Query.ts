import { ContactoModel, ContactoModelType } from "../db/contactoSchema.ts";
import { GraphQLError } from "npm:graphql@16.8.1";
import { horaPais } from "../lib/horaPais.ts";
export const Query = {
  //Obtenemos Todos los Contactos
  getContacto: async (): Promise<ContactoModelType[]> => {
    const contactos = await ContactoModel.find().exec();
    if (!contactos) {
      throw new GraphQLError(`Clientes No encontrados`);
    } /*
    try {
      const ciudadData = {
        //name: horaPais.cityName,
      };
    } catch (error) {
      throw new GraphQLError(`Ciudad no enocntrada`);
    }*/
    return contactos;
  },
  //Obtenemos un contacto especifico por su id
  getContactoID: async (
    _: unknown,
    args: { id: string } //puede que haya Problema, al lanzar ver si es mayuscula o asi
  ): Promise<ContactoModelType> => {
    const ContactoID = await ContactoModel.findById(args.id);
    if (!ContactoID) {
      throw new GraphQLError(`Contacto no encontrado con el id ${args.id}`);
    }
    return ContactoID;
  },
};
