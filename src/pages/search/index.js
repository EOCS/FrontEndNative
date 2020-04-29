import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './style'

function SearchScreen({ route, navigation }) {
  
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.TextInput}
          onChangeText={text => onChangeText(text)}
          value={value}
          autoFocus={true}
          clearButtonMode="always"
          placeholder="search"
          returnKeyType="search"
        />
        <Button style={styles.cancel} title="取消" onPress={() => navigation.goBack()} />
      </View>
      
      <Text>搜索内容 {value}</Text>
    </View>
  );
}

export default SearchScreen