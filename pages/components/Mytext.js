import React,{useEffect,useState} from 'react';
import {Text,StyleSheet} from 'react-native';

const Mytext = (props) => {
         const [showText,setShowText]=useState(false);
           useEffect(() => {
            const time=setInterval(()=>{
             setShowText((showText) => !showText);
              },500);
             return()=>clearInterval(time);
            }, []);
  return  (
  <Text style={[styles.text1,
    // {
    //   transform:[{rotate:'45deg'}]
    // },
         {display: showText ? 'none' : 'flex'}
  ]}>{props.text}</Text>);
};

const styles = StyleSheet.create({
  text1: {
    color: 'green',
    fontSize: 18,
    marginTop: 16,
    fontFamily:"sans-serif-light"
    //backgroundColor:'red'
  },
});

export default Mytext;