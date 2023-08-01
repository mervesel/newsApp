import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        flexDirection: 'row',

    },
    image: {
        width:100,
        height: 100,
        borderRadius: 50,

    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',

    },
    title:{
        fontSize:24,
        fontWeight: 'bold',

    },
    ınfo_container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',

    },
    content_container: {
        flexDirection: 'row'
    },
   
    year: {
        fontSize: 12,
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold'

    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 3


    },
    soldout_title: {
        fontSize: 12,
        color: 'red',
        
    }

});