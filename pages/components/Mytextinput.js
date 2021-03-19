import React from 'react';
import {View,TextInput,disableAutoCapitalize ,disableAutoCorrect,notEditable} from 'react-native';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginTop: 10,
        borderColor: '#03A89E',
        borderWidth: 1,
        borderRadius:10,
      }}>
      <TextInput
        underlineColorAndroid="powderblue"//"transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#03A89E"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        // autoCapitalize={disableAutoCapitalize ? 'none' : 'words'}
        // autoCorrect={!disableAutoCorrect}
        // editable={true}
      />
    </View>
  );
};

export default Mytextinput;