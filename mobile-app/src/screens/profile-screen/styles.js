import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // Get screen width for scaling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    padding: 50,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "500",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
  },
  settingsGroup: {
    marginTop: 24,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  settingsItemText: {
    fontSize: 16,
    flex: 1, // Allows the title to take up available space
  },
  settingsItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsItemValue: {
    fontSize: 16,
    color: "#666",
    marginRight: 8,
    maxWidth: width * 0.4, // Prevent overflow by limiting width
  },
  version: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 24,
  },
});

export default styles;
