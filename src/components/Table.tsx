type RowProps = {
  header: string;
  content: string;
  price: string;
  className?: string;
};

const Row = ({ header, content, price, className }: RowProps) => (
  <tr className={`align-top text-left ${className}`}>
    <td className="text-xl">{header}</td>
    <td className="px-6 text-[2vh]">{content}</td>
    <td className="px-6 font-semibold text-xl w-[22%]">{price}</td>
  </tr>
);

const Table = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          {/* Header */}
          <thead
            className={`
              font-sans text-left font-extrabold text-primary text-2xl
              border-b-3 border-primary
            `}
          >
            <tr>
              <th className="text-left py-4 tracking-wide">PAQUETE</th>
              <th className="px-6 py-4 tracking-wide">INCLUYE</th>
              <th className="px-6 py-4 tracking-wide">PRECIO</th>
            </tr>
          </thead>

          {/* Rows */}
          <tbody className="text-text-dark">
            {/* Spacing */}
            <div className="h-5" />

            {/* Actual Rows */}
            <Row
              header="Básico"
              content="Visibilidad estándar en propiedades, contacto por mensaje con opciones limitadas"
              price="GRATIS"
              className="mt-[10vh]"
            />

            <Row
              header="Destacado"
              content="Hasta 5 propiedades, prioridad en resultados, acceso a chat privado de asesores RealMate"
              price="Q79.92/mes"
            />

            <Row
              header="Profesional"
              content="Publicaciones ilimitadas, servicio personalizado, acceso completo a la plataforma de asesor Realmate en la aplicación móvil y página web."
              price="Q199.92/mes"
            />

            <Row
              header="RealMate Pro"
              content="Panel de gestión de clientes, herramientas avanzadas, perfil verificado, acceso completo a la plataforma y beneficios de asesor Realmate en la aplicación móvil y página web."
              price="Q279.92/mes"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
