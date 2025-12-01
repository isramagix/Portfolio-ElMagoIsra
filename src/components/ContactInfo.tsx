interface ContactItemProps {
  icon: string;
  label: string;
  children: React.ReactNode;
}

const ContactItem = ({ icon, label, children }: ContactItemProps) => (
  <div className="flex items-start gap-4">
    <div className="text-gold text-2xl mt-1">{icon}</div>
    <div>
      <p className="text-text-primary font-semibold mb-1">{label}</p>
      {children}
    </div>
  </div>
);

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-title text-gold mb-6">
          Información de contacto
        </h2>

        <div className="space-y-6">
          <ContactItem icon="🌐" label="Redes sociales">
            <div className="flex gap-4">
              <a
                href="https://instagram.com/elmago.isra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-gold transition"
              >
                Instagram
              </a>
            </div>
          </ContactItem>
        </div>
      </div>
    </div>
  );
};
