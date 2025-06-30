import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./styles"; // Import external styles

// Sample data for hospitalizations
const hospitalizations = [
  {
    NumServ: "S001",
    CodePat: "P001",
    DateEntree: "2024-11-01",
    DateSortie: "2024-11-10",
    Frais: "500€",
  },
  {
    NumServ: "S002",
    CodePat: "P002",
    DateEntree: "2024-11-05",
    DateSortie: "2024-11-12",
    Frais: "750€",
  },
  // Add more hospitalizations as needed
];

// HospitalizationCard component to display each hospitalization
const HospitalizationCard = ({ hospitalization }) => {
  const { NumServ, CodePat, DateEntree, DateSortie, Frais } = hospitalization;

  return (
    <View style={styles.hospitalizationCard}>
      <Text style={styles.cardTitle}>Service Number: {NumServ}</Text>
      <Text style={styles.cardText}>Patient Code: {CodePat}</Text>
      <Text style={styles.cardText}>Entry Date: {DateEntree}</Text>
      <Text style={styles.cardText}>Exit Date: {DateSortie}</Text>
      <Text style={styles.cardText}>Fees: {Frais}</Text>
    </View>
  );
};

const ArticlesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.headerText}>Hospitalization Details</Text>

        {/* Hospitalizations Section */}
        <View style={styles.hospitalizationContainer}>
          {hospitalizations.length > 0 ? (
            hospitalizations.map((hospitalization, index) => (
              <HospitalizationCard
                key={index}
                hospitalization={hospitalization}
              />
            ))
          ) : (
            <Text style={styles.loadingText}>Loading hospitalizations...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticlesScreen;
