import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for icons
import styles from "./styles"; // Import your styles

const patients = [
  { CodePat: "P001", Nom: "John Doe", DateNaiss: "1980-01-01", Mutuelle: "Aetna" },
  { CodePat: "P002", Nom: "Jane Smith", DateNaiss: "1990-02-15", Mutuelle: "Blue Cross" },
  { CodePat: "P003", Nom: "Michael Johnson", DateNaiss: "1975-03-22", Mutuelle: "Cigna" },
  { CodePat: "P004", Nom: "Emily Davis", DateNaiss: "1988-07-10", Mutuelle: "UnitedHealth" },
  { CodePat: "P005", Nom: "David Brown", DateNaiss: "1995-12-05", Mutuelle: "Kaiser" },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(patients);

  const handleSearch = (text) => {
    setSearchQuery(text);

    const filtered = patients.filter(
      (patient) =>
        patient.Nom.toLowerCase().includes(text.toLowerCase()) ||
        patient.CodePat.toLowerCase().includes(text.toLowerCase()) ||
        patient.Mutuelle.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredPatients(filtered);
  };

  const handlePatientDetails = (patient) => {
    Alert.alert(
      "Patient Details",
      `Code: ${patient.CodePat}\nName: ${patient.Nom}\nDate of Birth: ${patient.DateNaiss}\nMutuelle: ${patient.Mutuelle}`
    );
  };

  const renderPatient = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.cardContent}
        onPress={() => handlePatientDetails(item)}
      >
        <Text style={styles.cardTitle}>{item.Nom}</Text>
        <Text style={styles.cardSubtitle}>Code: {item.CodePat}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, code, or mutuelle..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FontAwesome name="search" size={20} color="#666" style={styles.icon} />
      </View>

      {/* Patient List */}
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.CodePat}
        renderItem={renderPatient}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>No patients found</Text>
        }
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
