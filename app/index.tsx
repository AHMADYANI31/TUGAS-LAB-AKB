import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        AHMAD YANI
      </Text>
      
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16, // jika belum didukung, pakai margin di ikon
        }}
      >
        <AntDesign name="heart" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="pluscircle" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="minuscircle" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="closecircle" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="checkcircle" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="customerservice" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="creditcard" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="codesquareo" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="pausecircle" size={24} color="black" style={{ margin: 8 }} />
        <AntDesign name="swap" size={24} color="black" style={{ margin: 8 }} />
      </View>
    </View>
  );
}
