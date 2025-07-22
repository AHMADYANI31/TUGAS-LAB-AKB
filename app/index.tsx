import { Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function HomeScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
      <text>
        AHMAD YANI
      </text>
      
       <FontAwesome name="hand-stop-o" size={24} color="black" />
      <AntDesign name="pluscircle" size={24} color="black" />
      <AntDesign name="minuscircle" size={24} color="black" />
      <AntDesign name="closecircle" size={24} color="black" />
      <AntDesign name="checkcircle" size={24} color="black" />
      <AntDesign name="customerservice" size={24} color="black" />
      <AntDesign name="creditcard" size={24} color="black" />
      <AntDesign name="codesquareo" size={24} color="black" />
      <AntDesign name="pausecircle" size={24} color="black" />
      <AntDesign name="swap" size={24} color="black" />
    </View>
    );
}