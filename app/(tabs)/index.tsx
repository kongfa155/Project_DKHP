import { Image, StyleSheet, Platform, View, SafeAreaView, Text, FlatList} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const danhSachHocPhan = [
  {
    id: '1',
    tenMonHoc: 'CTDL',
    soTiet: 5,
    thu: 2,
    tietBatDau: 1,
  },
  {
    id: '2',
    tenMonHoc: 'CSDL',
    soTiet: 3,
    thu: 4,
    tietBatDau: 1,
  },
  {
    id: '3',
    tenMonHoc: 'TCKHMT',
    soTiet: 4,
    thu: 2,
    tietBatDau: 6,
  },
  {
    id: '4',
    tenMonHoc: 'DSTT',
    soTiet: 3,
    thu: 6,
    tietBatDau: 6,
  },
  {
    id: '5',
    tenMonHoc: 'XSTK',
    soTiet: 3,
    thu: 3,
    tietBatDau: 1,
  },
  {
    id: '6',
    tenMonHoc: 'PTKTTT',
    soTiet: 5,
    thu: 5,
    tietBatDau: 1,
  },
]


const TKB =( {thu, tenMonHoc, tietBatDau, soTiet}) =>{
  return (
    <View style = {styles.item}>
      <Text style={styles.thu}>Thứ {thu}</Text>
      <Text style={styles.monhoc}>Môn học: {tenMonHoc}</Text>
      <Text style={styles.giohoc}>Tiết học: {tietBatDau} - {tietBatDau + soTiet - 1} </Text>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.title}>Thời khóa biểu hiện tại</Text>
      <FlatList
      data = {danhSachHocPhan} 
      renderItem={ ({item})=> (
        <TKB thu = {item.thu} tenMonHoc={item.tenMonHoc} tietBatDau={item.tietBatDau} soTiet={item.soTiet} />
      )}
      keyExtractor = {(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'pink',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  thu: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  monhoc: {
    fontSize: 16,
    color: '#555',
  },
  giohoc: {
    fontSize: 14,
    color: '#888',
  },
});


