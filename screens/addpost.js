/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';



//Styling imports
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


import {} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



import PagerView from 'react-native-pager-view';


import Icon from 'react-native-vector-icons/Ionicons';


import BasicInfo from '../components/addpost/basicinfo';
import Bidding from '../components/addpost/bidding';
import UserInfo from '../components/addpost/userinfo';
import Footer from '../components/addpost/footer';

const App = ({ navigation }) => {
// View pager reference
    const pageRef = useRef(null);

  //Change reference to current page
  const handleChange = pageNum => {
    pageRef.current.setPage(pageNum);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1, width: '100%', backgroundColor: 'gray' }}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="arrow-back-sharp" size={20} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 12, marginLeft: 10 }}>
              Add posts
            </Text>
          </View>
          <PagerView
              initialPage={0}
              ref={pageRef}
              transitionStyle="curl"
              scrollEnabled={false}
              style={{
                flex: 1,
                height: hp(95),
                width: '100%',
                backgroundColor: 'white',
              }}>
                  <View key="0">
                    <BasicInfo/>
                    <Footer
                  backgroundColor="#0077f9"
                  // Only writing the label
                  // OnPress is available for future uses
                  leftButtonLabel={null}
                  //write the icon name
                  // only from ionicons
                  centertext="Step One"
                  button="chevron-forward"
                  rightButtonPress={() => {
                    handleChange(1);
                  }}
                />
                  </View>

                  <View key="1">
                    <Bidding />
                    <Footer
                    backgroundColor="#0077f9"
                    leftButtonLabel="chevron-back"
                    leftButtonPress={()=>{
                      handleChange(0);
                    }}
                    centertext="Step Two"
                    button="chevron-forward"
                    rightButtonPress={()=>{
                      handleChange(2);
                    }}
                    />
                  </View>

                  <View key="2">
                    <UserInfo/>
                    <Footer
                    backgroundColor="#0077f9"
                    leftButtonLabel="chevron-back"
                    leftButtonPress={()=>{
                      handleChange(1);
                    }}
                    centertext="Final Step"
                    button="chevron-forward"
                    rightButtonPress={()=>{
                      navigation.pop();
                    }}
                    />
                  </View>
            </PagerView>
        </View>
      </ScrollView>
      <StatusBar translucent={false} backgroundColor="black" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  mainContainer: {
      flex: 1,
      width: '100%',
      paddingTop:hp(5),
      backgroundColor:'white',
  },
  spacing: {
    paddingVertical: hp(1.5),
  },
});
export default App;
