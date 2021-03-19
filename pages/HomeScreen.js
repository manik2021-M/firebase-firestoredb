import React from 'react';
import {View,Text, ScrollView,Dimensions, KeyboardAvoidingView} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

const HomeScreen = (props) => {
  
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
    <View
      style={{
        flex:1,
        backgroundColor: 'white',
        //flexDirection: 'column',
        paddingHorizontal: 40,
      }}>
        
        <View style={{height:60}}>
      <Mytext text="Firebase Cloud Firestore Database Example" />
      </View>
      <Mybutton
        customClick={
          () => props.navigation.navigate('RegisterUser')
        }
        title="Register1 (Add a Document)"
      />
      <Mybutton
        title="Update (Update any Field of Document)"
        customClick={
          () => props.navigation.navigate('UpdateUser')
        }
      />
      <Mybutton
        title="View (View a Single Document Record)"
        customClick={
          () => props.navigation.navigate('ViewUser')
        }
      />
      <Mybutton
        title="View All (View All Document Records)"
        customClick={
          () => props.navigation.navigate('ViewAllUser')
        }
      />
      <Mybutton
        title="Delete (Remove a Document/Field)"
        customClick={
          () => props.navigation.navigate('DeleteUser')
        }
      />
      <Mybutton
        title="Real Time Updates"
        customClick={
          () => props.navigation.navigate('RealTimeAddUpdateUser')
        }
      />
      <Mybutton
        title="Add Collection Under Document"
        customClick={
          () => props.navigation.navigate('AddOrderSummary')
        }
      />
      <Mybutton
        title="API post searchfilter"
        customClick={
          () => props.navigation.navigate('Searchfilter')
        }
      />
    </View>
    </ScrollView>
  );
};

export default HomeScreen;