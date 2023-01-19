import { StyleSheet, Text, View,FlatList,Dimensions,Image,TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
const {width,height} = Dimensions.get('window')
let data;

const HomeScreen =({navigation})=> {
const [data2,setData]=useState([
    {
        "id":1,
        "name": "Tanek Jennings",
        "url": "https://imgrosetta.mynet.com.tr/file/16221257/16221257-640x480.jpg"
    },
    {
        "id":2,
        "name": "Hadassah Craft",
        "url": "https://imgrosetta.mynet.com.tr/file/16222777/16222777-640x480.jpg"
    },
    {
        "id":3,
        "name": "Lewis Craig",
        "url": "https://imgrosetta.mynet.com.tr/file/16221462/16221462-640x480.jpg"
    },
    {
        "id":4,
        "name": "Belle Hays",
        "url": "https://imgrosetta.mynet.com.tr/file/16217577/16217577-640x480.jpg"
    },
    {
        "id":6,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":7,
        "name": "Tanek Jennings",
        "url": "https://imgrosetta.mynet.com.tr/file/16221257/16221257-640x480.jpg"
    },
    {
        "id":8,
        "name": "Hadassah Craft",
        "url": "https://imgrosetta.mynet.com.tr/file/16222777/16222777-640x480.jpg"
    },
    {
        "id":9,
        "name": "Lewis Craig",
        "url": "https://imgrosetta.mynet.com.tr/file/16221462/16221462-640x480.jpg"
    },
    {
        "id":10,
        "name": "Belle Hays",
        "url": "https://imgrosetta.mynet.com.tr/file/16217577/16217577-640x480.jpg"
    },
    {
        "id":11,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":12,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":13,
        "name": "Tanek Jennings",
        "url": "https://imgrosetta.mynet.com.tr/file/16221257/16221257-640x480.jpg"
    },
    {
        "id":14,
        "name": "Hadassah Craft",
        "url": "https://imgrosetta.mynet.com.tr/file/16222777/16222777-640x480.jpg"
    },
    {
        "id":15,
        "name": "Lewis Craig",
        "url": "https://imgrosetta.mynet.com.tr/file/16221462/16221462-640x480.jpg"
    },
    {
        "id":16,
        "name": "Belle Hays",
        "url": "https://imgrosetta.mynet.com.tr/file/16217577/16217577-640x480.jpg"
    },
    {
        "id":17,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":18,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":19,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":20,
        "name": "Tanek Jennings",
        "url": "https://imgrosetta.mynet.com.tr/file/16221257/16221257-640x480.jpg"
    },
    {
        "id":21,
        "name": "Hadassah Craft",
        "url": "https://imgrosetta.mynet.com.tr/file/16222777/16222777-640x480.jpg"
    },
    {
        "id":22,
        "name": "Lewis Craig",
        "url": "https://imgrosetta.mynet.com.tr/file/16221462/16221462-640x480.jpg"
    },
    {
        "id":23,
        "name": "Belle Hays",
        "url": "https://imgrosetta.mynet.com.tr/file/16217577/16217577-640x480.jpg"
    },
    {
        "id":24,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":25,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":26,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":27,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    },
    {
        "id":28,
        "name": "Tanek Jennings",
        "url": "https://imgrosetta.mynet.com.tr/file/16221257/16221257-640x480.jpg"
    },
    {
        "id":29,
        "name": "Hadassah Craft",
        "url": "https://imgrosetta.mynet.com.tr/file/16222777/16222777-640x480.jpg"
    },
    {
        "id":30,
        "name": "Lewis Craig",
        "url": "https://imgrosetta.mynet.com.tr/file/16221462/16221462-640x480.jpg"
    },
    {
        "id":31,
        "name": "Belle Hays",
        "url": "https://imgrosetta.mynet.com.tr/file/16217577/16217577-640x480.jpg"
    },
    {
        "id":32,
        "name": "Ira Blackwell",
        "url": "https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"
    }
]
)
    

const [activeIndex, setActiveIndex] = useState(0);
const onViewRef = React.useRef(( viewableItems ) => {
   if (viewableItems.viewableItems.length > 0) {
     setActiveIndex(viewableItems.viewableItems[0].index || 0);
   }
   if (viewableItems.viewableItems.length > 0) {
    setActiveIndex(viewableItems.viewableItems[0].index || 0);
  }
   //console.log(viewableItems);
 });
 const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })


  
    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems:"center",width:'100%',backgroundColor: "black",}}>
        <FlatList
        data={data2}
        style={{width:width, height:290}}
        renderItem={({item}) => { return (
            <View>
                <Image
                style={{width:width, height:290}}
                source={{uri:item.url}}
                resizeMode="stretch"
                />
            </View>
        ) }}
        horizontal
        pagingEnabled
        
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}

