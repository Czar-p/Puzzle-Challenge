import React, {useEffect,useState} from 'react';
import { FlatList, Image, View,Text,ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { width } from './utils';

const Carousel =({data=[],setListRef=()=>{}})=>{
    return(
        <FlatList
        ref={(ref)=>setListRef(ref)}
        data={data}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={
          ()=>(
            <View style={{justifyContent:'center',width:width}}>
              <Text style={{textAlign:'center',fontSize:20}}>Loading...</Text>
              <ActivityIndicator size="large" color="#034d71" />
            </View>
          )
        }
        renderItem={({item}) => {
          return (
            <View
              style={styles.carouselContainer}>
              <Image
                source={{uri: item}}
                style={styles.carouselImage}
              />
            </View>
          );
        }}
      />
    )
}
export default Carousel