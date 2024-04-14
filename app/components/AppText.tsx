import React from 'react'
import { Text } from 'react-native'
import defaultStyles from '../config/defaultStyles'
import Style from '../utils/Style'



interface Props{
    label: string,
    style?: Style
}

const AppText = ({label, style}: Props) => {
  return (
    <Text style={[defaultStyles.text, style]}>{label}</Text>
  )
}

export default AppText