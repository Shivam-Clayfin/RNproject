import React from 'react'
import { StyleSheet,Image } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../Constants/Layout'


export default function Card({pic,title,caption,id}) {
    return (
        <>
        <Tile
            id = {id}
            imageSrc={pic}
            imageContainerStyle={styles.imageContainer}
            activeOpacity={0.9}
            title={title}
            titleStyle={styles.title}
            caption={caption}
            captionStyle={styles.caption}
            containerStyle={styles.container}
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        width:Layout.window.width - 60,
        height:Layout.window.width - 60,
        borderRadius: 20,
        //overflow: 'hidden', // this does magic
    },
    title: {
        position: 'absolute',
        left: 10,
        bottom: 30,
    },
    caption: {
        position: 'absolute',
        left: 10,
        bottom: 30,
        color:"red",
    },
})