import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text,Button} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  


import {BgImage} from '../../component/ImageContainer';
import CONSTANT from '../../constants';

const QuranScreen = ({navigation}) => {  
  const [isModalVisible, setModalVisible] = useState(false);
  const [listChapter,setListChapter]=useState([])
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(()=>{
    getListChapter()
  },[])
const getListChapter=async()=>{
  try{
const responseJson=await fetch('https://api.quran.com/api/v4/chapters?language=ur')
const result=await responseJson.json()
  setListChapter(result.chapters)
  // console.log(result)


  }catch(err){
    console.log(err)
  }
}
  return (
    <BgImage>
      <ScrollView >
      <TouchableOpacity onPress={toggleModal}>
        <Text style={{color:'#FFFFFF'}}>Select Lang</Text>
      </TouchableOpacity>
      {/* <Text style={{color: 'white'}}>QuranScreen</Text> */}
<View style={{marginTop:10}}>
  {
    listChapter.map(item=>{
      // console.log(item.id)
      return(
        <TouchableOpacity style={styles.textmode} key={item.id} onPress={()=>navigation.navigate(CONSTANT.App.screenNames.QuranTransScreen)}>
        <View>
        <Text style={{fontSize:20,color:'#FFFFFF'}}>{item.name_complex}</Text>

        </View>
        <View>
        <Text style={{fontSize:24,color:'#FFFFFF'}}>{item.name_arabic}</Text>

</View>
      </TouchableOpacity>

      )
    })
  }
      </View>
</ScrollView>
<Modal isVisible={isModalVisible}>
        <View style={{flex: 1,position:'absolute',top:30,width:'100%',height:400,backgroundColor:'#FFFFFF'}}>

          <Button title="Hide modal" onPress={toggleModal} />

          <CircleCheckBox
  checked={true}
  onToggle={(checked) => console.log('My state is: ', checked)}
  labelPosition={LABEL_POSITION.RIGHT}
  label="Checkbox example"
/>

        </View>
        </Modal>

    </BgImage>
  );
};

export default QuranScreen;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
  textmode:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});
