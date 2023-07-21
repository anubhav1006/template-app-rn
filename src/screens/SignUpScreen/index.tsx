import { View, Text } from 'react-native'
import React, { FC, useMemo } from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import createStyles from './styles'

interface IProps { 
  navigation: NavigationProp<ParamListBase>
}

const SignUpScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), [])
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SignUpScreen</Text>
    </View>
  )
}

export default SignUpScreen