import react from 'react';
import { Typography, Grid, Container } from '@mui/material';


import kenyaSafari from '../../Images/kenya-safari.jpg';
import mountKenyaTrek from '../../Images/mtkenya.jpg';
import zanzibarBeach from '../../Images/zanzibar-beach.jpg';
import serengetiAdventure from '../../Images/serengeti-adventure.jpg';
import maasaiCulturalTour from '../../Images/maasai-cultural-tour.jpg';
import maasaiMaraSafari from "../../Images/masaimara.jpg";
import TourCard from './tourCard';
import TourCarousel from './tourCarousel';


const popularPackagesData = [
  {
    id: 1,
    title: 'Kenya Safari Expedition',
    description: `Experience the thrill of a safari in Kenya. Witness diverse wildlife and stunning landscapes. 
      Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: kenyaSafari,
    destinationName: 'Masai Mara',
    days: 7,
    activities: 8,
    places: 4,
    price: 12600,
    bookingFee: 2500,
    location: 'Northern Kenya',
    advancedFacilities: [
      'Luxury Accommodation',
      'Private Safari Guide',
      'Exclusive Safari Vehicle',
      'Gourmet Dining Options',
    ],
    tourPlan: [
      { day: 1, activity: 'Morning Safari' },
      { day: 2, activity: 'Nature Walk' },
      { day: 3, activity: 'Wildlife Photography' },
    ],
  },
  {
    id: 2,
    title: 'Mount Kenya Trek',
    description: `Embark on an adventurous trek to the summit of Mount Kenya. Enjoy breathtaking views along the way.
      Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: mountKenyaTrek,
    destinationName: 'Mount Kenya',
    days: 6,
    activities: 10,
    places: 5,
    price: 10600,
    bookingFee: 1500,
    location: 'Mt. Kenya',
    advancedFacilities: [
      'Professional Mountain Guides',
      'Camping Equipment Provided',
      'Scenic Routes',
      'High Altitude Experience',
    ],
    tourPlan: [
      { day: 1, activity: 'Trekking to Base Camp' },
      { day: 2, activity: 'Summit Day' },
      { day: 3, activity: 'Descent and Rest' },
    ],
  },
  {
    id: 3,
    title: 'Zanzibar Beach Retreat',
    description: `Relax on the pristine beaches of Zanzibar. Enjoy turquoise waters and white sandy shores.
      Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: zanzibarBeach,
    destinationName: 'Zanzibar',
    days: 5,
    activities: 6,
    places: 3,
    price: 45894,
    bookingFee: 10000,
    location: 'Zanzibar Island',
    advancedFacilities: [
      'Beachfront Accommodation',
      'Water Sports',
      'Spa and Wellness Services',
      'Local Cultural Experiences',
    ],
    tourPlan: [
      { day: 1, activity: 'Beach Relaxation' },
      { day: 2, activity: 'Snorkeling Adventure' },
      { day: 3, activity: 'Island Exploration' },
    ],
  },
  {
    id: 4,
    title: 'Serengeti Adventure',
    description: `Explore the vast landscapes of the Serengeti. Witness the annual migration of wildebeest and zebras.
      Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: serengetiAdventure,
    destinationName: 'Serengeti',
    days: 8,
    activities: 12,
    places: 6,
    price: 12654,
    bookingFee: 3500,
    location: 'Serengeti National Park',
    advancedFacilities: [
      'Guided Safari Tours',
      'Comfortable Lodges',
      'Wildlife Photography Opportunities',
      'Cultural Interactions with Local Tribes',
    ],
    tourPlan: [
      { day: 1, activity: 'Safari Game Drive' },
      { day: 2, activity: 'Balloon Safari' },
      { day: 3, activity: 'Cultural Experience' },
    ],
  },
  {
    id: 5,
    title: 'Maasai Cultural Tour',
    description: `Immerse yourself in the rich culture of the Maasai people. Experience traditional dances and rituals.
      Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: maasaiCulturalTour,
    destinationName: 'Maasai Village',
    days: 4,
    activities: 5,
    places: 2,
    price: 8760,
    bookingFee: 1500,
    location: 'Maasai Land',
    advancedFacilities: [
      'Interactive Cultural Workshops',
      'Traditional Maasai Cuisine',
      'Artisan Craft Demonstrations',
      'Local Homestay Experience',
    ],
    tourPlan: [
      { day: 1, activity: 'Cultural Welcome Ceremony' },
      { day: 2, activity: 'Traditional Dance Performance' },
      { day: 3, activity: 'Handicraft Workshop' },
    ],
  },
  {
    id: 6,
    title: 'Maasai Mara Safari',
    description: `Experience the wonders of the Maasai Mara on an unforgettable safari. Witness the Great Migration and explore Kenya's diverse wildlife.
      Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: maasaiMaraSafari,
    destinationName: 'Masai Mara',
    days: 7,
    activities: 8,
    places: 4,
    price: 14378,
    bookingFee: 2500,
    location: 'Maasai Mara National Park',
    advancedFacilities: [
      'Balloon Safaris',
      'Luxury Tented Camps',
      'Game Drives with Expert Guides',
      'Photographic Safari Opportunities',
    ],
    tourPlan: [
      { day: 1, activity: 'Game Drive in Mara' },
      { day: 2, activity: 'Visit to Maasai Village' },
      { day: 3, activity: 'Hot Air Balloon Safari' },
    ],
  },
  {
    id: 7,
    title: 'Serengeti Wildlife Safari',
    description: 'Explore the diverse wildlife of Serengeti on this thrilling safari adventure.',
    image: serengetiAdventure,
    location: 'Serengeti National Park',
    days: 6,
    activities: 10,
    places: 5,
    price: 14500,
    bookingFee: 3000,
    advancedFacilities: [
      'Luxury Accommodation',
      'Professional Safari Guide',
      'Customized Safari Vehicle',
      'Gourmet Dining Options',
    ],
    tourPlan: [
      { day: 1, activity: 'Morning Safari' },
      { day: 2, activity: 'Nature Walk' },
      { day: 3, activity: 'Wildlife Photography' },
      { day: 4, activity: 'Sundowner Experience' },
      { day: 5, activity: 'Cultural Interaction' },
      { day: 6, activity: 'Hot Air Balloon Safari' },
    ],
  },
  {
    id: 8,
    title: 'Ngorongoro Crater Exploration',
    description: 'Discover the wonders of Ngorongoro Crater, a UNESCO World Heritage Site.',
    image: mountKenyaTrek,
    location: 'Ngorongoro Conservation Area',
    days: 5,
    activities: 8,
    places: 3,
    price: 13200,
    bookingFee: 4000,
    advancedFacilities: [
      'Comfortable Accommodation',
      'Knowledgeable Tour Guide',
      'Transportation Included',
      'Cultural Experiences',
    ],
    tourPlan: [
      { day: 1, activity: 'Crater Rim Tour' },
      { day: 2, activity: 'Wildlife Spotting' },
      { day: 3, activity: 'Cultural Interaction' },
      { day: 4, activity: 'Hiking Adventure' },
      { day: 5, activity: 'Scenic Views Exploration' },
    ],
  },
  {
    id: 9,
    title: 'Zanzibar Cultural Tour',
    description: 'Immerse yourself in the rich cultural heritage of Zanzibar on this cultural tour.',
    image: zanzibarBeach,
    location: 'Zanzibar Island',
    days: 4,
    activities: 6,
    places: 2,
    price: 11800,
    bookingFee: 2000,
    advancedFacilities: [
      'Cultural Accommodation',
      'Local Tour Guide',
      'Culinary Delights',
      'Traditional Dance Performances',
    ],
    tourPlan: [
      { day: 1, activity: 'Historical Stone Town Tour' },
      { day: 2, activity: 'Spice Plantation Visit' },
      { day: 3, activity: 'Beach Relaxation' },
      { day: 4, activity: 'Cultural Workshops' },
    ],
  },

  {
    id: 10,
    title: 'Mount Kilimanjaro Trek',
    description: 'Embark on a challenging trek to the summit of Mount Kilimanjaro, the highest peak in Africa.',
    image: mountKenyaTrek,
    location: 'Mount Kilimanjaro',
    days: 8,
    activities: 12,
    places: 6,
    price: 16000,
    bookingFee: 4000,
    advancedFacilities: [
      'Base Camp Accommodation',
      'Experienced Mountain Guide',
      'Climbing Gear Provided',
      'High-Altitude Training',
    ],
    tourPlan: [
      { day: 1, activity: 'Arrival and Acclimatization' },
      { day: 2, activity: 'Machame Gate to Machame Camp' },
      { day: 3, activity: 'Machame Camp to Shira Camp' },
      { day: 4, activity: 'Shira Camp to Barranco Camp' },
      { day: 5, activity: 'Barranco Camp to Karanga Camp' },
      { day: 6, activity: 'Karanga Camp to Barafu Camp' },
      { day: 7, activity: 'Summit Day and Descent' },
      { day: 8, activity: 'Back to Base Camp and Departure' },
    ],
  },
];

const PopularPackagesSection = () => {

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#A6A8A6' }}>
      <Container maxWidth="xl">
        <Typography variant="h3" align="center" sx={{ marginBottom: '3rem', fontWeight: 800 }}>
          Most Popular Packages
        </Typography>
        <TourCarousel toursData={popularPackagesData}  numberOfRows={1}/>
      </Container>
    </section>
  )
};

export default PopularPackagesSection;
