import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ContactInfo } from "../components/ContactInfo";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const eventoParam = searchParams.get("evento");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (
    values: {
      name: string;
      email: string;
      phone: string;
      showType: string;
      eventType: string;
      message: string;
    },
    { resetForm }: { resetForm: () => void }
  ) => {
    setStatus("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Faltan las credenciales de EmailJS. Configura el archivo .env"
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          showType: values.showType,
          eventType: values.eventType,
          message: values.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      );

      setStatus("success");
      resetForm();
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-title text-gold mb-4">
            Contacto
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            ¿Tienes un evento en mente? Cuéntame sobre tu proyecto y hagamos que
            suceda algo único.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ContactInfo />
          <ContactForm
            status={status}
            onSubmit={handleSubmit}
            initialEventType={eventoParam || ""}
          />
        </div>
      </div>
    </div>
  );
}
