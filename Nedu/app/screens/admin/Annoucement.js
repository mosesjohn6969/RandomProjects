import React from 'react';
import { View, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import ActivityCard from '../../components/card/ActivityCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const activities =[
    {
        id: 1,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
    {
        id: 2,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
    {
        id: 3,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },    
    {
        id: 4,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
    {
        id: 5,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
    {
        id: 6,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
    {
        id: 7,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
    {
        id: 8,
        type : 'Announcements',
        title: 'General Announcement',
        subTitle: "Admin",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
]

function AnnoucementScreen({navigation}) {
    return (
        <Screen backgroundColor="#F5F9FF">
        <View style={{flexDirection:"row", paddingHorizontal:18, paddingTop:20, marginBottom:35}}> 
                
                <View style={{flexGrow:1}}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <MaterialCommunityIcons color="grey" name="arrow-left" size={30}/>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress = {() => navigation.navigate("Notification")}>
                        <MaterialCommunityIcons  color="grey" name="bell-outline" size={30} />
                    </TouchableOpacity>
                </View>
                                  
        </View>
        <View style = {{flexDirection:"row", marginHorizontal:24,  justifyContent: "space-between", marginLeft:8, marginBottom:30}}>
        
        <Button borderRadius={10} color={colors.primary} paddingVertical={13} marginHorizontal={12} fontSize={15} height={20} backgroundColor="transparent" borderColor="#D4DFEC"  borderWidth={1} paddingHorizontal={10} text="All" onPress = {() => navigation.push("Notifications")}/>
        <Button borderRadius={10} color="white" marginHorizontal={10} paddingVertical={13} fontSize={15} height={20} backgroundColor="green" text="Announcements" borderColor="#D4DFEC" borderWidth={1} onPress = {() => navigation.push("Announcement")}/>
        <Button borderRadius={10} color="red" marginHorizontal={10} paddingVertical={13} fontSize={15} height={20} backgroundColor="transparent" text="SOS" borderColor="#D4DFEC" borderWidth={1} onPress = {() => navigation.push("Sos")}/>
        <Button borderRadius={10} color={colors.primary} paddingVertical={13} marginHorizontal={10} fontSize={15} height={20} backgroundColor="transparent" text="Guest" borderColor="#D4DFEC" borderWidth={1} onPress = {() => navigation.push("Guest")}/>
        </View>


        <View style={{paddingHorizontal:20, marginBottom:2}}>
        
        <FlatList bounces showsVerticalScrollIndicator={false} data= {activities}
        keyExtractor = {activity => activity.id.toString()}
        renderItem = {({item}) =>
    
            <ActivityCard 
                title = {item.title}
                subtitle = {item.subTitle}
                icon = {item.icon}
                type= {item.type}
                status= {item.status}
                color = {item.color}
                date= {item.date}
                time= {item.time}
                backgroundColor = {item.backgroundColor}
                onPress = {() => navigation.navigate(routes.LISTING_DETAILS, item)}/>
        }
        showsHorizontalScrollIndicator={false}
        />                
        
        </View>
        </Screen>

        
    );
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
    }
})
export default AnnoucementScreen;














