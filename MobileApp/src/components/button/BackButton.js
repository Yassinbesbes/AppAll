import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const BackButton = ({ to, backgroundColor = "#B490FC" }) => {
  const navigation = useNavigation();

  const handleBackClick = () => {
    navigation.navigate(to);
  };

  return (
    <TouchableOpacity
      style={[styles.backButton, { backgroundColor }]}
      onPress={handleBackClick}
    >
      <AntDesign name="left" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 1,
    padding: 10,
    borderRadius: 15,
  },
});

export default BackButton;
