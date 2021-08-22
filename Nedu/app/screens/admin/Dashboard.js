import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Screen from '../../components/Screen';

// import yup for form validation
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActivityCard from '../../components/card/ActivityCard';
import Validation from '../../components/card/Validation';
import ApartmentCard from '../../components/card/ApartmentCard';
import routes from '../../navigation/routes';
import colors from '../../config/colors';
import { DrawerActions } from '@react-navigation/routers';
import Card from '../../components/card/Card';
import ListItemSeperator from '../../components/ListItemSeparator';


const listings =[
    {
        id: 1,
        title: 'Apartment 1A',
        status: "Active",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 2,
        title: 'Apartment 1B',
        status: "Inactive",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 3,
        title: 'Apartment 1C',
        status: "Active",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 4,
        title: 'Apartment 1A',
        status: "Active",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 5,
        title: 'Apartment 1B',
        status: "Inactive",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 6,
        title: 'Apartment 1C',
        status: "Active",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 7,
        title: 'Apartment 1A',
        status: "Active",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 8,
        title: 'Apartment 1B',
        status: "Inactive",
        image: require('../../../assets/images/001.jpg')
    },
    {
        id: 9,
        title: 'Apartment 1C',
        status: "Active",
        image: require('../../../assets/images/001.jpg')
    },
]


const activities =[
    {
        id: 1,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 2,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 3,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },    
    {
        id: 4,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 5,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 6,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 7,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 8,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 9,
        title: 'Chinedu Ezeh',
        subTitle: "Apartment 2c",
        icon: "checkbox-marked",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
]


// the validation syntax using yup


function AdminDashboardScreen({ navigation}) {
    return (
            <View style={{paddingVertical:20, height:"100%", backgroundColor:"#E8F1FF", paddingBottom:50}} >
                <View style={{flexDirection:"row", paddingHorizontal:18, paddingTop:20}}> 
                
                <View style={{flexGrow:1}}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <MaterialCommunityIcons color="black" name="menu" size={25}/>
                    </TouchableOpacity>
                    </View>

                    <View style={{}}>
                    <TouchableOpacity onPress = {() => navigation.navigate("Notification")}>
                        <MaterialCommunityIcons  color="grey" name="bell-outline" size={25} />
                    </TouchableOpacity>
                </View>
                                  
                </View>
                <View style={{marginHorizontal:20, marginTop:30}}>
                    <Text style={{color:"grey", marginVertical:5, fontSize:12}}>Welcome back,</Text>
                    <Text style={{ fontWeight:"bold", fontSize:20, marginBottom:10}}>Christopher</Text>
                    <TextInput fontSize={13} style={styles.TextInput} placeholder="Search" />    
                </View>            

                <Screen paddingTop={3} scroll style={{ paddingHorizontal: 20, backgroundColor:"#E8F1FF", marginTop:1}}>
                        <FlatList showsVerticalScrollIndicator={false} data= {listings}
                        keyExtractor = {listing => listing.id.toString()}
                        renderItem = {({item}) =>
                    
                            <ApartmentCard 
                                title = {item.title}
                                status= {item.status}
                                image = {item.image}
                                statusColor ="#84ED88"                                
                                onPress = {() => navigation.navigate(routes.LISTING_DETAILS, item)}/>
                        }
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style ={{ flexDirection:"row", marginTop: 20}}
                        />
                    <View  style={{backgroundColor:"white", borderRadius:25, paddingHorizontal:15, marginVertical:8}}>
          
                    <Text style= {{marginVertical:10, color:"grey", fontSize:12}}>RECENT VALIDATIONS</Text>
                    <FlatList bounces scrollEnabled={false} showsVerticalScrollIndicator={false} data= {activities}
                        keyExtractor = {activity => activity.id.toString()}
                        ItemSeparatorComponent={ListItemSeperator}
                        renderItem = {({item}) =>    
                        <Card 
                        title = {item.title}
                        subtitle = {item.subTitle}
                        icon = {item.icon}
                        status= {item.status}
                        color = {item.color}
                        date= {item.date}
                        backgroundColor = {item.backgroundColor}
                        onPress = {() => console.log("hello")}/>
        }
                        showsHorizontalScrollIndicator={false}
        />                   

                    </View>
                </Screen>

                
                
            </View>
    );
}

const styles = StyleSheet.create({
    
    TextInput: {
        borderColor: "lightgrey",
        width: "100%",
        height:37,
        borderRadius:10,
        backgroundColor:colors.white,
        textAlign:"left",
        padding:8,
        marginTop:10,
    },
})
export default AdminDashboardScreen;



