import { ContactForm } from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--gradient-subtle)]">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary py-20 px-4">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px] animate-[slide_20s_linear_infinite]" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
        </div>
        {/* Contact Info Cards */}
        <div className="max-w-6xl mx-auto px-4 -mt-12 mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground">budha@yuvya.co.in</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Business St, Suite 100</p>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)]">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;