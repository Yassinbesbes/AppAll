import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";  // Import FontAwesome for icons

const DoctorCard = ({ doctor, onAppointmentPress }) => {
  const [isLiked, setIsLiked] = useState(false);  // State for heart animation
  const [heartScale] = useState(new Animated.Value(1)); // Animated scale for heart icon

  // Handle the heart icon click (toggle like)
  const handleHeartPress = () => {
    setIsLiked(!isLiked);
    Animated.spring(heartScale, {
      toValue: isLiked ? 1 : 1.2, // Scale animation
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  // Handle message button click (open phone messaging app)
  const handleMessagePress = () => {
    const phoneNumber = doctor.phoneNumber; // Assuming doctor has a phoneNumber field
    Linking.openURL(`sms:${phoneNumber}`).catch(err => console.error("Couldn't open SMS app", err));
  };

  return (
    <TouchableOpacity style={styles.doctorCard}>
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

          {/* Actions Container with Reversed Order */}
          <View style={styles.actionsContainer}>
            {/* Book Appointment Button on the Left */}
            <TouchableOpacity
              style={styles.appointmentButton}
              onPress={() => onAppointmentPress(doctor.id)}
            >
              <Text style={styles.appointmentButtonText}>Book Appointment</Text>
            </TouchableOpacity>

            {/* Icons Container on the Right */}
            <View style={styles.iconsContainer}>
              {/* Message Icon with Link */}
              <TouchableOpacity style={styles.iconBox} onPress={handleMessagePress}>
                <FontAwesome name="comment" size={20} color="#B28CFF" />
              </TouchableOpacity>

              {/* Animated Heart Icon */}
              <TouchableOpacity style={styles.iconBox} onPress={handleHeartPress}>
                <Animated.View style={{ transform: [{ scale: heartScale }] }}>
                  <FontAwesome
                    name={isLiked ? "heart" : "heart-o"}
                    size={20}
                    color={isLiked ? "#FF4081" : "#B28CFF"} // Change color when liked
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  doctorCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    margin: 15,
  },
  doctorInfo: {
    flexDirection: "row",
    marginBottom: 15,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  onlineIndicator: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    top: 0,
    right: 0,
  },
  doctorDetails: {
    marginLeft: 15,
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ratingIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#666666",
  },
  // Actions Container with Reversed Order
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Space between the button and the icons
    alignItems: "center", // Vertically center them
    marginTop: 10, // Add some space at the top
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    backgroundColor: "#F7F8F8", // Box color
    padding: 8,
    borderRadius: 10,
    marginLeft: 10, // Space between the icons
    alignItems: "center",
    justifyContent: "center",
  },
  appointmentButton: {
    backgroundColor: "#F7F8F8",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  appointmentButtonText: {
    color: "#161616FF",
    fontWeight: "600",
  },
});

export default DoctorCard;
