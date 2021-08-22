import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// components
import CustomInput from '../../components/CustomInput';
import EstateCard from '../../components/EstateCard';
import Page from '../../components/Page';
import colors from '../../config/colors';

// 
import testhouses from "../../config/testhouses"
import { GetApartments } from '../../connection/ApartmentsApi';

function Dashboard(props) {
    const navigation = useNavigation();
    const [searchModalVisible, setSearchModalVisible] = useState(false);

    // showing the refreshing sign while the Apartments are still loading
    const [refreshing, setRefreshing] = useState(false);

    // loading the content from the API
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        loadApartments();
    }, []);

    const loadApartments = async () => {

        const response = await GetApartments();

        setApartments(response);
    }

    return (
        <Page style={styles.container}>
            <View style={{ height: 250 }}>
                <ImageBackground
                    blurRadius={4}
                    resizeMode="stretch"
                    style={styles.backgroundimage}
                    source={require('../../../assets/images/estatevector.png')}>

                    <View style={styles.estateinfo}>
                        <Text style={styles.estatename} numberOfLines={1}>Estate Name</Text>
                        <Text style={styles.catchphrase} numberOfLines={1}>The Urban Living Experience</Text>

                    </View>

                </ImageBackground>
            </View>
            <View style={{ flex: 2, }}>
                {/* Search Section */}
                <View style={styles.searchsection}>
                    <TouchableWithoutFeedback onPress={() => setSearchModalVisible(true)}>
                        <CustomInput
                            color={colors.light}
                            borderRadius={25}
                            icon="home-search"
                            size={55}
                            empty="Search..."
                            editable={false}
                        />
                    </TouchableWithoutFeedback>
                </View>

                {/* Appartments Section */}
                <View style={styles.appartmentssection}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", paddingHorizontal: 15 }}>
                        <Text style={{ flex: 1, fontSize: 18, fontWeight: "bold" }}>Appartments</Text>
                        <TouchableOpacity onPress={() => setSearchModalVisible(true)}>
                            <Text style={{ color: colors.medium, fontSize: 15 }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appartments}>
                        <FlatList data={apartments}
                            horizontal
                            // allowing refresh
                            refreshing={refreshing}
                            keyExtractor={apartments => apartments.ApartmentId.toString()}
                            // rendering the items (using the display template)
                            renderItem={({ item }) =>
                                <EstateCard cutscreen
                                    title={item.ApartmentNo}
                                    subTitle={item.ApartmentStatus}
                                    image={item.Image}
                                    onPress={() => navigation.navigate("PreviewAppartment", { item })} />}

                            // hiding the scroll bar
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={{ paddingVertical: 10 }}
                            // seperating the components
                            ItemSeparatorComponent={
                                () => <View style={{ width: 20 }}></View>
                            }
                            // reloading the initial messages during refresh
                            onRefresh={() => loadApartments()}
                        />
                    </View>
                </View>
            </View>


            {/* the search modal popup */}
            <Modal visible={searchModalVisible} animationType="slide"
                swipeDirection="down"
                //swipeDirection={["up", "down", "left", "right"]}
                onSwipeComplete={(e) => { setSearchModalVisible(false); }}>

                <View style={styles.searchsection}>
                    <CustomInput
                        color={colors.light}
                        borderRadius={25}
                        icon="home-search"
                        size={55}
                        placeholder="Search..."
                    />
                </View>
                <View style={{ paddingHorizontal: 10, flex: 1 }}>
                    <FlatList data={apartments}
                        keyExtractor={apartments => apartments.ApartmentId.toString()}
                        // rendering the items (using the display template)
                        renderItem={({ item }) =>
                            <EstateCard title={item.ApartmentNo} subTitle={item.ApartmentStatus} image={item.Image} height={180} />}

                        // hiding the scroll bar
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{ paddingTop: 5 }}
                    />
                </View>
                <Button title="Close" onPress={() => setSearchModalVisible(false)} />

            </Modal>
        </Page >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundimage: {
        flex: 1,
        justifyContent: "center",
    },
    estateinfo: {
        alignSelf: "center",
        alignItems: "center"
    },
    estatename: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    catchphrase: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    searchsection: {
        paddingHorizontal: 10
    },
    appartmentssection: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    appartments: {
        // backgroundColor: "red",
    }
})

export default Dashboard;