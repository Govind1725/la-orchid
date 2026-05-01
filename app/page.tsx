'use client';

import { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, Star, Utensils, Sparkles, Users, Wine, Clock, MapPin, Phone, Mail, Heart, Crown, Check } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

const roomHighlights = [
  {
    id: 1,
    title: 'Standard Room',
    description: 'Elegant comfort with city views',
    price: 'From ₹4000/night',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAPLE/Maple_31_.jpg',
  },
  {
    id: 2,
    title: 'Executive Room',
    description: 'Sophisticated luxury space',
    price: 'From ₹4500/night',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAHOGANY/Mahogany_1_.jpg',
  },
  {
    id: 3,
    title: 'Suite Room',
    description: 'Ultimate indulgence',
    price: 'From ₹6000/night',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/OAK/Oak_24_.jpg',
  },
];

const restaurantHighlights = [
  {
    title: 'Fine Dining',
    description: 'Exquisite cuisine',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_12_.jpg',
  },
  {
    title: 'Ambience',
    description: 'Elegant settings',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_14_.jpg',
  },
  {
    title: 'Cuisine',
    description: 'World-class flavors',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_8_.jpg',
  },
];

const banquetFeatures = [
  { title: 'Weddings', description: 'Magical celebrations', icon: Heart },
  { title: 'Corporate', description: 'Professional gatherings', icon: Users },
  { title: 'Gala', description: 'Evening experiences', icon: Crown },
];

