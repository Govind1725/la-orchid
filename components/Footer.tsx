'use client';

import { Mail, Phone, MapPin, Star } from 'lucide-react';
import styles from './Footer.module.css';

const SocialIcons = () => (
  <div className={styles.socialLinks}>
    <a href="#" className={styles.socialLink}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    </a>
    <a href="#" className={styles.socialLink}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    </a>
    <a href="#" className={styles.socialLink}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.5-1.5 24.12 24.12 0 0 1 10 0 2 2 0 0 1 1.5 1.5 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.5 1.5 24.12 24.12 0 0 1-10 0A2 2 0 0 1 2.5 17z"/><path d="m10 15-3.6 1.5L10 15"/><path d="m14 9 3.6-1.5L14 9"/><path d="m14 15-3.6-6L14 15"/><path d="m10 9 3.6 1.5L10 9"/></svg>
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Star className={styles.star} />
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>La Orchid</span>
                <span className={styles.logoTagline}>Feel the Bless</span>
              </div>
            </div>
            <p className={styles.description}>
              Experience the pinnacle of luxury hospitality where every moment becomes a cherished memory.
            </p>
            <SocialIcons />
          </div>

          <div className={styles.quickLinks}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><a href="/">Home</a></li>
              <li><a href="/hotel">Hotel</a></li>
              <li><a href="/restaurant">Restaurant</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.services}>
            <h3 className={styles.sectionTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Luxury Rooms</a></li>
              <li><a href="#">Fine Dining</a></li>
              <li><a href="#">Spa & Wellness</a></li>
              <li><a href="#">Event Spaces</a></li>
              <li><a href="#">Concierge</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <MapPin className={styles.contactIcon} />
            <span>123 Luxury Avenue, Premium District, City 00000</span>
          </div>
          <div className={styles.contactItem}>
            <Phone className={styles.contactIcon} />
            <span>+1 234 567 890</span>
          </div>
          <div className={styles.contactItem}>
            <Mail className={styles.contactIcon} />
            <span>reservations@laorchid.com</span>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 2026 La Orchid. All rights reserved. Crafted with elegance.</p>
        </div>
      </div>
    </footer>
  );
}