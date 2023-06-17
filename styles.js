import { StyleSheet } from "react-native"
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "magenta",
    // marginHorizontal:15,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  headerStyle: {
    backgroundColor: "#B0B7C0",
    padding: 10,
    paddingLeft: 20,
    color: "black",
    fontWeight: "900",
    fontSize: 23,
  },
  secItemView: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textView: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,

  },
  viwBtn:{
    marginBottom: 15,
  },
  navToDetails:{
    marginHorizontal: 10,
    marginBottom: 70,
    marginTop: 10,
  },
  userDetailsCenter:{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
  },

})
