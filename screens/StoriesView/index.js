import React, { useEffect, useState} from 'react';
import { ActivityIndicator, ImageBackground, SafeAreaView, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

import storiesData from '../../data/stories'
import styles from './style';
import ProfilePicture from '../../components/ProfilePicture'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const StoriesView = () => {
    const [user, setUser] = useState(null);
    const [userStories, setUserStories] = useState([]);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    const [activeStory, setActiveStory] = useState(null);

    const route = useRoute();

    useEffect(() => {
        let id = route.params.userId;
        let stories = storiesData.find(story=> story.user.id === id);        
        setUser(stories.user)
        setUserStories(stories.stories);
        setActiveStoryIndex(0);
    }, [])

    useEffect(() =>{
        setActiveStory(userStories[activeStoryIndex])
    }, [activeStoryIndex])

    const handlePrevStory = () => {       
        if (activeStoryIndex > 0){
            console.log("Handling previous")
            setActiveStoryIndex(activeStoryIndex - 1)
        }
    }

    const handleNextStory =() => {       

        if(activeStoryIndex < userStories.length -1 ){
            console.log("Handling Next")
            setActiveStoryIndex(activeStoryIndex + 1)
        }
    }

    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width

        if (x < screenWidth / 2){
            handlePrevStory();
        }else {
            handleNextStory();
        }
    }

    if (!activeStory){
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>        
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{ uri: activeStory.imageUri}} resizeMode="cover" style={styles.image}>
                    <View style={styles.outerView}>
                        <View style={styles.topContainer}>
                            <ProfilePicture imageUri={user.imageUri} size={50}/>
                            <Text style={styles.profileText}>{user.name}</Text>
                            <Entypo name="dot-single" size={40} color="#fff" />
                            <Text style={styles.caption}>{ activeStory.postedTime }</Text>
                        </View>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.caption}>{ activeStory.captionText }</Text>
                            <View style={styles.inputContainer}>                            
                                <TouchableOpacity>
                                    <Ionicons name="camera-outline" size={40} color="#fff" />
                                </TouchableOpacity>
                                <TextInput style={styles.textInput} placeholder="  Type a reply" placeholderTextColor='#fff'/>
                                <TouchableOpacity>
                                    <Ionicons name="paper-plane-outline" color="#fff" size={40}/>
                                </TouchableOpacity>
                            </View>
                        </View>                        
                    </View>
                    
                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default StoriesView;