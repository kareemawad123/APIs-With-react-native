import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  SectionList,
} from "react-native";
import { Button, Box } from "native-base";
import styles from "../styles";
import { useCallback, useState } from "react";
import { StackRouter, useNavigation } from "@react-navigation/native";
import routes from "../common/routes";

export default function Section() {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", text: "User 1" },
        { id: "1", text: "User 2" },
        { id: "2", text: "User 3" },
      ]
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "3", text: "User 1" },
        { id: "4", text: "User 2" },

      ]
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "5", text: "User 1" },

      ]
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "6", text: "User 2" },

      ]
    },
  ]
  const navigation = useNavigation();
  return (
      <View>
        <SectionList sections={sections}
          renderSectionHeader={({ section }) => <Text style={styles.headerStyle}>{section.title}</Text>}
          renderItem={({ item }) =>
            <View style={styles.secItemView}>
              <Image
                style={styles.imageAvatar}
                source={{
                  uri: 'https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg',
                }}
              />
              <View style={styles.textView}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
              

            </View>
          }
        >
          
        </SectionList>
        <Box alignItems="flex-end" marginRight={10} marginTop={2} style={styles.viwBtn}>
                <Button onPress={() => { navigation.navigate(routes.users) }}>{'Go to Users =>'}</Button>
            </Box> 
      </View>

  );
}
