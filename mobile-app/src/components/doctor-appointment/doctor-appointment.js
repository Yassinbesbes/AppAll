import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  Linking,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { doctors } from "../../../data/doctors";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the FontAwesome icon set

const DoctorAppointment = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { doctorId } = route.params;
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState(null);

  // Find the doctor based on the ID passed through params
  const doctor = doctors.find((doc) => doc.id === doctorId);

  const dates = [
    { day: "Sun", date: 7 },
    { day: "Mon", date: 8 },
    { day: "Tue", date: 9 },
    { day: "Wed", date: 10 },
    { day: "Thu", date: 11 },
  ];

  const times = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleBooking = () => {
    if (selectedTime) {
      Alert.alert(
        "Confirm Booking",
        `Booking appointment for August ${selectedDate} at ${selectedTime}`,
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Book",
            onPress: () =>
              Alert.alert("Success!", "Appointment booked successfully"),
          },
        ]
      );
    } else {
      Alert.alert("Error", "Please select a time slot");
    }
  };

  // Handle different actions
  const handleMessagePress = () => {
    Linking.openURL("sms:"); // Open SMS app
  };

  const handleCallPress = () => {
    if (doctor.phoneNumber) {
      Linking.openURL(`tel:${doctor.phoneNumber}`); // Dial the doctor's number
    } else {
      Alert.alert("Error", "Doctor's phone number is not available.");
    }
  };

  const handleVideoCallPress = () => {
    if (doctor.zoomLink) {
      Linking.openURL(`https://zoom.us/j/${doctor.zoomLink}`); // Replace with actual video call link
    } else {
      Alert.alert("Error", "Doctor's Zoom link is not available.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Image source={doctor.image} style={styles.profileImage} />
          </View>

          {/* Action Buttons with Icons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={handleMessagePress}
            >
              <Icon name="comment" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={handleCallPress}
            >
              <Icon name="phone" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={handleVideoCallPress}
            >
              <Icon name="video-camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.specialization}>{doctor.specialty}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <View style={styles.statInnerBox}>
              <Text style={styles.statNumber}>{doctor.stats.patients}</Text>
              <Text style={styles.statLabel}>Patients</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <View style={styles.statInnerBox}>
              <Text style={styles.statNumber}>{doctor.stats.experience}</Text>
              <Text style={styles.statLabel}>Exp. years</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <View style={styles.statInnerBox}>
              <Text style={styles.statNumber}>{doctor.stats.reviews}</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
          </View>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Doctor</Text>
          <Text style={styles.aboutText}>{doctor.about}</Text>
        </View>

        <View style={styles.scheduleSection}>
          <View style={styles.scheduleHeader}>
            <Text style={styles.sectionTitle}>Schedules</Text>
            <Text style={styles.monthText}>August</Text>
          </View>
          <View style={styles.dateContainer}>
            {dates.map(({ day, date }) => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dateBox,
                  selectedDate === date && styles.selectedDateBox,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDate === date && styles.selectedText,
                  ]}
                >
                  {day}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === date && styles.selectedText,
                  ]}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.visitHourSection}>
          <Text style={styles.sectionTitle}>Visit Hour</Text>
          <View style={styles.timeContainer}>
            {times.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeBox,
                  selectedTime === time && styles.selectedTimeBox,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === time && styles.selectedText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DoctorAppointment;
