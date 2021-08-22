import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import ActivityCard from '../../components/card/ActivityCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-navigation';
import NavList from '../../components/list/NavList';
import Header from '../../navigation/Header';


const activities = [
    {
        id: 1,
        type: 'Guest',
        title: 'Dstv Installation',
        subTitle: "Apartment 2c",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
    {
        id: 2,
        type: 'SOS',
        title: 'Fire Outbreak',
        subTitle: "Apartment 3A",
        icon: "bell-outline",
        date: '02/08/21',
        time: '5:00am',
        color: "#D43C30",
        backgroundColor: "#FBBEBE"
    },
    {
        id: 3,
        type: 'Announcement',
        title: 'Apartment 1C',
        subTitle: "Apartment 2A",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    },
    {
        id: 4,
        type: 'Guest',
        title: 'Apartment 1C',
        subTitle: "Apartment 1A",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    }, {
        id: 5,
        type: 'Guest',
        title: 'Apartment 1C',
        subTitle: "Apartment 1A",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    }, {
        id: 6,
        type: 'Guest',
        title: 'Apartment 1C',
        subTitle: "Apartment 1A",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    }, {
        id: 7,
        type: 'Guest',
        title: 'Dstv Installation',
        subTitle: "Apartment 2c",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    }, {
        id: 8,
        type: 'SOS',
        title: 'Fire Outbreak',
        subTitle: "Apartment 3A",
        icon: "bell-outline",
        date: '02/08/21',
        time: '5:00am',
        color: "#D43C30",
        backgroundColor: "#FBBEBE"
    }, {
        id: 9,
        type: 'Announcement',
        title: 'Apartment 1C',
        subTitle: "Apartment 2A",
        icon: "bullhorn-outline",
        color: "#079404",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#CEFFD9"
    }, {
        id: 10,
        type: 'Guest',
        title: 'Apartment 1C',
        subTitle: "Apartment 1A",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    }, {
        id: 11,
        type: 'Guest',
        title: 'Apartment 1C',
        subTitle: "Apartment 1A",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    }, {
        id: 12,
        type: 'Guest',
        title: 'Apartment 1C',
        subTitle: "Apartment 1A",
        icon: "briefcase-outline",
        color: "#00286B",
        date: '02/08/21',
        time: '5:00am',
        backgroundColor: "#F5F9FF"
    },
]


function NotificationScreen({navigation}) {
    const [data, setData] = useState(activities)

    const notifcationFilterHandler = (category) => {

        const newActivity = category ? activities.filter((activity) => activity.type.toLowerCase() === category.toLowerCase()) : null
        if (newActivity) {
            setData(newActivity)
        } else {
            setData(activities)
        }
    }
    return (
        <Screen>    
            <Header notification={false} back navigation={navigation}/>
            <NavList itemSelected={(text) =>{
                notifcationFilterHandler(text)
                }}/>
            <SafeAreaView style={{paddingHorizontal: 20, paddingBottom: 100}}>
                <FlatList bounces
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor=
                    {i => i.id.toString()}
                    refreshing
                    renderItem=
                    {({item}) =>
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
                            onPress = {() => console.log("Notification clicked")}/>
                        }
                    showsHorizontalScrollIndicator={false}
                    bounces/>
            </SafeAreaView>
        </Screen>


    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})
export default NotificationScreen;
