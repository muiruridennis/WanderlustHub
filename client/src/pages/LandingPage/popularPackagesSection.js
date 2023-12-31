import react from 'react';
import {Typography, Grid, Container} from '@mui/material';


import kenyaSafari from '../../Images/kenya-safari.jpg';
import mountKenyaTrek from '../../Images/mtkenya.jpg';
import zanzibarBeach from '../../Images/zanzibar-beach.jpg';
import serengetiAdventure from '../../Images/serengeti-adventure.jpg';
import maasaiCulturalTour from '../../Images/maasai-cultural-tour.jpg';
import maasaiMaraSafari from "../../Images/masaimara.jpg";
import TourCard from './tourCard';

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
    price: "ksh 12600",
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
    price: "ksh 12600",
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
    price: "ksh 12600",
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
    price: "ksh 12600",
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
    price: "ksh 12600",
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
    price: "ksh 12600",
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
];

const PopularPackagesSection = () => {
 
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#A6A8A6' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ marginBottom: '3rem', fontWeight: 800 }}>
          Most Popular Packages
        </Typography>

        <Grid container spacing={3}>
          {popularPackagesData.map((tourPackage, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TourCard tourPackage={tourPackage}  />
            </Grid>
          ))}
        </Grid>

      </Container>
    </section>
  )
};

export default PopularPackagesSection;
