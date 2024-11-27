import React, { useState, useEffect } from "react";
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

const ArticlesScreen = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch articles from the articles API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://192.168.1.12:9000/api/articles");
        const data = await response.json();
        setArticles(data); // Set the articles data into state
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Fetch categories from the categories API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://192.168.1.12:9000/api/categories");
        const data = await response.json();
        setCategories(data); // Set the categories data into state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

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
        <Image source={{ uri: article.imageUrl }} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleTitle} numberOfLines={2}>
            {article.title}
          </Text>
          <View style={styles.articleFooter}>
            <FontAwesome name="user" size={14} color="#666" />
            <Text style={styles.authorText}>{article.doctorName}</Text>
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
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryPill key={category.id} label={category.name} />
            ))
          ) : (
            <Text style={styles.loadingText}>Loading categories...</Text>
          )}
        </ScrollView>

        {/* Articles List Section */}
        <View style={styles.articlesContainer}>
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <Text style={styles.loadingText}>Loading articles...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticlesScreen;
