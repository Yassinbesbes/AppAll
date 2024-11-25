import React, { useState } from "react";
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
import styles from "./style.js";
import { categories } from "../../../data/categories.js";
import { doctors } from "../../../data/doctors.js";
import NotificationSystem from "../../components/NotificationSystem/NotificationSystem.js"; // Import the NotificationSystem component
import DoctorCard from "../../components/DoctorCard/DoctorCard.js"; // Import the DoctorCard component

const HomeScreen = () => {
  const navigation = useNavigation(); // Get the navigation function
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchNavigate = () => {
    navigation.navigate("SearchScreen", { query: searchQuery }); // Pass the query
  };

  const handleAppointmentPress = (doctorId) => {
    navigation.navigate("DoctorAppointment", {
      doctorId: doctorId,
    });
  };

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
          {/* Replace with NotificationSystem */}
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
            doctor={doctor}
            onAppointmentPress={handleAppointmentPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
