import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';


export const usersContext = createContext();

const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [oUsers, setOUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            // console.warn(response.data);
            setUsers(response.data);
            setOUsers(response.data);
            
        });
    }, []);

    return (
        <usersContext.Provider value={{users, setUsers, oUsers}}>
            {children}
        </usersContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default UserContextProvider;
