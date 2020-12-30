import React from 'react';
import {View} from 'react-native'
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Post = ({ post}) => {
    console.log(post)
    return (
        <View style={{ backgroundColor: "#fff", marginBottom: 4, elevation: 2}}>
            <Header user={post.user}/>
            <Body imageUri={post.bannerImage}/>
            <Footer postText={post.postText} likes={post.likes} postedAt={post.postedAt}/>
        </View>
    )
}

export default Post;