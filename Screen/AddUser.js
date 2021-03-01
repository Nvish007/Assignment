import React,{useState} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';
import { MMKV } from 'react-native-mmkv';




const AddUser = () => {

     const [fname, setFname] = useState("")
     const [lname, setLname] = useState("")
     const [company, setCompany] = useState("")
     const [picture, setPicture] = useState("")



    const pickFromGallary = async() => {
     const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
     if(granted){
      let data = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          allowsEditing:true,
          aspect:[1,1]
      })
      //console.log(data);

     }else {
         Alert.alert("Please Give Permission");
     }
    }

    const handleUplod = () => {
        MMKV.set('fname', 'fname')
        MMKV.set('lname', "lname")
        MMKV.set('company', "company")
      
        const userName = MMKV.getAllKeys()
     console.log(userName);
     }

     

    return(
        <View style={styles.root}> 
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <Ionicons name="person-circle-outline" size={100} />
            <Text 
             style={styles.textFont}
             onPress={() => pickFromGallary()}>
              Add Photo 
             </Text>
            </View>
            <View>
                <TextInput
                 label="First Name"
                 value={fname}
                 onChangeText={text => setFname(text)} />
                <TextInput
                 label="Last Name"
                 value={lname}
                 onChangeText={text => setLname(text)} />
                <TextInput
                 label="Company Name"
                 value={company}
                 onChangeText={text => setCompany(text)} />
                <Button
                mode="contained"
                 onPress={() => handleUplod()} >
                    Save
                </Button>
            </View>
        </View>
    )
}

export default AddUser

 const styles = StyleSheet.create({
   root:{
       flex:1,
   },
   textFont:{
   fontSize:20,
   color:"blue"
   }
 })