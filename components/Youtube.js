
import { StyleSheet,Text,View, Platform, Dimensions,Alert } from 'react-native';
import Constant from 'expo-constants'
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback, useRef } from "react";





const Youtube = () => {
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
        <YoutubePlayer
          height={230}
          play={playing}
          videoId={"_sNkMJfWN6A"}
          onChangeState={onStateChange}
        />
                        <Text style={styles.textSecondary}>Akar: Yunanistan NATO İlkelerini Hiçe Sayacak Kadar Küstahlaştı
</Text>


                        <YoutubePlayer
          height={230}
          play={playing}
          videoId={"mB7YFYHQ7S0"}
          onChangeState={onStateChange}
        />
                        <Text style={styles.textSecondary}>2 Ayda Tam 22 Bin 217 Kez 112'yi Aradı! Bakın Sonu Ne Oldu?
</Text>

                        <YoutubePlayer
          height={230}
          play={playing}
          videoId={"qc1h6ny4D7M"}
          onChangeState={onStateChange}
        />
                        <Text style={styles.textSecondary}>Yunan Eli Titreye Titreye Türk Füzelerinin Menzilinin Haritasını Çizdi! Eline Sağlık Pentapostagma!
</Text>

                        <YoutubePlayer
          height={230}
          play={playing}
          videoId={"AF4MdeXLjWs"}
          onChangeState={onStateChange}
        />
                        <Text style={styles.textSecondary}>Putin, Şoygu'nun Kucağına Bombayı Bıraktı! "Seferberlikte Yaşanan Aksaklıkları Dikkate Almalı"</Text>
      </ScrollView>
  
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
      },
    video:{
        height:200,
        alignSelf:'stretch'
    },
    textSecondary:{
        fontSize:21,
        fontWeight:"bold",
        marginBottom:30

    },
})

export default Youtube;

