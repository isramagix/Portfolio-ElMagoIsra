import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormField } from "./FormField";

// VALIDACIÓN
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .required("El nombre es obligatorio"),

  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),

  phone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      "Teléfono inválido"
    )
    .nullable(),

  showType: Yup.string(),

  eventType: Yup.string(),

  message: Yup.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .required("El mensaje es obligatorio"),
});

interface ContactFormProps {
  status: "idle" | "sending" | "success" | "error";
  onSubmit: (
    values: {
      name: string;
      email: string;
      phone: string;
      showType: string;
      eventType: string;
      message: string;
    },
    actions: { resetForm: () => void }
  ) => Promise<void>;
  initialEventType?: string;
}

export const ContactForm = ({
  status,
  onSubmit,
  initialEventType = "",
}: ContactFormProps) => {
  // VALORES INICIALES
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    showType: initialEventType,
    eventType: "",
    message: "",
  };
  return (
    <div className="bg-black/30 border border-gold rounded-xl p-8">
      <h2 className="text-2xl font-title text-gold mb-6">Envíame un mensaje</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            {/* Nombre */}
            <FormField
              label="Nombre"
              name="name"
              placeholder="Tu nombre"
              required
            />

            {/* Email */}
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
            />

            {/* Teléfono */}
            <FormField
              label="Teléfono"
              name="phone"
              type="tel"
              placeholder="+34 612 345 678"
            />

            {/* Espectáculo */}
            <FormField label="Espectáculo" name="showType" as="select">
              <option value="">Selecciona un espectáculo</option>
              <option value="mas-alla-de-la-mente">Más Allá de la Mente</option>
              <option value="logica-del-azar">La Lógica del Azar</option>
              <option value="magia-coctel">Magia de Cóctel</option>
              <option value="magia-empresas">Magia para Empresas</option>
            </FormField>

            {/* Tipo de evento */}
            <FormField label="Tipo de evento" name="eventType" as="select">
              <option value="">Selecciona una opción</option>
              <option value="boda">Boda</option>
              <option value="corporativo">Evento corporativo</option>
              <option value="privado">Evento privado</option>
              <option value="teatro">Teatro/Sala</option>
              <option value="otro">Otro</option>
            </FormField>

            {/* Mensaje */}
            <FormField
              label="Mensaje"
              name="message"
              as="textarea"
              rows={5}
              placeholder="Cuéntame sobre tu evento: fecha, ubicación, número de invitados..."
              required
            />

            {/* BOTÓN DE ENVÍO */}
            <button
              type="submit"
              disabled={isSubmitting || status === "sending"}
              className={`
                w-full py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  status === "sending" || isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : status === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : status === "error"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gold text-black hover:bg-gold-light"
                }
              `}
            >
              {(status === "sending" || isSubmitting) && "Enviando..."}
              {status === "success" && "✓ Mensaje enviado"}
              {status === "error" && "Error. Intentar de nuevo"}
              {status === "idle" && !isSubmitting && "Enviar mensaje"}
            </button>

            {/* MENSAJE ÉXITO */}
            {status === "success" && (
              <p className="text-green-500 text-center text-sm">
                ¡Gracias! Te responderé lo antes posible.
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
