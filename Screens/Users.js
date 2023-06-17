import axios from 'axios';
import { Avatar, Box, FlatList, HStack, Heading, Pressable, Spacer, Spinner, VStack } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../styles';
import routes from '../common/routes';
import { useNavigation } from '@react-navigation/native';
import { usersContext } from '../contexts/userContextProvider';
import SearchBar from '../Exercises/searchBar';

const Users = () => {
    const navigation = useNavigation();

    const { users } = useContext(usersContext);
    // console.warn(users);

    return (
        
        <Box style={styles.navToDetails}>
            <SearchBar></SearchBar>
            <FlatList data={users} renderItem={({
                item
            }) =>
                <Pressable onPress={() => navigation.navigate(routes.userDetails, item)}
                    shadow="3" bg="coolGray.100" borderWidth="1" borderColor="coolGray.300"
                    marginBottom={2} rounded="8" p="2">
                    <Box borderBottomWidth="1" _dark={{
                        borderColor: "muted.50"
                    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack space={[2, 3]} justifyContent="space-between">
                            <Avatar size="48px" source={{
                                uri: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg'
                            }} />
                            <VStack>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="coolGray.800" bold>
                                    {item.name}
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    {item.email}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Text fontSize="xs" _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" alignSelf="center">
                                {'=>'}
                            </Text>
                        </HStack>
                    </Box>
                </Pressable>
            } keyExtractor={item => item.id} />


        </Box>


    );
}

export default Users;
