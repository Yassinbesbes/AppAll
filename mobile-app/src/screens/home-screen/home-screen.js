import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./style.js";

const initialPatients = [
  { CodePat: "P001", Nom: "John Doe", DateNaiss: "1980-01-01", Mutuelle: "Aetna" },
  { CodePat: "P002", Nom: "Jane Smith", DateNaiss: "1990-02-15", Mutuelle: "Blue Cross" },
  { CodePat: "P003", Nom: "Michael Johnson", DateNaiss: "1975-03-22", Mutuelle: "Cigna" },
  { CodePat: "P004", Nom: "Emily Davis", DateNaiss: "1988-07-10", Mutuelle: "UnitedHealth" },
  { CodePat: "P005", Nom: "David Brown", DateNaiss: "1995-12-05", Mutuelle: "Kaiser" },
];

const HomeScreen = () => {
  const [patientList, setPatientList] = useState(initialPatients);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);
  const [newPatient, setNewPatient] = useState({
    CodePat: "",
    Nom: "",
    DateNaiss: "",
    Mutuelle: "",
  });

  // Function to handle patient details
  const handlePatientDetails = (patient) => {
    Alert.alert(
      "Patient Details",
      `Code: ${patient.CodePat}\nName: ${patient.Nom}\nDate of Birth: ${patient.DateNaiss}\nMutuelle: ${patient.Mutuelle}`,
      [{ text: "OK" }]
    );
  };

  // Function to delete a patient
  const handleDeletePatient = (CodePat) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this patient?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setPatientList((prevList) =>
              prevList.filter((patient) => patient.CodePat !== CodePat)
            );
          },
        },
      ]
    );
  };

  // Function to save or update a patient
  const handleSavePatient = () => {
    if (!newPatient.CodePat || !newPatient.Nom || !newPatient.DateNaiss || !newPatient.Mutuelle) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (editingPatient) {
      setPatientList((prevList) =>
        prevList.map((patient) =>
          patient.CodePat === editingPatient.CodePat ? newPatient : patient
        )
      );
    } else {
      setPatientList((prevList) => [...prevList, newPatient]);
    }

    setModalVisible(false);
    setEditingPatient(null);
    setNewPatient({ CodePat: "", Nom: "", DateNaiss: "", Mutuelle: "" });
  };

  // Open the modal for adding or editing
  const handleEditPatient = (patient) => {
    setEditingPatient(patient);
    setNewPatient(patient);
    setModalVisible(true);
  };

  // Modal to add/edit patient
  const renderPatientModal = () => (
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {editingPatient ? "Edit Patient" : "Add New Patient"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="CodePat"
            value={newPatient.CodePat}
            onChangeText={(text) => setNewPatient({ ...newPatient, CodePat: text })}
            editable={!editingPatient}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newPatient.Nom}
            onChangeText={(text) => setNewPatient({ ...newPatient, Nom: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={newPatient.DateNaiss}
            onChangeText={(text) => setNewPatient({ ...newPatient, DateNaiss: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Mutuelle"
            value={newPatient.Mutuelle}
            onChangeText={(text) => setNewPatient({ ...newPatient, Mutuelle: text })}
          />
          <View style={styles.modalActions}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSavePatient}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Patient List</Text>
        <View style={styles.cardContainer}>
          {patientList.map((patient) => (
            <View key={patient.CodePat} style={styles.card}>
              <TouchableOpacity
                style={styles.cardContent}
                onPress={() => handlePatientDetails(patient)}
              >
                <Text style={styles.cardTitle}>{patient.Nom}</Text>
                <Text style={styles.cardSubtitle}>Code: {patient.CodePat}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleEditPatient(patient)}
                style={styles.editButton}
              >
                <Icon name="edit" size={24} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeletePatient(patient.CodePat)}
                style={styles.deleteButton}
              >
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Patient</Text>
        </TouchableOpacity>
      </ScrollView>
      {renderPatientModal()}
    </SafeAreaView>
  );
};

export default HomeScreen;