const dining = [{ title: 'Restaurant' }];
const general = [{ title: 'Parking' }, { title: 'Security' }, { title: 'Elevator' }];

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Guest', text: 'Wonderful experience!', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'James Anderson', role: 'Guest', text: 'Highly recommended.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Emily Chen', role: 'Guest', text: 'Exceptional service.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [showCheckinPicker, setShowCheckinPicker] = useState(false);
  const [showCheckoutPicker, setShowCheckoutPicker] = useState(false);
  const checkinRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowCheckinPicker(false);
        setShowCheckoutPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCheckinChange = (date: Date | null) => {
    setCheckinDate(date);
    setShowCheckinPicker(false);
    if (date && checkoutDate && checkoutDate <= date) {
      setCheckoutDate(null);
    }
    if (date) {
      setTimeout(() => setShowCheckoutPicker(true), 100);
    }
  };

  const handleCheckoutChange = (date: Date | null) => {
    setCheckoutDate(date);
    setShowCheckoutPicker(false);
  };

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  };

  const momentsImages = [
    'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_1_.jpg',
    'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/OAK/Oak_24_.jpg',
    'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAPLE/Maple_31_.jpg',
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="/hero-temple.jpg"
            alt="Brihadisvara Temple"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          {isLoaded && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <h1 className={styles.heroTitle}>La Orchid Hotel</h1>
              <p className={styles.heroDescription}>Experience luxury and comfort in the heart of the city</p>
              <div className={styles.heroButtons}>
                <Link href="/hotel" className={styles.primaryBtn}>Explore Hotel</Link>
                <Link href="/restaurant" className={styles.secondaryBtn}>Restaurant</Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* Booking Search Box */}
        <motion.div
          className={styles.bookingSearchWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.bookingSearchBox}>
            <div ref={checkinRef} className={styles.searchField} onClick={() => setShowCheckinPicker(!showCheckinPicker)}>
              <span className={styles.fieldLabel}>Check-in</span>
              <span className={styles.fieldValue}>
                {checkinDate ? formatDate(checkinDate) : 'Select date'}
              </span>
              {showCheckinPicker && (
                <div className={styles.datepickerWrapper}>
                  <DatePicker
                    selected={checkinDate}
                    onChange={handleCheckinChange}
                    minDate={new Date()}
                    inline
                  />
                </div>
              )}
            </div>
            <div className={styles.searchDivider} />
            <div ref={checkoutRef} className={styles.searchField} onClick={() => checkinDate && setShowCheckoutPicker(!showCheckoutPicker)}>
              <span className={styles.fieldLabel}>Check-out</span>
              <span className={styles.fieldValue}>
                {checkoutDate ? formatDate(checkoutDate) : checkinDate ? 'Select date' : 'Select check-in first'}
              </span>
              {showCheckoutPicker && checkinDate && (
                <div className={styles.datepickerWrapper}>
                  <DatePicker
                    selected={checkoutDate}
                    onChange={handleCheckoutChange}
                    minDate={new Date(checkinDate.getTime() + 24 * 60 * 60 * 1000)}
                    inline
                  />
                </div>
              )}
            </div>
            <div className={styles.searchDivider} />
            <div className={styles.searchField}>
              <span className={styles.fieldLabel}>Guests</span>
              <span className={styles.fieldValue}>1 Room, 2 Guests</span>
            </div>
            <button className={styles.searchBtn}>Search</button>
          </div>
        </motion.div>
        <div className={styles.scrollIndicator}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Rooms Section */}
      <section className={styles.roomsSection}>
        <div className={styles.container}>
          <div className={styles.roomsGrid}>
            <motion.div className={styles.roomsContent} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={styles.sectionSubtitle}>Accommodations</span>
              <h2 className={styles.sectionTitle}>Luxury Rooms & Suites</h2>
              <p className={styles.sectionDescription}>Discover our meticulously designed spaces where every detail reflects the pinnacle of refined living</p>
              <Link href="/hotel" className={styles.primaryBtn}>Explore Rooms</Link>
            </motion.div>
            <motion.div className={styles.roomImageShowcase} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/OAK/Oak_20_.jpg" alt="La Orchid Hotel" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section className={styles.restaurantSection}>
        <div className={styles.container}>
          <div className={styles.restaurantGrid}>
            <motion.div className={styles.restaurantContent} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={styles.sectionSubtitle}>Culinary Excellence</span>
              <h2 className={styles.sectionTitle}>Fine Dining</h2>
              <p className={styles.sectionDescription}>Indulge in a gastronomic journey crafted by world-renowned chefs, featuring the finest ingredients and innovative techniques</p>
              <Link href="/restaurant" className={styles.primaryBtn}>View Menu <ArrowRight size={16} /></Link>
            </motion.div>
            <div className={styles.restaurantGallery}>
              {restaurantHighlights.map((item, i) => (
                <motion.div key={i} className={styles.galleryCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <img src={item.image} alt={item.title} className={styles.galleryImage} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Moments */}
      <section className={styles.momentsSection}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={styles.sectionTitle}>Live Moments</h2>
          </motion.div>
          <div className={styles.momentsGrid}>
            {momentsImages.map((img, i) => (
              <div key={i} className={styles.momentCard}>
                <img src={img} alt={`Moment ${i}`} className={styles.momentImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet */}
       <section className={styles.banquetSection}>
         <div className={styles.banquetBg} />
         <div className={styles.container}>
           <motion.div className={styles.banquetContent} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
             <span className={styles.sectionSubtitle}>Celebrations</span>
             <h2 className={styles.sectionTitle}>Grand Banquet Hall</h2>
             <p className={styles.sectionDescription}>Create unforgettable memories in our magnificent event spaces, perfect for weddings, corporate gatherings, and exclusive celebrations</p>
             <Link href="/restaurant" className={styles.bookingBtn}>Book Now</Link>
           </motion.div>
           <div className={styles.banquetFeatures}>
             {banquetFeatures.map((feature, i) => (
               <motion.div key={i} className={styles.banquetFeature} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                 <div className={styles.featureIcon}><feature.icon size={24} /></div>
                 <h3>{feature.title}</h3>
                 <p>{feature.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

       {/* About */}
       <section className={styles.aboutSection}>
         <div className={styles.container}>
           <motion.div className={styles.sectionHeader} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
             <span className={styles.sectionSubtitle}>About Us</span>
              <h2 className={styles.sectionTitle}>La Orchid</h2>
           </motion.div>

           <div className={styles.aboutGrid}>
             <motion.div className={styles.aboutImageWrapper} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div className={styles.aboutImageContainer}>
                 <img src="https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_3_.jpg" alt="La Orchid Hotel" className={styles.aboutImage} />
                 <div className={styles.imageOverlay} />
               </div>
             </motion.div>

             <motion.div className={styles.aboutContent} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <p className={styles.aboutDescription}>
                 Thanjavur, sometimes called Tanjore or the city of temples, is famed for its Tanjore paintings, antiques and handicrafts, textiles and saris, Carnatic music and musical instruments, and temples. Thanjavur's rich history has shaped ancient and current south Indian civilization.
               </p>
               <p className={styles.aboutDescription}>
                 La Orchid is an elegant hotel located in the Tanjore Medical College locality of Thanjavur, Tamil Nadu. This budget-friendly popular hotel offers a variety of amenities and follows Treebo Hygiene Shield safety standards.
               </p>

               <div className={styles.aboutFeatures}>
                 <div className={styles.aboutFeature}>
                   <Check size={18} />
                   <div>
                     <h4>Complete Package</h4>
                     <p>Two banquet halls, drivers' quarters, and a restaurant</p>
                   </div>
                 </div>
                 <div className={styles.aboutFeature}>
                   <Check size={18} />
                   <div>
                     <h4>Prime Location</h4>
                     <p>Near Thanjavur Junction and New Bus Stand</p>
                   </div>
                 </div>
                 <div className={styles.aboutFeature}>
                   <Check size={18} />
                   <div>
                     <h4>Near Attractions</h4>
                     <p>Close to Tanjore Temple and Medical College</p>
                   </div>
                 </div>
                 <div className={styles.aboutFeature}>
                   <Check size={18} />
                   <div>
                     <h4>31 Rooms</h4>
                     <p>20 Maple rooms and 11 Mahogany rooms across 3 floors</p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className={styles.sectionSubtitle}>Why Us</span>
            <h2 className={styles.sectionTitle}>Why Choose La Orchid</h2>
            <p className={styles.sectionDescription}>Experience unparalleled hospitality with world-class amenities and service</p>
          </motion.div>

          <div className={styles.whyChooseGrid}>
            <motion.div className={styles.whyChooseCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
              <div className={styles.whyChooseIcon}>
                <Sparkles size={28} />
              </div>
              <h3>Premium Location</h3>
              <p>Located in the heart of Thanjavur, minutes away from Tanjore Temple and Medical College</p>
            </motion.div>

            <motion.div className={styles.whyChooseCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className={styles.whyChooseIcon}>
                <Wine size={28} />
              </div>
              <h3>Luxury Amenities</h3>
              <p>Two banquet halls, restaurant, driver quarters, and 31 well-appointed rooms</p>
            </motion.div>

            <motion.div className={styles.whyChooseCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className={styles.whyChooseIcon}>
                <Users size={28} />
              </div>
              <h3>Exceptional Service</h3>
              <p>24/7 room service, dedicated staff, and personalized attention to every guest</p>
            </motion.div>

            <motion.div className={styles.whyChooseCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className={styles.whyChooseIcon}>
                <Star size={28} />
              </div>
              <h3>Hygiene Standards</h3>
              <p>Following Treebo Hygiene Shield safety standards for your peace of mind</p>
            </motion.div>

            <motion.div className={styles.whyChooseCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className={styles.whyChooseIcon}>
                <Utensils size={28} />
              </div>
              <h3>Fine Dining</h3>
              <p>On-site restaurant serving exquisite local and international cuisine</p>
            </motion.div>

            <motion.div className={styles.whyChooseCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <div className={styles.whyChooseIcon}>
                <Check size={28} />
              </div>
              <h3>Great Value</h3>
              <p>Budget-friendly luxury with transparent pricing and no hidden charges</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
       <section className={styles.contactSection}>
         <div className={styles.container}>
           <motion.div className={styles.sectionHeader} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
             <span className={styles.sectionSubtitle}>Get in Touch</span>
             <h2 className={styles.sectionTitle}>Contact Us</h2>
             <p className={styles.sectionDescription}>We are here to assist you with any inquiries or reservations</p>
           </motion.div>

           <div className={styles.contactGrid}>
             {/* Left - Map */}
             <motion.div className={styles.mapContainer} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div className={styles.mapWrapper}>
                  <iframe
                    src="https://maps.google.com/maps?q=Door+No.+102/9/163+Medical+College+Road+Neelagiri+Thanjavur+613007+India&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="La Orchid Hotel Location"
                  />
                 <div className={styles.mapOverlay} />
               </div>
               <div className={styles.mapPin}>
                 <MapPin size={24} color="white" fill="var(--color-accent)" />
               </div>
             </motion.div>

             {/* Right - Contact Info & Form */}
             <motion.div className={styles.contactContent} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div className={styles.contactInfo}>
                 <h3 className={styles.contactBusinessName}>La Orchid Hotel</h3>

                 <div className={styles.contactDetails}>
                   <div className={styles.contactItem}>
                     <MapPin size={18} />
                      <span>Door No. 102/9/163, Medical College Road, Neelagiri, Thanjavur, India 613007</span>
                   </div>
                   <div className={styles.contactItem}>
                     <Phone size={18} />
                      <a href="tel:+919962503757">+91 99625 03757</a>
                   </div>
                   <div className={styles.contactItem}>
                     <Mail size={18} />
                      <a href="mailto:frontdesk@hotellaorchid.com">frontdesk@hotellaorchid.com</a>
                   </div>
                    <div className={styles.contactItem}>
                     <Clock size={18} />
                     <span>24/7 - Open All Days</span>
                   </div>
                 </div>
               </div>

               <form className={styles.contactForm}>
                 <div className={styles.formGroup}>
                   <input type="text" placeholder="Your Name" className={styles.formInput} required />
                 </div>
                 <div className={styles.formRow}>
                   <div className={styles.formGroup}>
                     <input type="email" placeholder="Email Address" className={styles.formInput} required />
                   </div>
                   <div className={styles.formGroup}>
                     <input type="tel" placeholder="Phone (Optional)" className={styles.formInput} />
                   </div>
                 </div>
                 <div className={styles.formGroup}>
                   <textarea placeholder="Your Message" rows={4} className={styles.formTextarea} required />
                 </div>
                 <button type="submit" className={styles.submitBtn}>
                   Send Message <ArrowRight size={16} />
                 </button>
               </form>
             </motion.div>
           </div>
         </div>
       </section>

       {/* Testimonials */}
       <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className={styles.sectionSubtitle}>Testimonials</span>
            <h2 className={styles.sectionTitle}>Guest Experiences</h2>
          </motion.div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <motion.div key={i} className={styles.testimonialCard} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className={styles.testimonialImage}><img src={t.image} alt={t.name} /></div>
                <p className={styles.testimonialText}>&quot;{t.text}&quot;</p>
                <h4 className={styles.testimonialName}>{t.name}</h4>
                <span className={styles.testimonialRole}>{t.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
