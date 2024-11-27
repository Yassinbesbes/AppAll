import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook
import axios from "axios"; // Import axios for making HTTP requests
import styles from "./style.js";
import NotificationSystem from "../../components/NotificationSystem/NotificationSystem.js"; // Import NotificationSystem
import DoctorCard from "../../components/DoctorCard/DoctorCard.js"; // Import DoctorCard

const HomeScreen = () => {
  const navigation = useNavigation(); // Get the navigation function
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]); // State to store doctors data
  const [categories, setCategories] = useState([]); // State to store categories
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch doctors and categories data from the API
  useEffect(() => {
    // Fetch doctors data
    axios
      .get("http://192.168.1.12:9000/api/doctors") // API URL for doctors
      .then((response) => {
        setDoctors(response.data); // Set doctors data
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError("Error fetching doctors data");
        setLoading(false);
      });

    // Fetch categories data
    axios
      .get("http://192.168.1.12:9000/api/categories") // API URL for categories
      .then((response) => {
        setCategories(response.data); // Set categories data
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError("Error fetching categories data");
        setLoading(false);
      });
  }, []); // Empty dependency array to fetch data only on mount

  const handleSearchNavigate = () => {
    navigation.navigate("SearchScreen", { query: searchQuery }); // Pass the query
  };

  const handleAppointmentPress = (doctorId) => {
    navigation.navigate("DoctorAppointment", {
      doctorId: doctorId,
    });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.menuButton}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </TouchableOpacity>
          <NotificationSystem />
        </View>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#A0A0A0" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search health issue..."
            placeholderTextColor="#A0A0A0"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={handleSearchNavigate} // Navigate to SearchScreen on focus
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
          <DoctorCard
            key={doctor.id}
            doctor={doctor} // Passing dynamic doctor data
            onAppointmentPress={handleAppointmentPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
