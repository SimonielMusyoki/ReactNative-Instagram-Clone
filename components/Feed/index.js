import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Post from '../Post'
import Stories from '../Stories';

const feed = [
    {
        user: {
            imageUri: "https://pyxis.nymag.com/v1/imgs/18f/bb5/0290bf00d98ab64c2e88fe47b462e6d03b-9-Wentworth-Miller.rsquare.w330.jpg",
            name: "Michael Scofield",
        },
        bannerImage: "https://static.wikia.nocookie.net/arrow/images/8/86/DC%27s_Legends_of_Tomorrow_season_2_poster_-_A_Mission_For_All_Time.png/revision/latest?cb=20160923044208",
        postText:"DC's legends of tomorrow season 3 is out ...",
        likes: 3204,
        postedAt: "6 minutes ago",
        comments: ""
    },
    {
        user: {
            imageUri: "https://static.wikia.nocookie.net/prisonbreak/images/a/a2/Sara_Tancredi_Season_4.JPG/revision/latest/top-crop/width/360/height/360?cb=20191116022300",
            name: "Sarah Tancredi",
        },
        bannerImage: "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/07_02_2019_01_36_52_7855552.jpg?width=920",
        postText:"Prison Break #endregion season 6 is out ...",
        likes: 1904,
        postedAt: "29 minutes ago",
        comments: ""
    },
    {
        user: {
            imageUri: "https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54d43e41af354_-_penguinhires.jpg?resize=480:*",
            name: "Oswald Cobblepot",
        },
        bannerImage: "https://www.thenerddaily.com/wp-content/uploads/2020/06/Gotham-TV-Series.jpg",
        postText:"10 reasons to watch Gotham ...",
        likes: 11256,
        postedAt: "51 minutes ago",
        comments: ""
    },
    {
        user: {
            imageUri: "https://pm1.narvii.com/6891/1b51cd7bdd0bb6d8ae563029fad8ccef14abeeefr1-240-240v2_uhq.jpg",
            name: "Tabitha Galavan",
        },
        bannerImage: "https://www.scifinow.co.uk/wp-content/uploads/2016/01/gotham_return1-1-616x934.jpg",
        postText:"The wrath of the Villains #Galavans",
        likes: 2001,
        postedAt: "89 minutes ago",
        comments: ""
    },
    {
        user: {
            imageUri: "https://vignette.wikia.nocookie.net/gleejourneyao3/images/f/ff/S3_promo_-_Carole_Decker.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/2000/window-height/2000?cb=20200506144054",
            name: "Chloe Decker",
        },
        bannerImage: "https://static.wikia.nocookie.net/lucifer/images/6/6c/S3_promo_-_Trixie_Espinoza.jpg/revision/latest?cb=20190605055233",
        postText:"Trixie Espinoza 😍",
        likes: 904,
        postedAt: "1 hour ago",
        comments: ""
    },
    {
        user: {
            imageUri: "https://studybreaks.com/wp-content/uploads/2019/08/lucifer.jpg",
            name: "Lucifer Morningstar",
        },
        bannerImage: "https://i.pinimg.com/564x/7e/3f/80/7e3f80611283e3255b2a910a7bea2252.jpg",
        postText:"Mazikeen #LUX",
        likes: 1094,
        postedAt: "1 hour ago",
        comments: ""
    }
    
];

const Feed = () => {
    
    return(
        <SafeAreaView>
            <FlatList 
                data={feed}
                keyExtractor={item =>item.user.name }
                renderItem={({item}) => <Post post={item}/> }
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={Stories}
            />
        </SafeAreaView>
    )
}

export default Feed;