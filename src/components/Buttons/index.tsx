import React, {useEffect,useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeBlock} from '../../store/images/actions';
import Button from './elements/button';
import { styles } from "./styles";
const Buttons = () => {
  
  const {
    images: {currentBlock},
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const iterateBlock = (index: number) => {
    dispatch(changeBlock(index));
  };
  return (
    <View
      style={styles.btnContainer}>
      <Button title="Previous Block" iterateBlock={iterateBlock} isDisable={currentBlock ===1} currentBlock={currentBlock} />
      <Button title="Next Block" iterateBlock={iterateBlock} isDisable={currentBlock ===4} currentBlock={currentBlock} goNext />
    </View>
  );
};
export default Buttons;
