import { notFound } from 'next/navigation';
import { ArrowLeft, Check, UserCheck, Clock, Star, Wifi, Waves, Coffee, Utensils, Sparkles, Car, Eye } from 'lucide-react';
import Link from 'next/link';
import styles from '../page.module.css';

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    type: 'Deluxe',
    price: 250,
    size: '45 sqm',
    guests: 2,
    description: 'Elegant comfort with panoramic city views, featuring contemporary design and premium amenities for a memorable stay.',
    longDescription: 'Experience the perfect blend of elegance and comfort in our Deluxe Room. With panoramic city views and contemporary design, this room offers a sophisticated retreat for discerning travelers. Each detail has been carefully curated to ensure your stay is nothing short of exceptional.',
    features: ['City View', 'King Bed', 'Rain Shower', 'Work Desk', 'Mini Bar', 'Safe', 'Premium Toiletries', '24/7 Room Service', 'Smart TV', 'Blackout Curtains'],
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Coffee, label: 'Coffee Maker' },
      { icon: UserCheck, label: 'Butler Service' },
      { icon: Sparkles, label: 'Daily Housekeeping' },
    ],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    ],
  },
  {
    id: 'executive',
    name: 'Executive Room',
    type: 'Executive',
    price: 380,
    size: '65 sqm',
    guests: 2,
    description: 'Sophisticated luxury for the discerning traveler, with expanded living space and exclusive executive lounge access.',
    longDescription: 'Elevate your stay in our Executive Room, designed for the sophisticated traveler. Enjoy expanded living space, exclusive executive lounge access, and premium amenities. This room combines luxury with functionality, perfect for both business and leisure travelers.',
    features: ['Lounge Access', 'King Bed', 'Bathtub', 'Living Area', 'Butler Service', 'Premium Bar', 'Work Station', 'Meeting Table', 'Executive Lounge', 'Complimentary Breakfast'],
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Coffee, label: 'Espresso Machine' },
      { icon: UserCheck, label: 'Butler Service' },
      { icon: Sparkles, label: 'Turndown Service' },
    ],
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    ],
  },
  {
    id: 'suite',
    name: 'Suite Room',
    type: 'Suite',
    price: 550,
    size: '95 sqm',
    guests: 3,
    description: 'Ultimate indulgence with separate living and dining areas, private balcony, and dedicated butler service for an unparalleled experience.',
    longDescription: 'Indulge in the ultimate luxury experience in our Suite Room. With separate living and dining areas, a private balcony, and dedicated butler service, this suite offers an unparalleled experience of opulence. Perfect for those seeking the very best in hospitality.',
    features: ['Balcony', 'Dining Area', 'Butler Service', 'Jacuzzi', 'Kitchenette', 'Grand Piano', 'Private Terrace', 'Walk-in Closet', 'Fireplace', 'Personal Chef Available'],
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Coffee, label: 'Premium Coffee' },
      { icon: UserCheck, label: '24/7 Butler' },
      { icon: Waves, label: 'Jacuzzi Access' },
    ],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
    ],
  },
];

export default async function RoomDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const room = rooms.find((r) => r.id === resolvedParams.id);

  if (!room) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <section className={styles.breadcrumbSection}>
        <div className={styles.container}>
          <Link href="/hotel" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Rooms
          </Link>
        </div>
      </section>

      {/* Room Hero */}
      <section className={styles.roomHero}>
        <div className={styles.roomHeroGrid}>
          <div className={styles.roomHeroMain}>
            <img src={room.images[0]} alt={room.name} className={styles.roomHeroImage} />
          </div>
          <div className={styles.roomHeroSide}>
            <img src={room.images[1]} alt={room.name} className={styles.roomHeroThumb} />
            <img src={room.images[2]} alt={room.name} className={styles.roomHeroThumb} />
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className={styles.roomDetailsSection}>
        <div className={styles.container}>
          <div className={styles.roomDetailsGrid}>
            <div className={styles.roomDetailsContent}>
              <span className={styles.roomTag}>{room.type}</span>
              <h1 className={styles.roomDetailTitle}>{room.name}</h1>
              <p className={styles.roomDetailDescription}>{room.longDescription}</p>

              <div className={styles.roomInfoCards}>
                <div className={styles.infoCard}>
                  <UserCheck size={24} />
                  <span>Up to {room.guests} Guests</span>
                </div>
                <div className={styles.infoCard}>
                  <Clock size={24} />
                  <span>{room.size}</span>
                </div>
                <div className={styles.infoCard}>
                  <Star size={24} />
                  <span>Premium Rating</span>
                </div>
              </div>

              <div className={styles.amenitiesSection}>
                <h3>Room Amenities</h3>
                <div className={styles.amenitiesGrid}>
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className={styles.amenityItem}>
                      <amenity.icon size={20} />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.featuresSection}>
                <h3>All Features</h3>
                <div className={styles.featuresGrid}>
                  {room.features.map((feature, i) => (
                    <span key={i} className={styles.featureItem}>
                      <Check size={16} /> {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.roomBookingCard}>
              <div className={styles.bookingHeader}>
                <div className={styles.priceInfo}>
                  <span className={styles.priceAmount}>${room.price}</span>
                  <span className={styles.priceUnit}>/night</span>
                </div>
                <div className={styles.bookingRating}>
                  <Star size={16} fill="#2BBCCC" color="#2BBCCC" />
                  <span>4.8 (120 reviews)</span>
                </div>
              </div>
              <button className={styles.bookBtn}>Book Now</button>
              <div className={styles.bookingFeatures}>
                <span><Check size={14} /> Free cancellation</span>
                <span><Check size={14} /> No booking fees</span>
                <span><Check size={14} /> Instant confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
