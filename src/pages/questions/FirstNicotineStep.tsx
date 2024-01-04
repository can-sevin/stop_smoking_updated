import React, { useState } from "react"
import { Text, StyleSheet, TouchableOpacity, View, StatusBar } from "react-native"
import * as Animatable from 'react-native-animatable'
import I18n from '../../lang/_i18n'
import Video from "react-native-video"

const questions = [
  {
    question: I18n.t('first_nicotine_question'),
    options: [
      { text: I18n.t('first_nicotine_question_a'), points: 3 },
      { text: I18n.t('first_nicotine_question_b'), points: 2 },
      { text: I18n.t('first_nicotine_question_c'), points: 1 },
      { text: I18n.t('first_nicotine_question_d'), points: 0 },
    ],
  },
  {
    question: I18n.t('second_nicotine_question'),
    options: [
      { text: I18n.t('second_nicotine_question_a'), points: 1 },
      { text: I18n.t('second_nicotine_question_b'), points: 0 },
    ],
  },
  {
    question: I18n.t('third_nicotine_question'),
    options: [
      { text: I18n.t('third_nicotine_question_a'), points: 1 },
      { text: I18n.t('third_nicotine_question_b'), points: 0 },
    ],
  },
  {
    question: I18n.t('forth_nicotine_question'),
    options: [
      { text: I18n.t('forth_nicotine_question_a'), points: 3 },
      { text: I18n.t('forth_nicotine_question_b'), points: 2 },
      { text: I18n.t('forth_nicotine_question_c'), points: 1 },
      { text: I18n.t('forth_nicotine_question_d'), points: 0 },
    ],
  },
  {
    question: I18n.t('fifth_nicotine_question'),
    options: [
      { text: I18n.t('fifth_nicotine_question_a'), points: 1 },
      { text: I18n.t('fifth_nicotine_question_b'), points: 0 },
    ],
  },
  {
    question: I18n.t('sixth_nicotine_question'),
    options: [
      { text: I18n.t('sixth_nicotine_question_a'), points: 1 },
      { text: I18n.t('sixth_nicotine_question_b'), points: 0 },
    ],
  },
];

const FirstNicotineStep = (props: any) => {
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);

  const handleOptionSelect = (point:number) => {
    setPoints(points + point);
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      props.navigation.navigate('SecondStep',{ points: points });
    }
  };
  
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
        <Animatable.View animation='fadeInDown' style={styles.inside_container}>
        <Text style={styles.anim_text_middle}>
          {questions[index].question}
        </Text>
        <View>
          {questions[index].options.map((option, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleOptionSelect(option.points)}
            >
              <Text style={styles.anim_text_option}>
                {option.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animatable.View>
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
  anim_text_option:{
    fontSize: 20,
    color: '#f5f5f5',
    marginLeft: 20,
    textAlign: 'center',
    alignContent: 'center',
    marginHorizontal: 8,
    marginVertical: 12,
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
  touchable_option:{
    alignSelf: 'center',
    width: '80%'
  },
  text_question:{
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
export default FirstNicotineStep
