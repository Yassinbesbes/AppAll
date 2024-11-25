import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
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
    textAlign: "center",
  },
  specialization: {
    color: "#7D8BB7",
    marginTop: 5,
    textAlign: "center",
  },

  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Adjust spacing between buttons evenly
    paddingHorizontal: 20, // Add padding around the container
    marginVertical: 10, // Add space above and below the row
  },

  circleButton: {
    width: 40, // Increased size for better touch area
    height: 40,
    borderRadius: 25, // Adjusted to maintain a circular shape
    backgroundColor: "#7F3DFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4, // Slightly increased shadow radius for a softer effect
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Adjust spacing between buttons evenly
    paddingHorizontal: 20, // Add padding around the container
    marginVertical: 10, // Add space above and below the row
  },

  circleButton: {
    width: 50, // Increased size for better touch area
    height: 50,
    borderRadius: 25, // Adjusted to maintain a circular shape
    backgroundColor: "#7F3DFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4, // Slightly increased shadow radius for a softer effect
    marginHorizontal: 10, // Add space between each button
  },

  statsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#F3E8FF",
    borderRadius: 15,
  },

  statInnerBox: {
    width: "90%", // Full width of the container
    padding: 15,
    backgroundColor: "#FFFFFF", // White rectangle
    borderRadius: 10, // Rounded corners for the rectangle
    alignItems: "center",
    shadowColor: "#000", // Add a shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
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
