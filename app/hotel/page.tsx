'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Waves, Coffee, Utensils, Sparkles, Car, UserCheck, Clock, Star, Check, Play, Eye } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

const rooms = [
  {
    id: 'deluxe',
    name: 'Standard Room',
    type: 'Standard',
    price: 4000,
    size: '25 sqm',
    guests: 2,
    description: 'Elegant comfort with all essential amenities, featuring contemporary design for a comfortable and memorable stay.',
    features: ['City View', 'King Bed', 'Rain Shower', 'Work Desk', 'Mini Bar', 'Safe'],
    images: [
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAPLE/Maple_31_.jpg',
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAPLE/Maple_9_.jpg',
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAPLE/Maple_34_.jpg',
    ],
  },
  {
    id: 'executive',
    name: 'Executive Room',
    type: 'Executive',
    price: 4500,
    size: '35 sqm',
    guests: 2,
    description: 'Sophisticated luxury for the discerning traveler, with expanded living space and premium amenities for a refined experience.',
    features: ['King Bed', 'Bathtub', 'Living Area', 'Premium Bar', 'Complimentary Breakfast', 'Work Station'],
    images: [
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAHOGANY/Mahogany_1_.jpg',
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAHOGANY/Mahogany_2_.jpg',
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/MAHOGANY/Mahogany_5_.jpg',
    ],
  },
  {
    id: 'suite',
    name: 'Suite Room',
    type: 'Suite',
    price: 6000,
    size: '45 sqm',
    guests: 3,
    description: 'Ultimate indulgence with separate living and dining areas, and dedicated butler service for an unparalleled experience.',
    features: ['Balcony', 'Dining Area', 'Butler Service', 'Jacuzzi', 'Kitchenette', 'Private Terrace'],
    images: [
      '/suite_room.jpg',
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/OAK/Oak_20_.jpg',
      'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/OAK/Oak_25_.jpg',
    ],
  },
];

const hotelServices = [
  { icon: Sparkles, title: 'Luxury Spa', description: 'World-class wellness treatments' },
  { icon: Waves, title: 'Infinity Pool', description: 'Heated outdoor pool & jacuzzi' },
  { icon: Wifi, title: 'High-Speed WiFi', description: 'Complimentary throughout' },
  { icon: Coffee, title: 'Room Service', description: '24/7 in-room dining' },
  { icon: Utensils, title: 'Fine Dining', description: 'Award-winning restaurant' },
  { icon: Car, title: 'Valet Parking', description: 'Premium concierge service' },
];

const hotelTestimonials = [
  {
    name: 'Guest',
    role: 'Verified Guest',
    text: 'Excellent stay. Comfortable clean room. Room service deserves mention as the food was very tasty.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'P',
    role: 'Frequent Traveler',
    text: 'The property has been my default choice. Maintenance of the rooms is a big plus in addition to prompt service. A highly recommendable property.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Kalyanam',
    role: 'Verified Guest',
    text: 'Neat and clean, well maintained hotel as well as restaurant. Staff all are so humble. Location wise also good.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Chandrakant',
    role: 'Verified Guest',
    text: 'Good rooms. Service is quick.',
    image: 'https://images.unsplash.com/photo-1500648767791-00bcc44559d9?w=200&q=80',
  },
  {
    name: 'M A',
    role: 'Verified Guest',
    text: 'Beautifully kept facility.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
];

export default function HotelPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="/hero-hotel.jpg"
            alt="Hotel La Orchid"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <motion.span
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Accommodations
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            LUXURY ROOMS & SUITES
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover meticulously designed spaces where every detail reflects the pinnacle of refined living
          </motion.p>
        </div>
      </section>

      {/* Room Categories */}
      <section className={styles.roomsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Our Rooms</span>
            <h2 className={styles.sectionTitle}>Accommodations</h2>
            <p className={styles.sectionDescription}>
              Experience unparalleled comfort in our meticulously appointed rooms and suites
            </p>
          </div>

          <div className={styles.roomGrid}>
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                className={styles.roomCard}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className={styles.roomImageWrapper}>
                  <img src={room.images[0]} alt={room.name} className={styles.roomImage} />
                  <div className={styles.roomOverlay} />
                  <span className={styles.roomType}>{room.type}</span>
                </div>
                <div className={styles.roomContent}>
                  <div className={styles.roomHeader}>
                    <h3 className={styles.roomName}>{room.name}</h3>
                    <div className={styles.roomPrice}>
                      <span className={styles.priceAmount}>₹{room.price}</span>
                      <span className={styles.priceUnit}>/night</span>
                    </div>
                  </div>
                  <p className={styles.roomDescription}>{room.description}</p>
                  <div className={styles.roomMeta}>
                    <span><UserCheck size={16} /> {room.guests} Guests</span>
                    <span><Clock size={16} /> {room.size}</span>
                  </div>
                  <div className={styles.roomFeatures}>
                    {room.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                  <Link href="/#book" className={styles.viewRoomBtn}>
                    Book Now <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Services */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionSubtitle}>Amenities</span>
            <h2 className={styles.sectionTitle}>Hotel Services</h2>
          </motion.div>

          <div className={styles.servicesGrid}>
            {hotelServices.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={styles.serviceIcon}>
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className={styles.virtualTourSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionSubtitle}>Experience</span>
            <h2 className={styles.sectionTitle}>Virtual Tour</h2>
            <p className={styles.sectionDescription}>
              Explore our stunning spaces with an immersive 360° virtual experience
            </p>
          </motion.div>

          <div className={styles.virtualTourGrid}>
            {[
              { title: 'Grand Lobby', image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_1_.jpg' },
              { title: 'Oak Room', image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/OAK/Oak_24_.jpg' },
              { title: 'Banquet Hall', image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_6_.jpg' },
              { title: 'Dining Area', image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_14_.jpg' },
            ].map((space, index) => (
              <motion.div
                key={index}
                className={styles.tourCard}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className={styles.tourImageWrapper}>
                  <img src={space.image} alt={space.title} className={styles.tourImage} />
                  <div className={styles.tourOverlay}>
                    <div className={styles.playButton}>
                      <Play size={32} />
                    </div>
                  </div>
                </div>
                <div className={styles.tourContent}>
                  <Eye size={18} />
                  <span>{space.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionSubtitle}>Testimonials</span>
            <h2 className={styles.sectionTitle}>Guest Experiences</h2>
          </motion.div>

          <div className={styles.testimonialsGrid}>
            {hotelTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={styles.testimonialImage}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#2BBCCC" color="#2BBCCC" />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>&quot;{testimonial.text}&quot;</p>
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <span className={styles.testimonialRole}>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
