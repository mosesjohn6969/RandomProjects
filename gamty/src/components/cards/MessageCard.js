import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { StyleSheet, View, Image } from 'react-native';
import { colors } from 'react-native-elements';
import appcolors from '../../config/appcolors';

function MessageCard({ height = 70, backgroundColor = "blue", paddingHorizontal = 15, image, title, time, message, notifications }) {
    return (
        // adding a little bit of space to the height and dynamically setting the padding to the added content
        <View style={[styles.container, { height: (height + height / 3), paddingVertical: (height / 6), paddingHorizontal }]}>

            {/* Image Section */}
            <View style={[styles.imageSection, { width: height, height: height, marginRight: (height / 7) }]}>
                <TouchableOpacity>
                    <Image style={[styles.image, { borderRadius: height }]} resizeMode="cover" source={image} />
                </TouchableOpacity>
            </View>

            {/* Text Section */}
            <View style={styles.textSection}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity>
                        {/* Section 1 */}
                        <View style={styles.textSection1}>
                            <Text style={styles.titleText}>{title}</Text>
                            <Text style={styles.dotText}>.</Text>
                            <Text style={styles.timeText}>{time}</Text>
                        </View>

                        {/* Section 2 */}
                        <View style={styles.textSection2}>
                            <Text style={styles.messageText} numberOfLines={1}>{message}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Notifications section */}
                <View style={{ height: "100%", width: (height / 2.5), paddingTop: (height / 10) }}>
                    <View style={{ backgroundColor: "black", height: (height / 2.5), borderRadius: (height / 2.5), justifyContent: "center" }}>
                        <Text style={{ color: appcolors.secondary, textAlign: "center", fontWeight: "bold", fontSize: (height / 4) }}>{notifications}</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    imageSection: {
        height: "100%",
        // backgroundColor: "blue",
        overflow: 'hidden',
    },
    image: {
        height: "100%",
        width: "100%",
    },
    textSection: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        flexDirection: "row"
    },
    textSection1: {
        flexDirection: "row",
        alignItems: "center"
    },
    textSection2: {

    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18,
        color: appcolors.black
    },
    timeText: {
        fontSize: 15
    },
    dotText: {
        color: appcolors.black,
        fontWeight: "bold",
        marginHorizontal: 5,
        fontSize: 20
    },
    messageText: {
        fontSize: 15
    }
})

export default MessageCard;