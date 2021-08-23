import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReadMoreComp = ({testFunc, open}) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={open === '123' ? undefined : 2}
        style={{lineHeight: 21, color: '#fff'}}>
        Qurbani, udhiyah in Arabic, means sacrifice. Every Eid ul-Adha, Muslims
        sacrifice a goat, sheep, cow or camel – or pay to have one slaughtered
        on their behalf. The act honours the Prophet Ibrahim’s willingness to
        sacrifice his son Ismail in obedience to God. By making qurbani, Muslims
        demonstrate their obedience to Allah. At least one third of the meat
        from the animal should go to people who are poor or in vulnerable
        situations.
      </Text>

      {lengthMore ? (
        <Text
          onPress={() => testFunc('12')}
          style={{lineHeight: 21, marginTop: 5, color: '#a7c829'}}>
          {open === '123' ? 'Show less' : 'Read more'}
        </Text>
      ) : null}
    </View>
  );
};
export default ReadMoreComp;
const styles = StyleSheet.create({});
