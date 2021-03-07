import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri:
                '"https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"',
            }}
          />
          <Text>{route.params.chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <FontAwesome name="video-camera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={styles.container}
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
      ></KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {},
});
