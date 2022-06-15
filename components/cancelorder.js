import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import Prompt from 'react-native-prompt-crossplatform';



const ProductItem = props => {

  return (
    <View style={styles.product}>
      <View style={{
        backgroundColor: 'white',
        width: '9%',
        borderRightWidth: 1,
        justifyContent: 'center',
      }}>
        <Text style={styles.title}>{props.number}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.CustumerName}</Text>
      </View>
      <View
        style={styles.details} >
        <Text style={styles.title}>{props.PhoneNumber}</Text>
      </View>
      <View style={{
        backgroundColor: 'white',
        width: '20%',
        borderRightWidth: 1,
        justifyContent: 'center',
      }}>
        <Text style={styles.title}>{props.Order}</Text>
      </View>
      <View style={{
        backgroundColor: 'white',
        width: '30%',
        justifyContent: 'center',
        alignItems : 'center'
      }}>
        {props.btnfalse && (
          <TouchableOpacity style={styles.commentbtn}>
          <Button  color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => {props.CancelCommentOrder()}} title="Təstiq" />
        </TouchableOpacity>
        )}
      
        
        
      </View>
    </View>
    // <View style={styles.product}>
    //   <View style={styles.touchable}>
    //     <View>
    //       <View style={styles.details}>
    //         <Text style={styles.title}>{props.Date}</Text>
    //       </View>
    //       {/* <View style={styles.details}>
    //         <Text style={styles.title}>{props.title}</Text>
    //       </View>
    //       <View style={styles.details}>
    //         <Text style={styles.title}>{props.PhoneNumber}</Text>
    //       </View> */}
    //       {/* <View style={styles.actions}>


    //         </View> */}
    //     </View>

    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  commentbtn: {
    fontSize : 0.1,
    width: "70%",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
textAlign : 'center',
marginRight : 30,
    backgroundColor: "black",
  },
  product: {
    marginTop: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    margin: 5,
    flexDirection: 'row',
  },
  touchable: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  details: {
    borderRightWidth: 1,
    backgroundColor: 'white',
    width: '25%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    marginVertical: 4,
    marginBottom: 0,
    marginLeft: 10
  },
});

export default ProductItem;
