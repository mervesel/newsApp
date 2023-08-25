import React from "react";
import { SafeAreaView,Text,StyleSheet } from "react-native";

const MemberDetail=({route})=>{
    console.log(route);
    const {user}=route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.messageText}>Kayıt başarılı bir şekilde tamamlandı.</Text>
            <Text style={styles.label}> Üye Adı: {user.name} </Text>
            <Text style={styles.label}> Üyenin Soyadı: {user.surname} </Text>
            <Text style={styles.label}> Üyenin Yaşı: {user.age} </Text>
            <Text style={styles.label}> Üyenin Maili:{user.email} </Text>
            <Text style={styles.label}> Üyenin Memleketi: {user.hometown} </Text>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {flex: 1,
        justifyContent: 'center',
        marginLeft: 15,
    

    },
    messageText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue',
        margin: 5

    },

    label:{
        fontWeight: 'bold',
        fontSize: 20,
        margin: 8

    }
})

export default MemberDetail;