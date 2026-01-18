import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import heroBanquet from '@/assets/hero-banquet.jpg';

interface FormData {
  name: string;
  mobile: string;
  eventType: string;
  eventDate: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
const [isSubmitting, setIsSubmitting] = useState(false);

// Add email to your FormData interface and state
interface FormData {
  name: string;
  mobile: string;
  email: string;          // ← Required by Web3Forms
  eventType: string;
  eventDate: string;
  message: string;
}

const [formData, setFormData] = useState<FormData>({
  name: '',
  mobile: '',
  email: '',
  eventType: '',
  eventDate: '',
  message: '',
});

const eventTypes = [
  'Ring Ceremony',
  'Wedding',
  'Birthday Party',
  'Corporate Meeting',
  'Anniversary',
  'Engagement',
  'Other Events',
];

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const validateForm = (): boolean => {
  if (!formData.name.trim()) {
    toast({ title: 'Error', description: 'Please enter your name', variant: 'destructive' });
    return false;
  }
  if (!formData.mobile.trim() || !/^[6-9]\d{9}$/.test(formData.mobile)) {
    toast({ title: 'Error', description: 'Please enter a valid 10-digit mobile number', variant: 'destructive' });
    return false;
  }
  if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
    toast({ title: 'Error', description: 'Please enter a valid email address', variant: 'destructive' });
    return false;
  }
  if (!formData.eventType) {
    toast({ title: 'Error', description: 'Please select an event type', variant: 'destructive' });
    return false;
  }
  if (!formData.eventDate) {
    toast({ title: 'Error', description: 'Please select an event date', variant: 'destructive' });
    return false;
  }
  return true;
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const submissionData = {
      access_key: "5590b7ff-e789-44de-993a-3d2aba7b7888", // ← Your key
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      event_type: formData.eventType,     // renamed for nicer email
      event_date: formData.eventDate,
      message: formData.message || "(No additional message provided)",
      subject: `New Enquiry - ${formData.eventType} on ${formData.eventDate}`, // optional: custom subject
      from_name: formData.name,
    };

    const json = JSON.stringify(submissionData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const res = await response.json();

    if (res.success) {
      toast({
        title: 'Enquiry Submitted Successfully!',
        description: 'Thank you! Our team will contact you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        eventType: '',
        eventDate: '',
        message: '',
      });
    } else {
      throw new Error(res.message || "Submission failed");
    }
  } catch (error) {
    console.error("Web3Forms error:", error);
    toast({
      title: 'Submission Failed',
      description: 'Something went wrong. Please try again or call us directly: +91 92049 09192',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Main Road Hilsa, Near Mai High School, Hilsa - 801302 (Bihar)',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 92049 09192, +91 94732 52092',
      link: 'tel:+919204909192',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Sun: 9:00 AM - 9:00 PM',
    },
  ];

  return (
    <>
      <title>Contact Us - Hilsa Heritage Hotel & Banquet Hall | Enquiry Form</title>
      <meta name="description" content="Contact Hilsa Heritage Hotel & Banquet Hall for your wedding or event enquiry. Located in Hilsa, Bihar. Call +91 92049 09192 or fill out our form." />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanquet})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="text-accent font-display text-lg tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Get In Touch
          </p>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="ornament justify-start mb-6">
                <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Enquiry Form</span>
              </div>
              <h2 className="heading-section text-foreground mb-6">
                Book Your <span className="text-accent">Dream Event</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours with all the details you need.
              </p>

 <form onSubmit={handleSubmit} className="space-y-6">
  <div>
    <label htmlFor="name" className="block font-display text-foreground mb-2">
      Full Name *
    </label>
    <Input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Enter your full name"
      className="h-12"
      required
    />
  </div>

  <div>
    <label htmlFor="mobile" className="block font-display text-foreground mb-2">
      Mobile Number *
    </label>
    <Input
      id="mobile"
      name="mobile"
      value={formData.mobile}
      onChange={handleInputChange}
      placeholder="Enter 10-digit mobile number"
      className="h-12"
      maxLength={10}
      pattern="[6-9][0-9]{9}"
      title="Please enter valid 10-digit number starting with 6-9"
      required
    />
  </div>

  {/* Required field for Web3Forms */}
  <div>
    <label htmlFor="email" className="block font-display text-foreground mb-2">
      Email Address *
    </label>
    <Input
      id="email"
      name="email"
      type="email"
      value={formData.email || ""}
      onChange={handleInputChange}
      placeholder="your@email.com"
      className="h-12"
      required
    />
  </div>

  <div>
    <label htmlFor="eventType" className="block font-display text-foreground mb-2">
      Event Type *
    </label>
    <select
      id="eventType"
      name="eventType"
      value={formData.eventType}
      onChange={handleInputChange}
      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      required
    >
      <option value="">Select event type</option>
      {eventTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label htmlFor="eventDate" className="block font-display text-foreground mb-2">
      Event Date *
    </label>
    <Input
      id="eventDate"
      name="eventDate"
      type="date"
      value={formData.eventDate}
      onChange={handleInputChange}
      className="h-12"
      min={new Date().toISOString().split('T')[0]}
      required
    />
  </div>

  <div>
    <label htmlFor="message" className="block font-display text-foreground mb-2">
      Additional Message
    </label>
    <Textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      placeholder="Tell us more about your event requirements..."
      rows={4}
    />
  </div>

  {/* Hidden honeypot + bot protection field (recommended) */}
  <input
    type="checkbox"
    name="botcheck"
    className="hidden"
    tabIndex={-1}
    autoComplete="off"
  />

  <Button
    type="submit"
    variant="luxury"
    size="xl"
    className="w-full"
    disabled={isSubmitting}
  >
    {isSubmitting ? (
      'Submitting...'
    ) : (
      <>
        <Send className="h-5 w-5 mr-2" />
        Submit Enquiry
      </>
    )}
  </Button>
</form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
              <div>
                <div className="ornament justify-start mb-6">
                  <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Reach Us</span>
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  Contact <span className="text-accent">Information</span>
                </h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-border">
                <p className="font-display font-semibold text-foreground mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden shadow-card h-[300px] bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="font-display text-lg text-foreground mb-2">Visit Our Venue</p>
                  <p className="text-muted-foreground text-sm">
                    Main Road Hilsa, Near Mai High School,<br />
                    Hilsa - 801302 (Bihar)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note about backend integration */}
      {/* <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            <strong>Note:</strong> To enable email and SMS notifications for enquiries, please connect to Lovable Cloud for backend functionality.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Contact;
