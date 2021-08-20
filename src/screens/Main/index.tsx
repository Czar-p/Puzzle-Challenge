import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../store/images/actions';
import {Buttons,Carousel} from "../../components";

const Main = () => {
    const [listRef,setListRef] =useState(null)
    const {
      images: {data,currentBlock},
    } = useSelector(state => state);
    
    const dispatch = useDispatch();
  
    useEffect(() => {
      if(listRef) listRef.scrollToIndex({animated: true, index: 0})
      dispatch(fetchImages());
    }, [currentBlock]);
  
    

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E8E8EB'}}>
        <StatusBar hidden />
        <Text style={{color: 'black',textAlign:'center',fontSize:28}}>{data.length > 0 && data[currentBlock].title}</Text>
        <Carousel data={data.length > 0 ?data[currentBlock].images: []} setListRef={setListRef}/>
        <Buttons/>
      </SafeAreaView>
    );
  };
  export default Main