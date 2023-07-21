import { View, Text } from 'react-native'
import React, { FC, useMemo } from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import createStyles from './styles'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

interface IProps { 
  //navigation: NavigationProp<ParamListBase>
}

const LoadingScreen: FC<IProps> = (props) => {
  const styles = useMemo(() => createStyles(), []);
  const userState = useAppSelector(state => state.userState)
  const dispatch = useAppDispatch()
  return (
    <View style={styles.body}>
      <Text style={styles.text}>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen