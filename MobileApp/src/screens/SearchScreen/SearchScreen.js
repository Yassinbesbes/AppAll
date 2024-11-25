import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for icons
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import { doctors } from "../../../data/doctors.js"; // Your doctors data
import styles from './styles'; // Import the styles
import DoctorCard from "../../components/DoctorCard/DoctorCard.js"; // Import the DoctorCard component

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Use navigation hook

  const handleSearch = (text) => {
    setSearchQuery(text);

    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(text.toLowerCase()) ||
        doctor.phone.includes(text) ||
        doctor.specialty.toLowerCase().includes(text.toLowerCase()) ||
        doctor.about.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredDoctors(filtered);
  };

  const openFilterModal = () => {
    setModalVisible(true);
  };

  const closeFilterModal = () => {
    setModalVisible(false);
  };

  const applyFilter = (filterCriteria) => {
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        doctor.phone.includes(filterCriteria) ||
        doctor.specialty.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        doctor.about.toLowerCase().includes(filterCriteria.toLowerCase())
    );

    setFilteredDoctors(filtered);
    closeFilterModal();
  };

  const handleAppointmentPress = (doctorId) => {
    navigation.navigate("DoctorAppointment", {
      doctorId: doctorId,
    });
  };

  const renderDoctor = ({ item }) => (
    <DoctorCard
      key={item.id}
      doctor={item}
      onAppointmentPress={handleAppointmentPress} // Pass navigation action
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar with Icons */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, phone, specialty..."
          value={searchQuery}
          onChangeText={handleSearch}
        />

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={openFilterModal}
        >
          <FontAwesome name="filter" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Doctors List */}
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDoctor}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>No doctors found</Text>
        }
      />

      {/* Filter Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeFilterModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Doctors</Text>

            {/* Filter Options */}
            <TouchableOpacity
              style={styles.filterOption}
              onPress={() => applyFilter("Allergist")}
            >
              <Text style={styles.filterText}>Allergist</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterOption}
              onPress={() => applyFilter("+123")}
            >
              <Text style={styles.filterText}>Phone starts with +123</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterOption}
              onPress={() => applyFilter("Experienced")}
            >
              <Text style={styles.filterText}>Contains "Experienced"</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterOption}
              onPress={closeFilterModal}
            >
              <Text style={styles.filterCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SearchScreen;
