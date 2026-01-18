import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Users, Car, Utensils, Camera, ArrowRight, Check, 
  AirVent, Droplets, Truck, Shield, Zap, Accessibility,
  Sparkles, Heart, Cake, Building2, Handshake, GraduationCap,
  Music, PartyPopper, Bed
} from 'lucide-react';
import banquetHall from '@/assets/banquet-hall.jpg';
import lawnArea from '@/assets/lawn-area.jpg';
import acRoom from '@/assets/ac-room.jpg';
import weddingCeremony from '@/assets/wedding-ceremony.jpg';
import corporateMeeting from '@/assets/corporate-meeting.jpg';
import foodCatering from '@/assets/food-catering.jpg';
import stageShow from '@/assets/stage-show.jpeg';
import sittingCapacity1 from '@/assets/sitting-capacity-1.jpeg';
import sittingCapacity2 from '@/assets/sitting-capacity-2.jpeg';
import selfyPont from '@/assets/selfy-pont.jpeg';
import partyStage from '@/assets/party-stage.jpeg';


const Facilities = () => {
  const venues = [
    {
  name: 'Signature Wedding Stage',
  capacity: 'Decorated Performance Stage',
  description:
    'A beautifully designed wedding stage ideal for varmala, rituals, cultural performances, and grand ceremony highlights.',
  image: stageShow,
  features: [
    'Designer Wedding Stage',
    'Professional Lighting Setup',
    'High-Quality Sound System',
    'Perfect for Photography',
  ],
},
{
  name: 'Royal Banquet Hall',
  capacity: '2000 sq ft • Fully Air Conditioned',
  description:
    'An elegant premium banquet hall suitable for weddings, ring ceremonies, birthday parties, and family celebrations.',
  image: sittingCapacity1,
  features: [
    'Fully Air Conditioned',
    'Elegant Seating Arrangement',
    'Stage & Dance Floor',
    'Decorative LED Lighting',
  ],
},
{
  name: 'Grand Celebration Hall',
  capacity: '3200 sq ft • Fully Air Conditioned',
  description:
    'A spacious and luxurious banquet hall designed for large weddings, receptions, and corporate gatherings.',
  image: sittingCapacity2,
  features: [
    'Large Seating Capacity',
    'Premium Interior Décor',
    'Sound & AV System',
    'Flexible Seating Layout',
  ],
},
{
  name: 'Memory Lane – Selfie Point',
  capacity: 'Dedicated Photo Zone',
  description:
    'A specially curated selfie point where guests can capture memorable moments during events and celebrations.',
  image: selfyPont,
  features: [
    'Attractive Photo Background',
    'Well-Lit Area',
    'Guest Engagement Spot',
    'Social Media Friendly',
  ],
},
{
  name: 'Elite Party & Performance Arena',
  capacity: 'Open Party Stage Area',
  description:
    'An energetic party stage perfect for DJ nights, dance performances, musical shows, and celebration events.',
  image: partyStage,
  features: [
    'DJ & Music Friendly Setup',
    'Dance Floor Space',
    'Dynamic Lighting Effects',
    'High-Energy Ambience',
  ],
}


  ];

  const amenities = [
    
    { icon: AirVent, name: 'AC & Non-AC Rooms Available', description: '18 comfortable rooms for your guests' },
    { icon: Building2, name: '2 Spacious AC / Non-AC Halls', description: 'Premium & Grand banquet halls' },
    { icon: Sparkles, name: 'Beautiful & Open Lawn Area', description: '20,000 sq ft for grand celebrations' },
    { icon: Car, name: 'Ample Parking Space', description: 'Safe and spacious vehicle parking' },
    { icon: Camera, name: '24×7 CCTV Security Surveillance', description: 'Round-the-clock monitoring' },
    { icon: Droplets, name: 'RO Purified Drinking Water', description: 'Clean and safe drinking water' },
    { icon: Truck, name: 'Vehicle / Transport Facility', description: 'Transportation arrangements available' },
    { icon: Utensils, name: 'Delicious & High-Quality Food', description: 'Customized catering services' },
    { icon: Shield, name: 'Clean, Peaceful & Hygienic Environment', description: 'Well-maintained premises' },
    { icon: Zap, name: 'Power Backup Facility', description: 'Uninterrupted power supply' },
    { icon: Accessibility, name: 'Wheelchair Accessible', description: 'Elder-friendly arrangements' },
    { icon: Music, name: 'Sound & DJ Systems', description: 'Premium audio equipment' },
  ];

  const eventCategories = [
    {
  title: 'Signature Wedding Stage',
  icon: Sparkles,
  image: stageShow,
  events: [
    'Wedding Ceremonies & Varmala',
    'Bride & Groom Entry Stage',
    'Cultural Performances',
    'Grand Ceremony Highlights',
  ],
},
{
  title: 'Royal Banquet Hall',
  icon: Users,
  image: sittingCapacity1,
  events: [
    'Wedding Receptions',
    'Ring Ceremonies',
    'Birthday & Anniversary Parties',
    'Elegant Seating Arrangement',
  ],
},
{
  title: 'Grand Celebration Hall',
  icon: Building2,
  image: sittingCapacity2,
  events: [
    'Large Wedding Functions',
    'Corporate & Business Events',
    'Social & Cultural Programs',
    'Flexible Seating Layout',
  ],
},
{
  title: 'Memory Lane – Selfie Point',
  icon: Camera,
  image: selfyPont,
  events: [
    'Guest Selfie & Photo Zone',
    'Wedding Photography Spot',
    'Decorated Background Setup',
    'Social Media Ready Moments',
  ],
},
{
  title: 'Elite Party & Performance Arena',
  icon: Music,
  image: partyStage,
  events: [
    'DJ Nights & Dance Parties',
    'Live Musical Performances',
    'Birthday & Celebration Events',
    'High-Energy Entertainment Zone',
  ],
}
,
    {
      title: 'Comfortable Stay Arrangements',
      icon: Bed,
      image: acRoom,
      events: ['Family & Business Stay', 'Comfortable Accommodation for Guests', 'AC & Non-AC Room Options', '18 Well-Furnished Rooms'],
    },
    {
      title: 'Wedding & Social Functions',
      icon: Heart,
      image: weddingCeremony,
      events: ['Wedding Ceremonies', 'Bride & Groom Welcome Ceremony', 'Ring Ceremony / Engagement', 'Reception Party', 'Tilak, Haldi & Mehndi Functions'],
    },
    {
      title: 'Private Celebrations',
      icon: Cake,
      image: banquetHall,
      events: ['Birthday Parties', 'Anniversary Celebrations', 'Family Get-Togethers', 'Baby Showers & Naming Ceremonies'],
    },
    {
      title: 'Corporate & Formal Events',
      icon: Building2,
      image: corporateMeeting,
      events: ['Private Meetings', 'Corporate Meetings', 'Seminars & Workshops', 'Training Programs', 'Press Meetings'],
    },
    {
      title: 'Other Events',
      icon: Handshake,
      image: foodCatering,
      events: ['Social Gatherings', 'Political / Organizational Meetings', 'School & College Programs', 'Religious & Cultural Events'],
    },
  ];

  return (
    <>
      <title>Facilities - Hilsa Heritage Hotel & Banquet Hall | Venues & Amenities</title>
      <meta name="description" content="Explore our world-class facilities at Hilsa Heritage. Multiple AC halls, 20,000 sq ft lawn, 18 rooms, and premium amenities for your perfect celebration in Hilsa, Bihar." />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banquetHall})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="text-accent font-display text-lg tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            World-Class
          </p>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
            Our Facilities & Amenities
          </h1>
          <p className="text-xl text-white/80 mt-6 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
            Everything you need for a perfect celebration under one roof
          </p>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">🏨 Hotel Venues</span>
            </div>
            <h2 className="heading-section text-foreground mt-4">
              Magnificent <span className="text-accent">Spaces</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Choose from our collection of stunning venues, each designed to make your event extraordinary.
            </p>
          </div>

          <div className="space-y-16">
            {venues.map((venue, index) => (
              <div
                key={venue.name}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up opacity-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-lg overflow-hidden shadow-elegant">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-display text-sm">
                      <Users className="inline h-4 w-4 mr-2" />
                      {venue.capacity}
                    </div>
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="heading-section text-foreground">{venue.name}</h3>
                  <p className="text-elegant text-muted-foreground">{venue.description}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {venue.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <Check className="h-5 w-5 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="gold" className="mt-4">
                      Enquire Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Facilities & Amenities Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">🏨 Premium Services</span>
            </div>
            <h2 className="heading-section mt-4">
              Hotel Facilities & <span className="text-accent">Amenities</span>
            </h2>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              We provide everything you need for a comfortable and memorable experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.name}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-all duration-300 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <amenity.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{amenity.name}</h3>
                <p className="text-primary-foreground/70 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Functions Section */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament">
              <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">🎉 What We Host</span>
            </div>
            <h2 className="heading-section text-foreground mt-4">
              Events & <span className="text-accent">Functions</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              From intimate gatherings to grand celebrations, we host all types of events with excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-background rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.events.map((event) => (
                      <li key={event} className="flex items-center gap-3 text-foreground">
                        <PartyPopper className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-elegant">
              <img
                src={acRoom}
                alt="Luxury Accommodations"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-display text-sm">
                18 Rooms Available
              </div>
            </div>
            <div className="space-y-8">
              <div className="ornament text-left">
                <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">🛏️ Stay With Us</span>
              </div>
              <h2 className="heading-section text-foreground">
                Comfortable <span className="text-accent">Accommodations</span>
              </h2>
              <p className="text-elegant text-muted-foreground">
                Extend your celebration with a comfortable stay in our elegantly appointed rooms. We offer both AC and Non-AC options to suit your preferences and budget.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AirVent className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">AC Rooms</h4>
                    <p className="text-muted-foreground">Comfortable air-conditioned rooms with modern amenities for a relaxing stay.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bed className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">Non-AC Rooms</h4>
                    <p className="text-muted-foreground">Budget-friendly rooms with all basic amenities for comfortable accommodation.</p>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <Button variant="luxury" size="lg">
                  Book Your Stay
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 lg:order-1">
              <div className="ornament text-left">
                <span className="text-accent font-display tracking-[0.2em] uppercase text-sm">🍽️ Catering Services</span>
              </div>
              <h2 className="heading-section text-foreground">
                Delicious & <span className="text-accent">High-Quality Food</span>
              </h2>
              <p className="text-elegant text-muted-foreground">
                Our expert chefs prepare mouthwatering dishes with the finest ingredients. From traditional Indian cuisine to modern delicacies, we cater to all tastes and dietary requirements.
              </p>
              
              <ul className="grid grid-cols-2 gap-4">
                {['Veg & Non-Veg Options', 'Traditional Cuisine', 'Live Counters', 'Custom Menus', 'Premium Desserts', 'Refreshing Beverages'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Discuss Menu Options
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-elegant lg:order-2">
              <img
                src={foodCatering}
                alt="Delicious Food Arrangements"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section mb-6">
              Ready to Book Your <span className="text-accent">Event</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Our event specialists are here to help you plan the perfect celebration. Contact us for a personalized tour and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Schedule a Visit
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  View Gallery
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
