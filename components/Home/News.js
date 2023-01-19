import React,{useEffect, useCallback,useState} from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const {width,height} = Dimensions.get('window')
import YoutubePlayer from "react-native-youtube-iframe";

const News = () => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  
    return (
        <ScrollView>
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

                <Text style={styles.textBold}>Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu.
                
</Text>
        </View>
        <YoutubePlayer
          height={230}
          play={playing}
          videoId={"mB7YFYHQ7S0"}
          onChangeState={onStateChange}
        />

        <Text style={styles.text}>Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu.
                
                </Text>
                <Text style={styles.textSecondary}>Detayları canlı yayında anlattı! 'Asgari ücret...'</Text>
                <Text style={styles.text}>Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu.
                
                </Text>
                <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/13518661/13518661-728xauto.jpg"}}
                resizeMode="stretch"
                />
                 <Text style={styles.text}>Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu. Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu.
                
                </Text>
                <Text style={styles.textSecondary}>Detayları canlı yayında anlattı! 'Asgari ücret...'</Text>
                <Text style={styles.text}>Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu.
                
                </Text>
                <Image
                style={{width:width, height:190}}
                source={{uri:"https://imgrosetta.mynet.com.tr/file/14322913/640xauto.jpg"}}
                resizeMode="stretch"
                />
                 <Text style={styles.text}>Otomotiv sektöründe özel tüketim vergisine (ÖTV) yönelik indirim beklentisine Hazine ve Maliye Bakanı Nureddin Nebati son noktayı koydu. Otomotivde şu aşamada bir ÖTV indiriminin gündemde olmadığını, bakanlık olarak da böyle bir çalışma yapmadıklarını söyledi. Öte yandan milyonlarca kişinin beklediği EYT ile ilgili de önemli açıklamalarda bulundu.
                
                </Text>
        </ScrollView>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
        width:'100%',
        paddingBottom:40
    },
    video:{
        height:180,
        alignSelf:'stretch'
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
    textBold:{
        
        fontWeight:"bold",
        paddingLeft:10,
        paddingBottom:10,
        color: "black",
        fontSize:16,
    },
    text:{
        
        paddingLeft:10,
        paddingBottom:10,
        color: "black",
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