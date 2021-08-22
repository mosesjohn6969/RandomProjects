import React, { useEffect, useState } from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';

import { StyleSheet, View, Modal, TextInput, Button } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
const { screenwidth } = Dimensions.get("window");

function BottomModal({ visible, setVisible, borderRadius = 25, children }) {
    // const [isModalVisible, setModalVisible] = useState(false);
    console.log(visible)
    // useEffect(() => {
    //     setModalVisible(visible);
    // });
    // const { visible, setVisible, children, ...otherProps } = this.props;

    return (
        <View>
            <Modal
                animationType="slide"
                transparent
                visible={visible}
                presentationStyle="overFullScreen"
            >
                <View style={styles.viewWrapper}>
                    <View style={styles.contentWrapper}>
                        {/* The Close Button */}
                        <View style={styles.closeSection}>

                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <View style={[styles.closeIconSection]}>
                                    {/* <Text>hi</Text> */}
                                    <MaterialCommunityIcons name="close" size={30} color="black" style={styles.closeIcon} />

                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={[styles.modalView, { borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius, padding: borderRadius }]}>
                            {children}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    viewWrapper: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "flex-end",

        // justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        // backgroundColor: "red"
    },
    contentWrapper: {
        position: "absolute",
        width: "100%",
        bottom: 0
    },
    modalView: {
        backgroundColor: "white",
        // width: "100%",
        // position: "absolute",
        // bottom: 0
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },
    closeSection: {
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
        paddingBottom: 15
    },
    closeIconSection: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    closeIcon: {
        // width: "100%"
    }
})

export default BottomModal;