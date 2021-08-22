import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import Button from '../Button'

const NavList = ({itemSelected}) => {
    
    const navItems = [
        {
        id: 1,
        text: 'All',
        color: colors.primary,
        active: true
    },
        {
        id: 2,
        text: "Announcement",
        color: colors.green,
        active: false
    },
        {
        id: 3,
        text: "SOS",
        color: colors.red,
        active: false
    },
        {
        id: 4,
        text: "Guest",
        color: colors.primary,
        active: false
    },
    ]
    const [data, setData] = useState(navItems);
    const onPressHandler = (items) =>{
        let itemName = ""
        const selectedItem = navItems.map((state) =>{
            if (state.id === items.id){
                itemName = state.text
                return{
                    ...state,
                    active: true
                }
            }
            else{
                return{
                    ...state,
                    active: false
                }
            }
        });
        setData(selectedItem)
        itemSelected((itemName.toLowerCase() === "all") ? null : itemName)
    }
    return (
        <View style={styles.container}>
            {
              data.map((item) =>(
                <Button key={item.id.toString()}
                    borderRadius={15}
                    color={(item.active === true) ? "#fff" : item.color}
                    paddingVertical={13}
                    paddingHorizontal= {(item.id === 1) ? 10 : 0}
                    marginHorizontal={10}
                    fontSize={15}
                    height={20}
                    backgroundColor={(item.active === true) ? item.color : "transparent"}
                    text={item.text}
                    borderColor="#D4DFEC"
                    borderWidth={1}
                    onPress={() => onPressHandler(item)}
                    />
              ))  
            }
            
        </View>
    )
}

export default NavList

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginHorizontal: 24,
        justifyContent: "space-between",
        marginLeft: 8,
        marginBottom: 20
    }
})
