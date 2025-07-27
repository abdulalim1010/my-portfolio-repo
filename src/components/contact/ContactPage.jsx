import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader ";


const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
