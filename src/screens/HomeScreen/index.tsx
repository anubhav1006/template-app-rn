import { View, Text, ImageBackground } from 'react-native'
import React, { FC, useMemo } from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import createStyles from './styles'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { tan_inverse_logo } from '../../assets/images'

interface IProps { 
  //navigation: NavigationProp<ParamListBase>
}

const HomeScreen: FC<IProps> = (props) => {
  const styles = useMemo(() => createStyles(), []);
  const userState = useAppSelector(state => state.userState)
  const dispatch = useAppDispatch()
  return (
    <View style={styles.body}>
      <ImageBackground source={tan_inverse_logo} style={styles.image}>
      <Text style={styles.text}>HomeScreen</Text>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen