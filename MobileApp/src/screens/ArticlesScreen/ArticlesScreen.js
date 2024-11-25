import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles"; // Import external styles
import { useNavigation } from "@react-navigation/native";

// Importing the articles and authors data
import { articles, authors } from "../../../data/articles.js"; // Assuming data.js contains the articles data
import { categories } from "../../../data/categories.js"; // Import categories data

const ArticlesScreen = () => {
  const getAuthorName = (authorId) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : "Unknown Author";
  };

  const CategoryPill = ({ label }) => (
    <TouchableOpacity style={styles.categoryPill}>
      <Text style={styles.categoryText}>{label}</Text>
    </TouchableOpacity>
  );

  const ArticleCard = ({ article }) => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity
        style={styles.articleCard}
        onPress={() => navigation.navigate("ArticleDetails", { article })}
      >
        <Image source={article.image} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleTitle} numberOfLines={2}>
            {article.title}
          </Text>
          <View style={styles.articleFooter}>
            <FontAwesome name="user" size={14} color="#666" />
            <Text style={styles.authorText}>
              {getAuthorName(article.authorId)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.headerText}>Doctor's Articles</Text>

        {/* Popular Card */}
        <View style={styles.card}>
          <Image
            source={require("../../../assets/articles/AllergicReactions.jpg")} // Correct way to use local image
            style={styles.image}
          />

          <View style={styles.overlay}>
            <Text style={styles.title}>
              Understanding Allergic Reactions: A Focused Approach
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Read Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <CategoryPill key={category.id} label={category.name} />
          ))}
        </ScrollView>

        {/* Articles List Section */}
        <View style={styles.articlesContainer}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticlesScreen;
