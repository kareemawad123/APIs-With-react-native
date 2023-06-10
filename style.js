import { Platform, StyleSheet } from "react-native";


export default styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? 40 : 0,
      },
      mainContainer:{
        marginHorizontal: 10,
      },
      textHeader: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
      },
      headerContainer: {
        backgroundColor: 'orange',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: 10,
        marginBottom: 10,
      },
      textInput:{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        height: 50,
        width: "60%",
        paddingHorizontal: 10,
      },
      buttonStyle:{
        width: '30%',
        height: 40,
        marginLeft: 10,
        borderRadius: 10,
      },
      rowToDo:{
        alignItems: 'center',
        flexDirection: 'row',
      },
      tasksArea:{
        marginVertical: 20,
        marginHorizontal: 10,
      },
});