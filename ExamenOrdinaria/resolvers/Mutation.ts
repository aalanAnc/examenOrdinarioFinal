import { ContactoModel, ContactoModelType } from "../db/contactoSchema.ts";
import { GraphQLError } from "npm:graphql@16.8.1";

export const Mutation = {
  //anadimos un contacto
  addContacto: async (
    _: unknown,
    args: { nombre: string; numeroTelefono: number }
  ): Promise<ContactoModelType> => {
    const contacto = {
      nombre: args.nombre,
      numeroTelefono: args.numeroTelefono,
    };
    const newContacto = await ContactoModel.create(contacto);
    return newContacto;
  },
  // eliminamos un contacto
  deleteContacto: async (_: unknown, args: { id: string }) => {
    try {
      const Cliente = await ContactoModel.findByIdAndDelete(args.id);
      if (!Cliente) {
        throw new GraphQLError(`No se encontro el Cliente con id${args.id}`);
      }
    } catch (error) {
      throw new GraphQLError(`Error al borrar`);
    }
  },
  //actualizamos un cotacto
  updateContacto: async (
    _: unknown,
    args: { id_Contacto: string; nombre: string; numeroTelefono: number }
  ): Promise<ContactoModelType> => {
    const contacto = await ContactoModel.findByIdAndUpdate(
      args.id_Contacto,
      { nombre: args.nombre, numeroTelefono: args.numeroTelefono },
      { new: true, runValidators: true }
    );
    if (!contacto) {
      throw new GraphQLError(
        `Error al eliminar el contacto con id ${args.id_Contacto}`
      );
    }
    return contacto;
  },
};
