import React from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';


const Header = () => {
    
    return (
        <View style={styles.Header_container}>
            <Image style={styles.tinyLogo} source={{uri:'https://www.chennaisuperkings.com/CSK_NEW/images/logo.png'}}></Image>
            <Image style={styles.tinyLogo} source={{uri:'https://www.royalchallengers.com/themes/custom/rcbbase/images/header/RCB-NewLOGO.png'}}></Image>
            <Image style={styles.tinyLogo} source={{uri:'https://wallpapercave.com/dwp1x/wp4011453.jpg'}}></Image> 
        </View>        
    );
};

export default Header;
const styles=StyleSheet.create({
    Header_container:{
        backgroundColor:"#3b5998",
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius:25
      },
})