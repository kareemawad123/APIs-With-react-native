import { AspectRatio, Box, Center, HStack, Heading, Stack, Image } from 'native-base';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../styles';
import { useRoute } from '@react-navigation/native';

const UserDetails = () => {
    const args = useRoute();
    user = args.params;
    // console.warn(user.params.name);
    return (
        <View style={styles.userDetailsCenter}>
            <Center>
            <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {user.name}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {user.email}
            </Text>
          </Stack>
          <Text fontWeight="400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
            </Center>

        </View>
    );
}


export default UserDetails;
