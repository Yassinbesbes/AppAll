import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
// import { ChevronLeft, ChevronDown, Clipboard } from 'lucide-react';
import styles from "./style";

const SignUpScreenDoctor = ({ navigation }) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    countryCode: "+216",
    specialization: "",
    yearsOfExperience: "",
    medicalLicense: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.specialization.trim()) {
      newErrors.specialization = "Specialization is required";
    }

    if (!formData.yearsOfExperience.trim()) {
      newErrors.yearsOfExperience = "Years of experience is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({});
      if (result.type === "success") {
        setFormData({ ...formData, medicalLicense: result });
      }
    } catch (err) {
      console.log("Document picking error:", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        {/* <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ChevronLeft size={24} color="#000" />
        </Pressable> */}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Continue Register As Doctor</Text>

        {/* Phone number input with country code */}
        <View style={styles.phoneContainer}>
          <View style={styles.countryCode}>
            <Text style={styles.countryCodeText}>{formData.countryCode}</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={formData.phoneNumber}
            onChangeText={(text) =>
              setFormData({ ...formData, phoneNumber: text })
            }
          />
        </View>
        {errors.phoneNumber && (
          <Text style={styles.errorText}>{errors.phoneNumber}</Text>
        )}

        {/* Specialization dropdown */}
        <Pressable
          style={styles.dropdownButton}
          onPress={() => console.log("Open specialization dropdown")}
        >
          <Text style={styles.dropdownText}>
            {formData.specialization || "Specialized"}
          </Text>
          {/* <ChevronDown size={20} color="#6B7280" /> */}
        </Pressable>
        {errors.specialization && (
          <Text style={styles.errorText}>{errors.specialization}</Text>
        )}

        {/* Years of Experience input */}
        <TextInput
          style={styles.input}
          placeholder="Years Of Experience"
          keyboardType="numeric"
          value={formData.yearsOfExperience}
          onChangeText={(text) =>
            setFormData({ ...formData, yearsOfExperience: text })
          }
        />
        {errors.yearsOfExperience && (
          <Text style={styles.errorText}>{errors.yearsOfExperience}</Text>
        )}

        {/* Medical License input */}
        <View style={styles.licenseContainer}>
          <TextInput
            style={styles.licenseInput}
            placeholder="Medical License"
            editable={false}
            value={formData.medicalLicense?.name}
          />
          <Pressable style={styles.clipboardButton} onPress={pickDocument}>
            {/* <Clipboard size={20} color="#6B7280" /> */}
          </Pressable>
        </View>

        {/* Register button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreenDoctor;
