import React from "react";
import { SafeAreaView,StyleSheet,Text } from "react-native";
import Button from "../components/Button/Button";

const Welcome=({navigation})=>{
    const handleSubmit=()=>{
        navigation.navigate('MemberSign');
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Social Community Blog</Text>
            <Button title="Üye Kaydı Oluştur" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        letterSpacing: 2,
        color: 'blue',
    }
})

export default Welcome;