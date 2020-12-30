import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles'

const Footer = ({ postText, likes, postedAt }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isOnFavourites, setisOnFavourites] = useState(false);
    const [likesCount, setLikesCount] = useState(0)

    useEffect(()=> {
        setLikesCount(likes)
    },[])

    const onLikePressed = () => {
        setIsLiked(!isLiked)
        const addAmount = isLiked ? -1 : 1;
        setLikesCount(likesCount + addAmount)
        
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                <View style={{ flexDirection: 'row',}}>
                    <TouchableOpacity onPress={onLikePressed}>
                        <MaterialIcons name={isLiked ? "favorite" : "favorite-border"} color={ isLiked ? "#F36365": "#4f4f4f"} size={30} style={styles.icon}/>
                    </TouchableOpacity>
                    
                    <Ionicons name="paper-plane-outline" color="#4f4f4f" size={30} style={styles.icon}/>
                    <FontAwesome name="comment-o" color="#4f4f4f" size={30} style={styles.icon}/>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setisOnFavourites(!isOnFavourites)}>
                        <Fontisto name={isOnFavourites ? "bookmark-alt" : "bookmark"} color={ isOnFavourites ? "#000": "#4f4f4f"} size={30} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                
            </View>        
            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.postText}>{postText}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
}

export default Footer;