import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Users, Calendar, Award, ArrowRight, Heart, Sparkles } from 'lucide-react';
import heroBanquet from '@/assets/hero-banquet.jpg';
import hotelExterior from '@/assets/hotel-exterior.jpg';
import luxuryRoom from '@/assets/luxury-room.jpg';
import weddingSetup from '@/assets/wedding-setup.jpg';
import fineDining from '@/assets/fine-dining.jpg';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: '20,000 sq ft Lawn',
      description: 'Spacious lawn area perfect for outdoor ceremonies and large gatherings.',
    },
    {
      icon: Calendar,
      title: 'Multiple Halls',
      description: 'Hall 1 (2000 sq ft) and Hall 2 (3200 sq ft) - both fully air conditioned.',
    },
    {
      icon: Award,
      title: '18 AC/Non-AC Rooms',
      description: 'Comfortable accommodation for guests with modern amenities.',
    },
    {
      icon: Star,
      title: 'Premium Facilities',
      description: 'Parking, Generator, CCTV security, and high-speed Wi-Fi available.',
    },
  ];

  const services = [
    {
      title: 'Grand Weddings',
      description: 'Create memories that last a lifetime with our magnificent wedding venues.',
      image: weddingSetup,
    },
    {
      title: 'Luxury Accommodations',
      description: 'Rest in opulence with our elegantly designed rooms and suites.',
      image: luxuryRoom,
    },
    {
      title: 'Fine Dining',
      description: 'Savor exquisite cuisines crafted by our master chefs.',
      image: fineDining,
    },
  ];

  const testimonials = [
    {
      name: 'Priya & Rahul Kumar',
      event: 'Wedding Reception',
      quote: 'Our wedding at Hilsa Heritage was beyond our dreams. The attention to detail and the magnificent ambiance made our special day truly unforgettable.',
      rating: 5,
    },
    {
      name: 'Amit Singh',
      event: 'Corporate Event',
      quote: 'Exceptional venue with top-notch facilities. Our annual conference was a grand success thanks to the professional team at Hilsa Heritage.',
      rating: 5,
    },
    {
      name: 'Meera & Vikram Prasad',
      event: 'Engagement Ceremony',
      quote: 'The elegance and grandeur of this venue is unmatched. Every moment was magical and our guests were thoroughly impressed.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* SEO Meta */}
      <title>Hilsa Heritage Hotel & Banquet Hall | Premier Wedding Venue in Hilsa, Bihar</title>
      <meta name="description" content="Hilsa Heritage Hotel & Banquet Hall - Elegance & Excellence for your dream wedding. Experience luxury banquet halls, AC rooms, and world-class hospitality in Hilsa, Bihar." />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanquet})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-accent font-display text-lg md:text-xl tracking-[0.3em] uppercase animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              Welcome to
            </p>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
              Hilsa Heritage
            </h1>
            <p className="text-lg md:text-xl tracking-[0.2em] uppercase text-white/90 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
              Hotel & Banquet Hall
            </p>
            <p className="text-elegant text-white/80 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
              Elegance & Excellence For Your Dream Wedding. Create timeless memories at the most prestigious wedding destination in Hilsa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in opacity-0" style={{ animationDelay: '1000ms' }}>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  <Heart className="h-5 w-5" />
                  Book Your Dream Event
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  Explore Gallery
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative animate-scale-in opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="relative rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={hotelExterior}
                  alt="Royal Palace Hotel Exterior"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent rounded-lg -z-10" />
              {/* Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-elegant">
                <p className="text-4xl font-display font-bold text-accent">25+</p>
                <p className="text-sm tracking-wide">Years of Excellence</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="ornament justify-start">
                <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">About Us</span>
              </div>
              <h2 className="heading-section text-foreground">
                A Legacy of <span className="text-accent">Grandeur</span> & Elegance
              </h2>
              <p className="text-elegant text-muted-foreground leading-relaxed">
                Hilsa Heritage stands as the crown jewel of celebrations in Hilsa, Bihar. Our magnificent venue combines traditional opulence with modern amenities, creating the perfect backdrop for all your precious moments.
              </p>
              <p className="text-elegant text-muted-foreground leading-relaxed">
                From ring ceremonies to grand weddings, birthdays to corporate meetings - every event at Hilsa Heritage is crafted with meticulous attention to detail by our dedicated team.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg" className="mt-4">
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Why Choose Us</span>
            </div>
            <h2 className="heading-section text-foreground mt-4">
              Unmatched <span className="text-accent">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-background p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Our Services</span>
            </div>
            <h2 className="heading-section text-foreground mt-4">
              Curated for <span className="text-accent">Perfection</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/facilities">
              <Button variant="gold" size="lg">
                <Sparkles className="h-5 w-5" />
                Explore All Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-accent rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-accent rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Testimonials</span>
            </div>
            <h2 className="heading-section mt-4">
              Cherished <span className="text-accent">Memories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-lg border border-primary-foreground/10 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-display font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Begin Your Journey</span>
            </div>
            <h2 className="heading-section text-foreground mt-4 mb-6">
              Ready to Create <span className="text-accent">Magic</span>?
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto mb-10">
              Let us transform your vision into an extraordinary celebration. Contact our expert team today and take the first step towards an unforgettable event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="luxury" size="xl">
                  Enquire Now
                </Button>
              </Link>
              <a href="tel:+919204909192">
                <Button variant="outline" size="xl">
                  Call: +91 92049 09192
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
