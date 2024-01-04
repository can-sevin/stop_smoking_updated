import React, { useState } from "react"
import { Image, Text, StyleSheet, TextInput, TouchableOpacity, View, StatusBar } from "react-native"
import * as Animatable from 'react-native-animatable'
import I18n from '../../lang/_i18n'
import Video from "react-native-video"

const FirstStep = (props: any) => {
  const [perOfDay, setPerOfDay] = useState(0)
  const nicotinePoints = props.route.params.points;
  const buttonClickedHandler = () => {
    props.navigation.navigate('SecondStep',{ perOfDay: perOfDay, nicotinePoints: nicotinePoints })
  }

  return (
    <>
      <View style={ styles.container }>
        <StatusBar translucent backgroundColor="transparent" />
        <>
          <Video
            repeat
            resizeMode={ 'cover' }
            style={ styles.video }
            muted
            source={ require('../../../assets/imgs/pexels.mp4') }
          />
        </>
        <>
          <Animatable.View animation='bounceInDown' style={ styles.inside_container }>
            <Text style={ styles.anim_text_middle }>
              { I18n.t('first_question') }
            </Text>
            <View>
              <TextInput placeholderTextColor={ '#f5f5f5' } selectionColor={ '#f5f5f5' } placeholder='__' autoFocus={ true }
                maxLength={ 2 } keyboardType={ "number-pad" }
                style={ styles.inputText } onChangeText={ (val) => setPerOfDay(parseInt(val, 10)) }/>
            </View>
            <TouchableOpacity
              disabled={ perOfDay === 0 }
              onPress={ buttonClickedHandler }
              style={ styles.roundButton2 }>
              <Image style={ styles.button_img } source={ require('../../../assets/imgs/next.png') }/>
            </TouchableOpacity>
          </Animatable.View>
        </>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  video:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  inside_container:{
    backgroundColor: 'transparent',
    borderRadius: 16,
    height: 320,
    justifyContent: 'space-between',
  },
  anim_text_middle:{
    fontSize: 24,
    color: '#f5f5f5',
    marginLeft: 20,
    textAlign: 'center',
    alignContent: 'center',
    marginHorizontal: 8,
    marginVertical: 24,
    fontFamily: 'Nunito-Bold',
    alignSelf: 'center',
  },
  roundButton2: {
    margin: 20,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderColor: '#323232',
    borderWidth: 0.2,
    borderRadius: 100,
    backgroundColor: '#f5f5f5',
  },
  button_img:{
    height: 36,
    width: 36
  },
  inputText:{
    marginVertical: 12,
    fontSize: 40,
    minWidth: 64,
    minHeight: 64,
    lineHeight: 64,
    padding: 10,
    fontFamily: 'Nunito-Bold',
    color: '#f5f5f5',
    alignSelf: 'center',
    textAlign: 'center',
  }
})
export default FirstStep
