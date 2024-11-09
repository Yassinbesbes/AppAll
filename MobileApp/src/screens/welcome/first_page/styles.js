import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 50,
    backgroundColor: "#B490FC",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
  },
  brandContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  brandText: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 8,
  },
  brandHighlight: {
    fontWeight: "400",
  },
  buttonContainer: {
    gap: 25,
    width: "100%",
    paddingBottom: 20, // Space from the bottom
  },
  loginButton: {
    backgroundColor: "#000000FF",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  registerButton: {
    backgroundColor: "#FFFFFFFF",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  guestButton: {
    paddingVertical: 8,
  },
  guestButtonText: {
    color: "#FFFFFFFF",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default styles;
