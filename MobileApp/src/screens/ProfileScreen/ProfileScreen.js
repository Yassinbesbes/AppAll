import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles"; // Import the styles

const SettingsScreen = ({ user }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const SettingsItem = ({
    title,
    value,
    onPress,
    showToggle,
    isToggled,
    showArrow = true,
  }) => (
    <TouchableOpacity
      style={styles.settingsItem}
      onPress={onPress}
      disabled={!onPress && !showToggle}
    >
      <Text
        style={styles.settingsItemText}
        numberOfLines={1} // Limit to one line on smaller screens
        adjustsFontSizeToFit // Adjust font size to fit container
      >
        {title}
      </Text>
      <View style={styles.settingsItemRight}>
        {value && (
          <Text style={styles.settingsItemValue} numberOfLines={1}>
            {value}
          </Text>
        )}
        {showToggle && (
          <Switch
            value={isToggled}
            onValueChange={onPress}
            trackColor={{ false: "#E5E5EA", true: "#007AFF" }}
          />
        )}
        {showArrow && !showToggle && (
          <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Section */}
      <TouchableOpacity style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={{ uri: user?.profileImage || "https://via.placeholder.com/150" }} // Dynamically set image or placeholder
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{user?.name || "User Name"}</Text>
          <Text style={styles.profileEmail}>{user?.email || "User Email"}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
      </TouchableOpacity>

      {/* Settings Groups */}
      <View style={styles.settingsGroup}>
        <SettingsItem
          title="Location"
          value={user?.location || "Location not available"} // Dynamically set location
          onPress={() => {}}
        />
        <SettingsItem
          title="Notifications"
          showToggle={true}
          isToggled={notificationsEnabled}
          onPress={() => setNotificationsEnabled(!notificationsEnabled)}
        />
        <SettingsItem title="Language" value="EN" onPress={() => {}} />
        <SettingsItem
          title="Dark Mode"
          showToggle={true}
          isToggled={darkModeEnabled}
          onPress={() => setDarkModeEnabled(!darkModeEnabled)}
        />
        <SettingsItem title="Help" onPress={() => {}} />
        <SettingsItem title="Log out" showArrow={false} onPress={() => {}} />
      </View>

      {/* Version */}
      <Text style={styles.version}>Version 8.2.10</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
