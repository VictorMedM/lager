import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import config from '../config/config.json';

function StockList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

  const list = products.map((product, index) => <Text key={index} >{ product.name } - { product.stock }</Text>
);

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock() {
  return (
    <View>
          <Text style={styles.stockHeader}>Lagerförteckning</Text>
          
            <StockList/>
      </View>
  );
}

const styles = StyleSheet.create({
    stockHeader: {
        color: '#222', 
        fontSize: 24,
        textDecorationLine: 'underline',
        paddingBottom: 5
    },
});