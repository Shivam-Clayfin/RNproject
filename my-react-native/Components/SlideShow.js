import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function SlidingFunc() {
    const arr = [
        "https://image.shutterstock.com/image-photo/stray-dog-600w-484277455.jpg",
        "https://image.shutterstock.com/image-photo/unhappy-homeless-dog-that-lives-600w-510964261.jpg",
        "https://image.shutterstock.com/image-photo/flock-stray-dogs-on-streets-600w-1738646651.jpg",
        "https://image.shutterstock.com/image-photo/hand-caressing-cute-homeless-dog-600w-1482937670.jpg",
        "https://image.shutterstock.com/image-photo/halfadozen-stray-street-dogs-roaming-600w-2053775084.jpg",
        "https://frontiersinblog.files.wordpress.com/2020/01/frontiers-psychology-stray-dogs-human-cues-behavior.jpg?w=1000",
        "https://cdn.downtoearth.org.in/library/large/2020-07-06/0.59836200_1594053960_0.jpg"
    ]
    const [box, setBox] = useState(1)

    const next = () => {
        setBox(box + 1)
    }

    const prev = () => {
        setBox(box - 1)
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.textDec}>A dog will always be your best friend no matter what. Even if your human friends aren’t</Text>
            <View style={styles.container}>


                <View>
                    <Image
                        style={styles.logo}
                        source={{ uri: arr[box] }} />
                </View>
                {box === 0 ? null :
                    <TouchableOpacity style={styles.btn2} onPress={prev} >
                        <View >
                            <Text>prev</Text>
                        </View>
                    </TouchableOpacity >
                }
                {box === arr.length - 1 ? null :
                    <TouchableOpacity style={styles.btn} onPress={next} >
                        <View>
                            <Text>next</Text>
                        </View>
                    </TouchableOpacity >

                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },

    logo: {
        width: 300,
        height: 300,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: 50,
        height: 30,
        position: "absolute",
        alignItems: "center",
        top: "45%",
        right: "10%",
        backgroundColor: 'white',
        color: '#3A59FF',
        borderRadius: 25,
        fontWeight: 'bold',
        padding: "2%",

    },
    btn2: {
        width: 50,
        height: 30,
        position: "absolute",
        alignItems: "center",
        top: "45%",
        left: "10%",
        backgroundColor: 'white',
        color: '#3A59FF',
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
    },

});
