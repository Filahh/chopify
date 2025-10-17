import ContactForm from "@/app/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#F8B75D]/20">
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 bg-[#292A44] text-white">
        <h2 className="text-4xl font-extrabold mb-6">Get in Touch 🍴</h2>
        <p className="text-base mb-8 leading-relaxed">
          Have questions, feedback, or craving something special?  
          Reach out and we’ll make sure your cravings are handled with love.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-[#F8B75D]" />
            <p>123 Chop Street, Abuja, Nigeria</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#F8B75D]" />
            <p>+234 801 234 5678</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-[#F8B75D]" />
            <p>support@chopify.com</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 bg-white">
        <h3 className="text-3xl font-bold text-[#C4402A] mb-8">
          Send Us a Message
        </h3>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
