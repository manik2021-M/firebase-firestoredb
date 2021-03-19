import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewAllUser from './pages/ViewAllUser';
import ViewUser from './pages/ViewUser';
import DeleteUser from './pages/DeleteUser';
import RealTimeAddUpdateUser from './pages/RealTimeAddUpdateUser';
import AddOrderSummary from './pages/AddOrderSummary';
import Searchfilter from './pages/Searchfilter'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUser}
          options={{title: 'Update'}}
        />
        <Stack.Screen
          name="ViewAllUser"
          component={ViewAllUser}
          options={{title: 'View All'}}
        />
        <Stack.Screen
          name="ViewUser"
          component={ViewUser}
          options={{title: 'View'}}
        />
        <Stack.Screen
          name="DeleteUser"
          component={DeleteUser}
          options={{title: 'Delete'}}
        />
        <Stack.Screen
          name="RealTimeAddUpdateUser"
          component={RealTimeAddUpdateUser}
          options={{title: 'Real Time Updates'}}
        />
        <Stack.Screen
          name="AddOrderSummary"
          component={AddOrderSummary}
          options={{title: 'Add Order Summary'}}
        />
        <Stack.Screen
          name="Searchfilter"
          component={Searchfilter}
          options={{title: 'Your turn'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





















































































































































// import React, {useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image,Button,
//   TouchableOpacity,
// } from 'react-native';

// const App = () => {
//   // To set the default Star Selected
//   const [defaultRating, setDefaultRating] = useState(3);
//   // To set the max number of Stars
//   const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5,6]);
//   const [name,setName]=useState({name1:"huja",age1:40});
// const Parray=[2,3,4,5];
// const Carray=Parray.map(food=>{
//   return(food+3);
// });
// console.log(Carray);
//   // Filled Star. You can also give the path from local
//   const starImageFilled =
//     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
//   // Empty Star. You can also give the path from local
//   const starImageCorner =
//     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
// const handlePress=()=>{
//   setName({name1:"aahuja",age1:49});
// }
//   const CustomRatingBar = () => {
//     return (
//       <View style={styles.customRatingBarStyle}>
//         {maxRating.map((item, key) => {
//           return (
//             <TouchableOpacity
//               activeOpacity={0.7}
//               key={item}
//               onPress={() => setDefaultRating(item)}>
//               <Image
//                 style={styles.starImageStyle}
//                 source={
//                   item <= defaultRating
//                     ? {uri: starImageFilled}
//                     : {uri: starImageCorner}
//                 }
//               />
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           React Native Custom Star Rating Bar{name.age1}
//         </Text>
//         <Button title="hj" onPress={handlePress}></Button>
//         <Text style={styles.textStyle}>
//           How was your experience with us
//         </Text>
//         <Text style={styles.textStyleSmall}>
//           Please Rate Us
//         </Text>
//         {/* View to hold our Stars */}
//         <CustomRatingBar />
//         <Text style={styles.textStyle}>
//           {/* To show the rating selected */}
//           {defaultRating} / {Math.max.apply(null,maxRating)}
//         </Text>
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={() => alert(defaultRating)}>
//           {/* Clicking on button will show the rating as an alert */}
//           <Text style={styles.buttonTextStyle}>
//             Get Selected Value1
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
//   titleText: {
//     padding: 8,
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 23,
//     color: '#000',
//     marginTop: 15,
//   },
//   textStyleSmall: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#000',
//     marginTop: 15,
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     marginTop: 30,
//     padding: 15,
//     backgroundColor: '#8ad24e',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   customRatingBarStyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     marginTop: 30,
//   },
//   starImageStyle: {
//     width: 40,
//     height: 40,
//     resizeMode: 'cover',
//   },
// });



// import React, {useState, useEffect} from 'react';
// import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
// export default function App(){
//   const [currentDate, setCurrentDate] = useState('23-10-1993');

//   useEffect(() => {
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
//     var sec = new Date().getSeconds(); //Current Seconds
//     setCurrentDate(
//       date + '-' + month + '-' + year 
//       + ' =>' + hours + ':' + min + ':' + sec
//     );
//   }, []);

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Text style={styles.textStyle}>
//             Current Date Time
//           </Text>
//           <Text style={styles.textStyle}>
//             {currentDate}
//           </Text>
//         </View>
       
        
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: 'black',
//   },
// });

