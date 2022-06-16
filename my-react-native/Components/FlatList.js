import React, { useState ,useRef} from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView ,TouchableOpacity} from 'react-native';


export default function RnFlatList({navigation}) {
    const [people, setPeople] = useState([
        { name: 'aaa', id: '1' },
        { name: 'bbb', id: '2' },
        { name: 'ccc', id: '3' },
        { name: 'ddd', id: '4' },
        { name: 'eee', id: '5' },
        { name: 'fff', id: '6' },
        { name: 'ggg', id: '7' },
        { name: 'hhh', id: '8' },
        { name: 'iii', id: '9' },
        { name: 'jjj', id: '10' },
    ]);
const arr=[1,2,3,4];
const refrs = useRef()
 const scrollToEnd = () => {
    refrs.current.scrollToEnd();
  }
  const scrollToTop = () => {
    refrs.current.scrollTo({x:0,y:0,animated:true})
  }
    return (
        <View style={styles.container}>
        {/* <FlatList 
        numColumns={2}
        //numColumns={arr.length}//cant change after displaying ie rendering
        keyExtractor={(item) => item.id} //if we cant use index or id field is coming from DB
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
      />  */}
       <ScrollView ref={refrs}>
            {people.map(
                (x) => {
                    return(
                    <View key={x.id}>
                        <Text style={styles.item}>{x.name}</Text>
                    </View>)
            })}
            </ScrollView>   

             <View style={styles.btns}>
          <TouchableOpacity onPress={()=>{scrollToEnd()}}>
            <Text style={styles.btn}>End</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{scrollToTop()}}>
            <Text style={styles.btn}>Top</Text>
          </TouchableOpacity>
        </View>      
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
    },
    btn:{
        borderWidth: 1,
      padding: 5,
      backgroundColor: 'red',
      width:50,
      height:30,
      margin:10,
    },
    btns:{
        flexDirection:"row",
        marginHorizontal:30,
    }
});