/>

        
        
        <View style={{flexDirection:"row",marginTop:5,width:350,height:12,justifyContent:"space-around"}}>
        {data2.map((image,index)=> {
            
            //index -> 10
            //activeIndex -> 10
            return (
                
                
                <View>
                    
                <View key={index} style={[styles.dot,{backgroundColor:activeIndex==index?'#5D3EBD':"#D8D8D8", opacity:activeIndex==index?1:0.3}]}>
                </View>
                </View>
            )
          })}
        </View>

        
        
      </View>
      <TouchableOpacity
                    onPress={() => navigation.navigate("Haber")}

      >
      <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>Detayları canlı yayında anlattı! 'Asgari ücret...'</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Magazin</Text>
                    <Text style={styles.categoryText}>5 saat önce</Text>
                </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
                    onPress={() => navigation.navigate("Haber")}

      >
        <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16221462/16221462-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>O yemekleri yediler çok sayıda öğrenci zehirlendi</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Güncel</Text>
                    <Text style={styles.categoryText}>9 saat önce</Text>
                </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress={() => navigation.navigate("Haber")}

      >
        <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16222777/16222777-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>Alev alev yandı! Lüks otomobil küle döndü</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Spor</Text>
                    <Text style={styles.categoryText}>6 saat önce</Text>
                </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress={() => navigation.navigate("Haber")}

      >
        <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16217577/16217577-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>Sürekli bir yerlerin konuşuluyor diyen oğlu kocaman oldu</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Finans</Text>
                    <Text style={styles.categoryText}>12 saat önce</Text>
                </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress={() => navigation.navigate("Haber")}

      >
        <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16223181/16223181-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>Detayları canlı yayında anlattı! 'Asgari ücret...'</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Magazin</Text>
                    <Text style={styles.categoryText}>5 saat önce</Text>
                </View>
        </View>
        </TouchableOpacity>
        <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16221462/16221462-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>O yemekleri yediler çok sayıda öğrenci zehirlendi</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Güncel</Text>
                    <Text style={styles.categoryText}>9 saat önce</Text>
                </View>
        </View>
        <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16222777/16222777-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>Alev alev yandı! Lüks otomobil küle döndü</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Spor</Text>
                    <Text style={styles.categoryText}>6 saat önce</Text>
                </View>
        </View>
        <View style={[styles.boxNews,{marginTop:15, backgroundColor:"white"}]}>
      <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/16217577/16217577-640x480.jpg"}}
                resizeMode="stretch"
                />
                <Text style={styles.textSecondary}>Sürekli bir yerlerin konuşuluyor diyen oğlu kocaman oldu</Text>
                <View style={styles.postCategory}>
                    <Text style={styles.categoryText}>Finans</Text>
                    <Text style={styles.categoryText}>12 saat önce</Text>
                </View>
        </View>
        
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E8E8E8",
        width:'100%',
        paddingBottom:40
    },
    dot:{
        width:8,
        height:8,
        borderRadius:20,
        marginLeft:4
    },
    textSecondary:{
        fontSize:21,
        fontWeight:"bold",
        padding:10,

    },
    categoryText:{
        
        fontWeight:"bold",
        paddingLeft:10,
        paddingBottom:10,
        color: "#989898",
        fontSize:16,
    },
    postCategory:{
        flexDirection:"row",
    },
    boxNews:{
        /* shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, */

    }
  });

  export default HomeScreen;