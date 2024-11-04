import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./style.js";

const HomeScreen = () => {
  const categories = [
    { id: 1, name: "All", icon: "🟢" },
    { id: 2, name: "Cardiology", icon: "❤️" },
    { id: 3, name: "Medicine", icon: "💊" },
    { id: 4, name: "General", icon: "🏥" },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Maria Waston",
      specialty: "Heart Surgeon, London, England",
      image: require("../../../assets/icon.png"),
      rating: 4.8,
      isOnline: true,
    },
    {
      id: 2,
      name: "Dr. Stevi Jessi",
      specialty: "General Dentist",
      image: require("../../../assets/icon.png"), // You'll need to add these images
      rating: 4.8,
      isOnline: true,
    },
    {
      id: 3,
      name: "Dr. Stevi Jessi",
      specialty: "General Dentist",
      image: require("../../../assets/icon.png"), // You'll need to add these images
      rating: 4.8,
      isOnline: true,
    },
    {
      id: 4,
      name: "Dr. Stevi Jessi",
      specialty: "General Dentist",
      image: require("../../../assets/icon.png"), // You'll need to add these images
      rating: 4.8,
      isOnline: true,
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.menuButton}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>
        {/* <Image
          source={require('../../../assets/icon.png')} // Add your profile image
          style={styles.profileImage}
        /> */}
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#A0A0A0" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search health issue......"
            placeholderTextColor="#A0A0A0"
          />
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Doctors List */}
      <ScrollView style={styles.doctorsList}>
        {doctors.map((doctor) => (
          <TouchableOpacity key={doctor.id} style={styles.doctorCard}>
            <View style={styles.doctorInfo}>
              <View>
                <Image source={doctor.image} style={styles.doctorImage} />
                {doctor.isOnline && <View style={styles.onlineIndicator} />}
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingIcon}>⭐</Text>
                  <Text style={styles.ratingText}>{doctor.rating}</Text>
                </View>
              </View>

              <View style={styles.doctorDetails}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
                <TouchableOpacity style={styles.appointmentButton}>
                  <Text style={styles.appointmentButtonText}>Appointment</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
