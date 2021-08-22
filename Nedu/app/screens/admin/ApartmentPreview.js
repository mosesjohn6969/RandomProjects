import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';


import Screen from '../../components/Screen';
import ApartmentCard from '../../components/card/ApartmentCard';


function ApartmentPreviewScreen({route}) {
    const listing = route.params;
    return (
        <Screen>  
        <View style={{flexDirection:"row", paddingHorizontal:18, paddingTop:20}}> 
                
            <View style={{flexGrow:1, marginBottom: 20}}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <MaterialCommunityIcons color="black" name="arrow-left" size={25}/>
                    </TouchableOpacity>
            </View>

            <View style={{}}>
                    <TouchableOpacity onPress = {() => navigation.navigate("Notification")}>
                        <MaterialCommunityIcons  color="grey" name="bell-outline" size={25} />
                    </TouchableOpacity>
            </View>
                                  
        </View>
        <View style={{marginHorizontal:20, alignItems:"center" }}>      
            <ApartmentCard 
                title = {listing.title}
                status= {listing.status}
                image = {listing.image}
                statusColor ="#84ED88"
                
                
                />
        </View> 
        
        <View style={{flexDirection:"row", paddingHorizontal:40, paddingTop:20, width:"100%"}}> 
                
            <View style={{paddingRight: 70, alignItems:"center", justifyContent:"center", alignSelf:"center", alignContent:"center"}}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <MaterialCommunityIcons color={colors.primary} name="shield-outline" size={40}/>
                        <Text style={{color:colors.primary}}>Active Codes</Text>
                    </TouchableOpacity>
            </View>

            <View style={{paddingRight: 70, alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <MaterialCommunityIcons color={colors.primary} name="account-check" size={40}/>
                        <Text style={{color:colors.primary}}>Accounts</Text>
                    </TouchableOpacity>
            </View>

            <View style={{paddingRight: 0, alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity onPress = {() => navigation.navigate("Notification")}>
                        <MaterialCommunityIcons  color={colors.primary} name="bell-outline" size={40} />
                        <Text style={{color:colors.primary}}>Notifications</Text>
                    </TouchableOpacity>
            </View>
            
                                  
        </View>
        <View style={{height:1.5, width:"100%", backgroundColor:colors.lighGrey, marginHorizontal:30, marginTop:15, marginRight:50}}></View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "70%",
    },
    detailsContainer: {
        paddingTop:10,
        paddingHorizontal: 20,

    },
    title: {
        fontSize: 34,
        fontWeight: "500"

    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize:20,
        marginVertical:10,
        marginBottom: 20,

    },

})

export default ApartmentPreviewScreen;