import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView,Image,TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Scrolls({navigation}) {
    const arr = [
        "https://image.shutterstock.com/image-photo/stray-dog-600w-484277455.jpg",
        "https://image.shutterstock.com/image-photo/unhappy-homeless-dog-that-lives-600w-510964261.jpg",
        "https://image.shutterstock.com/image-photo/flock-stray-dogs-on-streets-600w-1738646651.jpg",
        "https://image.shutterstock.com/image-photo/hand-caressing-cute-homeless-dog-600w-1482937670.jpg",
        "https://image.shutterstock.com/image-photo/halfadozen-stray-street-dogs-roaming-600w-2053775084.jpg"
]
    // const [box, setBox] = useState(1)
    // const [disable, setDisable] = useState(false);

    // const next = () => {
    //     setBox(box+1)
    // }

    // const prev = () => {
    //     setBox(box - 1)
    // }

    return (
        <View style={styles.container}>
           
           <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scroll} >
                {
                    arr.map((image, index) => (
                        <Image
                            key={index}
                            style={styles.logo}
                            source={{ uri: image }}
                        />
                    ))
                }
            </ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate('Slide')}>
            <Text style={styles.btn}>Top</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    scroll:{
        flex:1,
        width:400,
    },
  
    logo:{
        width:400,
        height:300,
        justifyContent: "center",
        alignItems: "center"
    },
    textDec:{
        fontFamily:"cursive"
    },
    btn: {
        backgroundColor: 'white',
        color: '#3A59FF',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize:  27,
      },

});
