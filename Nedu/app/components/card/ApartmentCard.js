import React from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colors from '../../config/colors';



// let statusColor="grey";
function ApartmentCard({status, image, title, onPress, width = 270, statusColor='grey'}) {

    // if(status.toLowerCase() == "active"){
    //     statusColor='#84ED88';
    // }
    // else if(status.toLowerCase() == "inactive"){
    //     statusColor='#F0665D';
    // }
    return (
      <View style={[styles.card, {width}]} >
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Image style={styles.image} source={image}/>
          <View style={styles.detailsContainer}>
              <Text style={styles.title}>
                  {title}
              </Text>
              <Text style={[styles.subTitle, {color :statusColor}]}>
                  {status}
              </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.primary,
        marginBottom: 20,
        overflow: "hidden",
        marginRight:15,
        height: 240,
      },
      detailsContainer: {
        padding: 10,
        
      },
      image: {
        width: "100%",
        height: 160,
        //height: "50%",
        opacity:0.7,
      },
      title: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
      },
      subTitle: {
        color: colors.secondary,
        fontWeight: "200",
      },
      container: {
        width:"100%"
      },
})
export default ApartmentCard;





