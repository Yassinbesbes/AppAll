export const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Allergist",
    image: { uri: "https://randomuser.me/api/portraits/men/1.jpg" },
    rating: 4.8,
    isOnline: true,
    email: "johndoe@example.com",
    phone: "+1234567890",
    accountCreated: "2023-01-15",
    stats: {
      patients: "400+",
      experience: "12+",
      reviews: "350+",
    },
    about:
      "Dr. John Doe is a seasoned allergist with over 12 years of experience in treating a wide range of allergies. His compassionate care and expert advice have earned him a loyal patient base.",
    categoryId: 3, // Seasonal Allergies
  },
  {
    id: 2,
    name: "Dr. Emma Smith",
    specialty: "Immunologist",
    image: { uri: "https://randomuser.me/api/portraits/women/2.jpg" },
    rating: 4.8,
    isOnline: true,
    email: "emmasmith@example.com",
    phone: "+1987654321",
    accountCreated: "2023-02-10",
    stats: {
      patients: "300+",
      experience: "10+",
      reviews: "290+",
    },
    about:
      "Dr. Emma Smith is an immunologist specializing in autoimmune diseases and allergy-related conditions. She uses advanced treatments to help her patients manage their health effectively.",
    categoryId: 5, // Drug Allergies
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    specialty: "Pulmonologist",
    image: { uri: "https://randomuser.me/api/portraits/men/3.jpg" },
    rating: 4.8,
    isOnline: true,
    email: "michaeljohnson@example.com",
    phone: "+1543219876",
    accountCreated: "2023-03-05",
    stats: {
      patients: "500+",
      experience: "15+",
      reviews: "400+",
    },
    about:
      "Dr. Michael Johnson is a pulmonologist with over 15 years of experience. He treats a variety of respiratory issues, including asthma, COPD, and respiratory allergies.",
    categoryId: 7, // Respiratory Allergies
  },
  {
    id: 4,
    name: "Dr. Sophia Brown",
    specialty: "Pediatric Allergist",
    image: { uri: "https://randomuser.me/api/portraits/women/4.jpg" },
    rating: 4.8,
    isOnline: true,
    email: "sophiabrown@example.com",
    phone: "+1478523690",
    accountCreated: "2023-04-20",
    stats: {
      patients: "350+",
      experience: "8+",
      reviews: "310+",
    },
    about:
      "Dr. Sophia Brown specializes in pediatric allergies, providing specialized care to children suffering from various allergies, ensuring their comfort and health.",
    categoryId: 3, // Seasonal Allergies
  },
  {
    id: 5,
    name: "Dr. William Garcia",
    specialty: "Dermatologist (Allergy-Related)",
    image: { uri: "https://randomuser.me/api/portraits/men/5.jpg" },
    rating: 4.8,
    isOnline: true,
    email: "williamgarcia@example.com",
    phone: "+1122334455",
    accountCreated: "2023-05-12",
    stats: {
      patients: "450+",
      experience: "14+",
      reviews: "370+",
    },
    about:
      "Dr. William Garcia is a dermatologist who specializes in treating skin allergies. His expertise in managing allergic reactions has helped countless patients feel comfortable in their skin.",
    categoryId: 6, // Skin Allergies
  },
  {
    id: 6,
    name: "Dr. Olivia Davis",
    specialty: "Otolaryngologist (ENT Allergy)",
    image: { uri: "https://randomuser.me/api/portraits/women/6.jpg" },
    rating: 4.8,
    isOnline: false,
    email: "oliviadavis@example.com",
    phone: "+1321456789",
    accountCreated: "2023-06-01",
    stats: {
      patients: "250+",
      experience: "6+",
      reviews: "200+",
    },
    about:
      "Dr. Olivia Davis is an otolaryngologist who treats allergies affecting the ears, nose, and throat. She has a proven track record of helping patients with chronic nasal issues and throat allergies.",
    categoryId: 7, // Respiratory Allergies
  },
  {
    id: 7,
    name: "Dr. James Martinez",
    specialty: "Rheumatologist (Autoimmune Allergy)",
    image: { uri: "https://randomuser.me/api/portraits/men/7.jpg" },
    rating: 4.8,
    isOnline: false,
    email: "jamesmartinez@example.com",
    phone: "+1765432198",
    accountCreated: "2023-07-18",
    stats: {
      patients: "320+",
      experience: "9+",
      reviews: "260+",
    },
    about:
      "Dr. James Martinez specializes in autoimmune disorders related to allergies. He focuses on treating and managing symptoms of conditions like rheumatoid arthritis and lupus.",
    categoryId: 5, // Drug Allergies
  },
];

export const categories = [
  { id: 1, name: "All", icon: "🟢" },
  { id: 2, name: "Food Allg", icon: "🍎" },
  { id: 3, name: "Seasonal Allg", icon: "🌸" },
  { id: 4, name: "Pet Allg", icon: "🐱" },
  { id: 5, name: "Drug Allg", icon: "💊" },
  { id: 6, name: "Skin Allg", icon: "🦠" },
  { id: 7, name: "Respiratory Allg", icon: "🌬️" },
];
