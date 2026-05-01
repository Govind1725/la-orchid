'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, Calendar, Sparkles, Phone, Quote } from 'lucide-react';
import styles from './page.module.css';

const menuCategories = [
  {
    id: 'soup',
    name: 'SOUPS',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    items: [
      { name: 'Attu Elumbu Soup', description: 'Traditional bone marrow soup', price: 120, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80', badge: 'AUTHENTIC' },
      { name: 'Nattukozhi Rasam', description: 'Spicy country chicken rasam', price: 120, image: 'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=600&q=80' },
      { name: 'Nandu Rasam', description: 'Crab meat rasam', price: 120, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80' },
      { name: 'Manchow Soup Veg', description: 'Vegetable soup with noodles', price: 90, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80' },
      { name: 'Manchow Soup Chicken', description: 'Rich chicken soup', price: 120, image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=600&q=80', badge: 'POPULAR' },
      { name: 'Sweetcorn Soup', description: 'Creamy sweetcorn', price: 90, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80' },
      { name: 'Cream of Mushroom', description: 'Velvety mushroom', price: 110, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
      { name: 'Cream of Chicken', description: 'Smooth chicken soup', price: 120, image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=600&q=80', badge: "CHEF'S PICK" },
    ],
  },
  {
    id: 'vegstarter',
    name: 'VEG STARTER',
    image: 'https://images.unsplash.com/photo-1562967960-f55495a8899b?w=600&q=80',
    items: [
      { name: 'Gobi 65', description: 'Crispy cauliflower', price: 150, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80', badge: 'POPULAR' },
      { name: 'Paneer 65', description: 'Soft paneer cubes', price: 180, image: 'https://images.unsplash.com/photo-1562967960-f55495a8899b?w=600&q=80' },
      { name: 'Mushroom 65', description: 'Juicy mushrooms', price: 150, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
      { name: 'Babycorn 65', description: 'Crispy babycorn', price: 150, image: 'https://images.unsplash.com/photo-1562967960-f55495a8899b?w=600&q=80' },
      { name: 'Veg Manchurian', description: 'Veggie balls in sauce', price: 150, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
      { name: 'Honey Chilly', description: 'Sweet & spicy', price: 150, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
      { name: 'Kathi Roll', description: 'Spiced veg in paratha', price: 150, image: 'https://images.unsplash.com/photo-1562967960-f55495a8899b?w=600&q=80' },
      { name: 'Gold Jaipur', description: 'Premium paneer dish', price: 180, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', badge: "CHEF'S PICK" },
    ],
  },
  {
    id: 'chicken',
    name: 'CHICKEN',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    items: [
      { name: 'Chicken 65', description: 'Crispy spicy chicken', price: 220, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80', badge: 'POPULAR' },
      { name: 'Chicken Chinthamani', description: 'Extremely spicy', price: 220, image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=600&q=80', badge: 'SPICY' },
      { name: 'Dragon Chicken', description: 'Red spicy chicken', price: 235, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80' },
      { name: 'Chicken Lolly Pop', description: 'Chicken wings', price: 220, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
      { name: 'Chicken Chettinadu', description: 'Spicy Chettinadu', price: 220, image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=600&q=80', badge: 'AUTHENTIC' },
      { name: 'Kur Kure Chicken', description: 'Crispy chicken bites', price: 280, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
      { name: 'Chicken Manchurian', description: 'Indo-Chinese', price: 220, image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=600&q=80' },
      { name: 'Chilli Chicken', description: 'Spicy chili chicken', price: 220, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
    ],
  },
  {
    id: 'seafood',
    name: 'SEAFOOD',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80',
    items: [
      { name: 'Vanjaram Fish Fry', description: 'Seer fish tawa fry', price: 325, image: 'https://images.unsplash.com/photo-1534760985764-75fcb0c12a4f?w=600&q=80', badge: 'POPULAR' },
      { name: 'Prawn 65', description: 'Crispy prawn', price: 280, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80' },
      { name: 'Chilly Prawn', description: 'Spicy prawns', price: 290, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80' },
      { name: 'Crab Masala', description: 'Spicy crab', price: 320, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80' },
      { name: 'Fish Kolivada', description: 'Fish cutlet', price: 250, image: 'https://images.unsplash.com/photo-1534760985764-75fcb0c12a4f?w=600&q=80' },
      { name: 'Meen Polichathu', description: 'Banana leaf fish', price: 350, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80', badge: "CHEF'S PICK" },
      { name: 'Golden Fried Prawn', description: 'Crispy prawns', price: 285, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80' },
      { name: 'Nandu Omelette', description: 'Crab omelette', price: 275, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80' },
    ],
  },
];

const diningSpaces = [
  {
    id: 'family',
    name: 'Family Dining',
    description: 'Warm and inviting space perfect for family gatherings',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_14_.jpg',
    capacity: 'Up to 12 guests',
  },
  {
    id: 'private',
    name: 'Private Dining',
    description: 'Exclusive room for intimate celebrations and business dinners',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_12_.jpg',
    capacity: 'Up to 8 guests',
  },
  {
    id: 'rooftop',
    name: 'Rooftop Dining',
    description: 'Al fresco dining with stunning city skyline views',
    image: 'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_8_.jpg',
    capacity: 'Up to 20 guests',
  },
];

const ambienceImages = [
  'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_14_.jpg',
  'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_12_.jpg',
  'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_8_.jpg',
  'https://cs-images.treebo.com/Treebo_Tryst_La_Orchid/common/Common_13_.jpg',
];

const restaurantTestimonials = [
  {
    name: 'David Park',
    role: 'Food Critic',
    text: 'An unparalleled dining experience. Every dish is a masterpiece.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Sophie Laurent',
    role: 'Regular Guest',
    text: 'The finest restaurant in the city. The rooftop dining is magical.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
];

export default function RestaurantPage() {
  const [activeCategory, setActiveCategory] = useState('soup');

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
            Culinary Excellence
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            FINE DINING
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Indulge in a gastronomic journey crafted by world-renowned chefs
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.introContent}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionSubtitle}>The Experience</span>
            <h2 className={styles.sectionTitle}>A Culinary Journey</h2>
            <p className={styles.introText}>
              At La Orchid, dining transcends mere nourishment. Our award-winning chefs craft each dish 
              as a work of art, using only the finest seasonal ingredients sourced from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className={styles.menuSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionSubtitle}>Our Menu</span>
            <h2 className={styles.sectionTitle}>Signature Dishes</h2>
          </motion.div>

          <div className={styles.menuTabs}>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`${styles.menuTab} ${activeCategory === category.id ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className={styles.menuContent}>
            {menuCategories.map((category) => (
              <motion.div
                key={category.id}
                className={`${styles.menuCategory} ${activeCategory === category.id ? styles.activeCategory : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeCategory === category.id ? 1 : 0, y: activeCategory === category.id ? 0 : 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.menuCardsWrapper}>
                  <div className={styles.menuCards}>
                    {category.items.map((item: any, index) => (
                      <motion.div
                        key={index}
                        className={styles.itemCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <div className={styles.itemImageWrapper}>
                          <img src={item.image} alt={item.name} className={styles.itemImage} />
                          {item.badge && <span className={styles.itemBadge}>{item.badge}</span>}
                        </div>
                        <div className={styles.itemContent}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          <p className={styles.itemDescription}>{item.description}</p>
                          <div className={styles.itemFooter}>
                            <span className={styles.itemPrice}>₹{item.price}</span>
                            <button className={styles.orderBtn}>Select</button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Spaces */}
      <section className={styles.spacesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionSubtitle}>Private Spaces</span>
            <h2 className={styles.sectionTitle}>Dining Experiences</h2>
          </motion.div>

          <div className={styles.spacesGrid}>
            {diningSpaces.map((space, index) => (
              <motion.div
                key={space.id}
                className={styles.spaceCard}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className={styles.spaceImageWrapper}>
                  <img src={space.image} alt={space.name} className={styles.spaceImage} />
                  <div className={styles.spaceOverlay} />
                </div>
                <div className={styles.spaceContent}>
                  <h3 className={styles.spaceName}>{space.name}</h3>
                  <p className={styles.spaceDescription}>{space.description}</p>
                  <div className={styles.spaceMeta}>
                    <Users size={16} />
                    <span>{space.capacity}</span>
                  </div>
                  <div className={styles.spaceLink}>
                    Reserve Now <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground} />
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionSubtitle}>Reserve Your Table</span>
            <h2 className={styles.ctaTitle}>Book Your Dining Experience</h2>
            <p className={styles.ctaText}>
              Secure your table for an unforgettable culinary journey.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <Calendar size={18} />
                Reserve Now
              </button>
              <button className={styles.secondaryBtn}>
                <Phone size={18} />
                Call Restaurant
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
            {restaurantTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Quote className={styles.quoteIcon} />
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
