import { Heading, Icon, Input, VStack } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { usersContext } from '../contexts/userContextProvider';

const SearchBar = () => {
    const { users, setUsers, oUsers } = useContext(usersContext);
    const [search, setSearch] = React.useState('');
    useEffect(()=>{
        setSearch('');
        setUsers(oUsers);
    },[]);

    // console.warn(users);
    useEffect(() => {
        // console.warn(search);
        if(search.trim() === '') {
            setUsers(oUsers);
        }else{
            setUsers(oUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase().trim())));
        }
    }, [search]);
    return (
        <VStack w="100%" space={5} alignSelf="center">
            <Input placeholder="Search Users" width="100%" borderRadius="4"
                py="3" px="1" fontSize="14" mb={2} onChangeText={(value) => { setSearch(value) }} />
        </VStack>
    );
}


export default SearchBar;
