import { StyleSheet } from "react-native";
import { width,imgHeight,imgWidth } from "./utils";
export const styles = StyleSheet.create({
    carouselContainer:{
       width,
       justifyContent: 'center',
       alignItems: 'center',
   },
   carouselImage:{
       width: imgWidth,
       height: imgHeight,
       resizeMode: 'cover',
       borderRadius: 16,
     }
})