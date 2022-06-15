import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from 'react-native';




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
      <View
        style={styles.details} >
        <Text style={styles.title}>{props.Date}</Text>
      </View>
      <View
        style={styles.details} >
        <Text style={styles.title}>{props.Calc}</Text>
      </View>
      <View style={{
        backgroundColor: 'white',
        width: '34%',
        justifyContent: 'center',
      }}>
        <Text style={styles.title}>{props.Take}</Text>
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
    width: '30%',
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
