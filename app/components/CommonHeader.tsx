import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigateProps } from '../../type'

const CommonHeader = () => {
    const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backButton}>
        <MaterialCommunityIcons name='arrow-left' size={30} color={colors.lightGreen}/>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    logo: {
        width: 100,
        height: 100,
    },
    backButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    backText:{
        fontSize: 18,
        fontWeight: '600',
        color: colors.lightGreen,
    }
})

export default CommonHeader