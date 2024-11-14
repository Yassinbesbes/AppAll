import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { articles } from "../../../data/articles.js";

const ArticlesScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.headerText}>Doctor's Articles</Text>

    <ScrollView contentContainerStyle={styles.articlesContainer}>
      {articles.map((article) => (
        <TouchableOpacity key={article.id} style={styles.articleCard}>
          {/* <Image source={article.image} style={styles.articleImage} /> */}
          <View style={styles.articleContent}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleDescription}>{article.description}</Text>
            <Text style={styles.articleAuthor}>By {article.author}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#232F55",
    textAlign: "center",
    marginVertical: 20,
  },
  articlesContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  articleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  articleImage: {
    width: "100%",
    height: 150,
  },
  articleContent: {
    padding: 15,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#232F55",
    marginBottom: 5,
  },
  articleDescription: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  articleAuthor: {
    fontSize: 12,
    color: "#A0A0A0",
  },
});

export default ArticlesScreen;
