import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook
import styles from "./style.js";
import { categories } from "../../../data/categories.js";
import { doctors } from "../../../data/doctors.js";

const HomeScreen = () => {
  const navigation = useNavigation(); // Get the navigation function

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
          contentContainerStyle={styles.categoriesScroll}
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
          <TouchableOpacity
            key={doctor.id}
            style={styles.doctorCard}
            onPress={() => navigation.navigate("DoctorAppointment", { doctorId: doctor.id })} // Navigate to DoctorAppointment
          >
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
