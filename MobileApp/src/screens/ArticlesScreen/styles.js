// styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    paddingTop: 40,
    fontSize: 26,
    fontWeight: "bold",
    color: "#232F55",
    textAlign: "left",
    marginLeft: 16,
    marginVertical: 20,
  },
  categoriesContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: "#FFFFFFFF", // Fixed the extra F in the hex code
    borderRadius: 20,
    marginRight: 8,
    margin: 5,
    borderColor: "#7B61FF", // Border color
    borderWidth: 1, // Adding borderWidth to make the border visible
  },
  
  categoryText: {
    backgroundColor: "#FFFFFFFF",
    color:"#7B61FF",
    fontWeight:500,
  },
  articlesContainer: {
    paddingHorizontal: 16,
  },
  articleCard: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  articleImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  articleFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorText: {
    color: "#666",
    marginLeft: 4,
  },

  card: {
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    margin: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",

    top: 0,
    left: 0,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 10,

    padding: 10,
    borderRadius: 5,
    width: "100%", // Ensure overlay takes enough space within the card
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5, // Space between title and button
    
  },
  button: {
    padding: 10,
    borderRadius: 15,
    width: "50%",
    backgroundColor: "#7B61FF",
    borderColor: "#7B61FF", // Border color
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    color:"#fff",


  },
});

export default styles;
