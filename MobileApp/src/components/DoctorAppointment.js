import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const DoctorAppointment = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { doctorId } = route.params;
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Maria Waston",
      image: "https://via.placeholder.com/100",
      specialty: "Cardio Specialist",
      about: "Dr. Maria Waston is the top most Cardiologist specialist in Nanyang Hospotelat London. She is available for private consultation.",
      stats: {
        patients: "350+",
        experience: "15+",
        reviews: "284+",
      },
    },
  ];

  const doctor = doctors.find((doc) => doc.id === doctorId);

  const dates = [
    { day: "Sun", date: 7 },
    { day: "Mon", date: 8 },
    { day: "Tue", date: 9 },
    { day: "Wed", date: 10 },
    { day: "Thu", date: 11 },
  ];

  const times = [
    "11:00AM",
    "12:00AM",
    "01:00AM",
    "02:00AM",
    "03:00AM",
    "04:00AM",
    "05:00AM",
    "06:00AM",
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header with back button */}


        {/* Doctor Profile */}
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: doctor.image }} style={styles.profileImage} />
            <View style={styles.onlineIndicator} />
          </View>
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.specialization}>{doctor.specialty}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{doctor.stats.patients}</Text>
            <Text style={styles.statLabel}>Patients</Text>
          </View>
          <View style={[styles.statBox, styles.statBoxMiddle]}>
            <Text style={[styles.statNumber, styles.experienceNumber]}>
              {doctor.stats.experience}
            </Text>
            <Text style={styles.statLabel}>Exp. years</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNumber, styles.reviewsNumber]}>
              {doctor.stats.reviews}
            </Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Doctor</Text>
          <Text style={styles.aboutText}>{doctor.about}</Text>
        </View>

        {/* Schedule Section */}
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

        {/* Visit Hours */}
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

      {/* Book Button */}
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 15,
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  avatarContainer: {
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F3E8FF",
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  specialization: {
    color: "#FF4B8C",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#F3E8FF",
    borderRadius: 15,
  },
  statBox: {
    flex: 1,
    alignItems: "center",

  },
  statBoxMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 15,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7F3DFF",
  },
  experienceNumber: {
    color: "#4CAF50",
  },
  reviewsNumber: {
    color: "#FF4B8C",
  },
  statLabel: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  aboutSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
  },
  aboutText: {
    color: "#666",
    lineHeight: 20,
  },
  scheduleSection: {
    padding: 20,
  },
  scheduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  monthText: {
    color: "#7F3DFF",
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateBox: {
    width: "18%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  selectedDateBox: {
    backgroundColor: "#7F3DFF",
  },
  dayText: {
    fontSize: 12,
    color: "#666",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  selectedText: {
    color: "#fff",
  },
  visitHourSection: {
    padding: 20,
  },
  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  timeBox: {
    width: "23%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedTimeBox: {
    backgroundColor: "#7F3DFF",
  },
  timeText: {
    fontSize: 14,
    color: "#666",
  },
  bookButton: {
    backgroundColor: "#7F3DFF",
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default DoctorAppointment;