

import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
const Button=(props:any)=> {
    const {isDisable,title,iterateBlock,currentBlock,goNext} = props
    return (
        <TouchableOpacity
        disabled={isDisable}
        onPress={() => {
          iterateBlock(goNext ? currentBlock + 1:currentBlock - 1);
        }}
        style={[
          styles.btn,
          isDisable && styles.disable,
        ]}>
        <Text style={styles.txt}>
          {title}
        </Text>
      </TouchableOpacity>
    )
}
export default Button
