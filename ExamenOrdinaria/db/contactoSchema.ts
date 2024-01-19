import mongoose from "npm:mongoose@8.1.0";

const Schema = mongoose.Schema;

export type ContactoModelType = mongoose.Document;

const ContactoSchema = new Schema({
  nombre: { type: String, required: true },
  numeroTelefono: { type: Number, required: true },
  ciudad: { type: String, required: true },
});

export const ContactoModel = mongoose.model<ContactoModelType>(
  "Contacto",
  ContactoSchema
);
