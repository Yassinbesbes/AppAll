import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { articles } from "../../../data/articles.js";  // Import your articles data

const NotificationSystem = () => {
  const [newArticlesCount, setNewArticlesCount] = useState(0);
  const [lastCheckedTime, setLastCheckedTime] = useState(new Date());
  const [showNotificationWindow, setShowNotificationWindow] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation reference

  // Function to get the latest article (mock timestamp check)
  const getLatestArticle = () => {
    const latestArticle = articles[articles.length - 1];  // Assumes articles are sorted by the newest first
    return latestArticle;
  };

  // Function to check if there are new articles
  const checkForNewArticles = () => {
    const newArticles = articles.filter((article) => {
      const articleDate = new Date(article.timestamp || new Date()); // Use timestamp if available, else fallback
      return articleDate > lastCheckedTime;
    });
    
    setNewArticlesCount(newArticles.length);
  };

  useEffect(() => {
    // Check for new articles every 5 seconds
    const interval = setInterval(() => {
      checkForNewArticles();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [lastCheckedTime]);

  const handleNotificationPress = () => {
    setNewArticlesCount(0);  // Mark all notifications as read
    setLastCheckedTime(new Date());  // Reset last checked time
    showNotificationFor5Seconds();  // Show notification window
  };

  const showNotificationFor5Seconds = () => {
    setShowNotificationWindow(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Hide the notification after 10 seconds
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowNotificationWindow(false));
    },10000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleNotificationPress}
        style={styles.notificationIcon}
      >
        <Ionicons name="notifications" size={24} color="white" />
        {newArticlesCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{newArticlesCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Animated Notification Window */}
      {showNotificationWindow && newArticlesCount > 0 && (
        <Animated.View style={[styles.notificationWindow, { opacity: fadeAnim }]}>
          <Text style={styles.windowHeader}>New Updates</Text>
          <Text style={styles.articleTitle}>There are {newArticlesCount} new articles.</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  notificationIcon: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 13,
    height: 13,
    borderRadius: 9,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
  },
  notificationWindow: {
    position: "absolute",
    top: 40,
    right: 0,
    width: 250,
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  windowHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
});

export default NotificationSystem;
