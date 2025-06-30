import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ArticleDetailsScreen = ({ route }) => {
  const { article } = route.params; 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Article Image with Icons */}
        <View style={styles.imageContainer}>
          <Image source={article.image} style={styles.articleImage} />
          {/* Save Icon */}
          <TouchableOpacity style={[styles.iconButton, styles.saveButton]}>
            <FontAwesome name="bookmark" size={20} color="#fff" />
          </TouchableOpacity>
          {/* Share Icon */}
          <TouchableOpacity style={[styles.iconButton, styles.shareButton]}>
            <FontAwesome name="share-alt" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Article Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.description}>{article.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    position: "relative",
  },
  articleImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  iconButton: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    top: 15,
    right: 15,
  },
  shareButton: {
    top: 15,
    right: 70,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
});

export default ArticleDetailsScreen;
