import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = (id, chatName, enterChat) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri:
            "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "600" }}>
          Youtube chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is Test subtitle This is Test subtitle This is Test subtitle This
          is Test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
