import React from 'react';
import { Image } from 'react-native';
import { Text } from 'react-native';

import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ShortCategory from '../decorators/ShortCategory';

function FeedShortCart({ username, shorttitle, }) {
    return (
        <View style={styles.container}>
            {/* Information section */}
            <View style={{ flexDirection: "row", backgroundColor: "blue" }}>
                {/* Image section */}
                <View style={{ backgroundColor: "yellow" }}>
                    <View style={{ height: 60, width: 60 }}>
                        <Image style={{ height: "100%", width: "100%", borderRadius: 60 }} source={require('../../../assets/images/people/person1.png')} />
                    </View>
                </View>

                {/* Post information */}
                <View style={{ paddingHorizontal: 5, flex: 1 }}>

                    {/* user name */}
                    <View >
                        <Text style={{ fontSize: 18 }} numberOfLines={1}>
                            {username}
                        </Text>
                    </View>

                    {/* post title */}
                    <View>
                        <Text style={{ fontSize: 19 }} numberOfLines={2}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit! 🤣🤣
                        </Text>
                    </View>

                    {/* aditional info */}
                    <View style={{ flexDirection: "row", backgroundColor: "white", width: "100%", }}>
                        {/* <View style={{ flexGrow: 1 }}> */}
                        <ShortCategory icon="open-in-new" text="YouTube" />
                        {/* </View> */}
                        {/* <View style={{ flexGrow: 1 }}> */}
                        <ShortCategory icon="google-controller" size={30} text="Battlefield 2042jdkjkjkjkjkkkjkjk" />
                        {/* </View> */}
                    </View>
                </View>
            </View>

            {/* Post Image / Video Display */}
            <View>

            </View>

            {/* Options section */}
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})

export default FeedShortCart;