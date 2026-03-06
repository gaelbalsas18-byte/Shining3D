export const generarLinkWhatsApp = (
  telefono: string,
  nombre: string,
  mensajeExtra: string
) => {
  const telefonoLimpio = telefono.replace(/\s/g, "");

  return `https://wa.me/52${telefonoLimpio}?text=${encodeURIComponent(
    `Hola ${nombre}, me interesa recibir información sobre ${mensajeExtra} en Shining 3D`
  )}`;
};