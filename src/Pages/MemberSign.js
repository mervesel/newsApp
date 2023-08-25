import React,{useState} from "react";
import { SafeAreaView,Text,Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button/Button";

const MemberSign=({navigation})=>{
    const [name,setName]=useState(null);
    const [surname,setSurname]=useState(null);
    const [age,setAge]=useState(null);
    const [email,setEmail]=useState(null);
    const [hometown,setHometown]=useState(null);

    const handleSubmit=()=>{
        const user={
            name,
            surname,
            age,
            email,
            hometown
            
        }

        if(!name || !surname || !age || !email || !hometown){
            Alert.alert("Social Community Blog", "Bilgiler boş bırakılamaz.");
            return;

        }
        navigation.navigate('MemberDetail',{user});

    }

    return(
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Adınızı giriniz." onChangeText={setName} />
            <Input label="Üye Soyadı" placeholder="Soyadınızı giriniz." onChangeText={setSurname} />
            <Input label="Üye Yaşı" placeholder="Yaşınızı giriniz." onChangeText={setAge} />
            <Input label="Üyenin E-postası" placeholder="E-postanızı giriniz." onChangeText={setEmail} />
            <Input label="Üyenin Memleketi" placeholder="Memleketi giriniz." onChangeText={setHometown} />
            <Button title="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign;