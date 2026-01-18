import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Users, Calendar, Target, Heart, Star, ArrowRight } from 'lucide-react';
import hotelExterior from '@/assets/hotel-exterior.jpg';
import heroBanquet from '@/assets/hero-banquet.jpg';

const About = () => {
  const milestones = [
    { year: 'Est.', event: 'Hilsa Heritage was established with a vision to redefine celebrations in Hilsa' },
    { year: 'Growth', event: 'Expanded to include 18 AC/Non-AC rooms for guest accommodation' },
    { year: 'Expansion', event: 'Added 20,000 sq ft lawn for grand outdoor celebrations' },
    { year: 'Upgrade', event: 'Completed renovation with fully AC halls and modern facilities' },
    { year: 'Today', event: 'Booking Open - Creating unforgettable memories for all precious moments' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every celebration is crafted with love and dedication to perfection.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We deliver nothing short of extraordinary in every detail.',
    },
    {
      icon: Users,
      title: 'Hospitality',
      description: 'Our guests are family, and we treat them with warmth and care.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously evolving to offer the finest experiences.',
    },
  ];

  const stats = [
    { number: '2', label: 'AC Banquet Halls' },
    { number: '20,000', label: 'Sq Ft Lawn Area' },
    { number: '18', label: 'AC/Non-AC Rooms' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <>
      <title>About Us - Hilsa Heritage Hotel & Banquet Hall | Our Legacy of Excellence</title>
      <meta name="description" content="Discover the story behind Hilsa Heritage Hotel & Banquet Hall. Owned by Dr. Ravi Ranjan and run by Chandan Kumar, we create magical celebrations in Hilsa, Bihar." />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanquet})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="text-accent font-display text-lg tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Our Story
          </p>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
            About Hilsa Heritage
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="ornament justify-start">
                <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Who We Are</span>
              </div>
              <h2 className="heading-section text-foreground">
                A Legacy of <span className="text-accent">Grandeur</span>
              </h2>
              <p className="text-elegant text-muted-foreground leading-relaxed">
                Hilsa Heritage Hotel & Banquet Hall stands as a testament to timeless elegance and unparalleled hospitality in Hilsa, Bihar. Owned by Dr. Ravi Ranjan and expertly managed by Chandan Kumar, we have become the preferred destination for families seeking to create extraordinary celebrations.
              </p>
              <p className="text-elegant text-muted-foreground leading-relaxed">
                Our vision has always been simple yet profound: to provide elegance and excellence for your dream wedding. With our spacious halls, beautiful lawn, and a team of dedicated professionals, we bring dreams to life with impeccable precision.
              </p>
              <p className="text-elegant text-muted-foreground leading-relaxed">
                From ring ceremonies to grand weddings, birthdays to corporate meetings - Hilsa Heritage has been the backdrop for countless celebrations that have left lasting impressions on all our precious guests.
              </p>
            </div>
            <div className="relative animate-scale-in opacity-0" style={{ animationDelay: '400ms' }}>
              <img
                src={hotelExterior}
                alt="Royal Palace Hotel"
                className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-accent rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Our Values</span>
            </div>
            <h2 className="heading-section text-foreground mt-4">
              What Drives <span className="text-accent">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background p-8 rounded-lg shadow-card text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">Our Journey</span>
            </div>
            <h2 className="heading-section text-foreground mt-4">
              Milestones of <span className="text-accent">Excellence</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 mb-8 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-24">
                  <span className="font-display text-2xl font-bold text-accent">{milestone.year}</span>
                </div>
                <div className="relative pl-8 border-l-2 border-accent/30 pb-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full" />
                  <p className="text-foreground text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="heading-section mb-6">
              Experience the <span className="text-accent">Royal</span> Difference
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Let us be part of your special moments. Visit our venue and experience the grandeur that has made us the preferred choice for celebrations.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Schedule a Visit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
