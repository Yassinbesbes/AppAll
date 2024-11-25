import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },
  header: {
    padding: 20,
    backgroundColor: "#B28CFF",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 50,
  },
  menuLine: {
    width: 24,
    height: 2,
    backgroundColor: "#FFFFFF",
    marginVertical: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 15,
    color: "#232F55",
  },
  categoriesScroll: {
    paddingHorizontal: 15,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#E7E7E76D",
    borderRadius: 10,
    width: 80,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 14,
    color: "#666666",
  },

});
