import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from 'react-native';




const ProductItem = props => {


  let buttonstatus;
  if (props.StatusEnd === false && props.StatusStart === false)
    buttonstatus = true;
  else if (props.StatusEnd === false && props.StatusStart === true)
    buttonstatus = false
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.X_Name}>  </Text>
          </View>
          <View style={styles.actions}>
              <Button
                disabled={buttonstatus}
                color={'#e65825'}
                title="Sifariş Et"
                onPress={props.Basket}
              />

            </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    marginBottom: 0
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  }
});

export default ProductItem;
