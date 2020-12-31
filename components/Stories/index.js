import React from 'react';
import { FlatList,View } from 'react-native';
import Story from '../Story';

const stories = [
    {
        imageUri: "https://pyxis.nymag.com/v1/imgs/18f/bb5/0290bf00d98ab64c2e88fe47b462e6d03b-9-Wentworth-Miller.rsquare.w330.jpg",
        name:"Scofield"
    },
    {
        imageUri: "https://static.wikia.nocookie.net/prisonbreak/images/a/a2/Sara_Tancredi_Season_4.JPG/revision/latest/top-crop/width/360/height/360?cb=20191116022300",
        name:"Tancredi"
    },
    {
        imageUri: "https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54d43e41af354_-_penguinhires.jpg?resize=480:*",
        name:"Cobblepot"
    },
    {
        imageUri: "https://pm1.narvii.com/6891/1b51cd7bdd0bb6d8ae563029fad8ccef14abeeefr1-240-240v2_uhq.jpg",
        name:"Tabitha"
    },
    {
        imageUri: "https://static.wikia.nocookie.net/silicon-valley/images/3/33/Richard_Hendricks.jpg/revision/latest?cb=20150526104602",
        name:"Hendricks"
    },
    {
        imageUri: "https://vignette.wikia.nocookie.net/gleejourneyao3/images/f/ff/S3_promo_-_Carole_Decker.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/2000/window-height/2000?cb=20200506144054",
        name:"Decker"
    },
    {
        imageUri: "https://studybreaks.com/wp-content/uploads/2019/08/lucifer.jpg",
        name:"Morningstar"
    },
]
const Stories = () => {
    
    return (
        <View style={{height: 130,}}>
            <FlatList 
                data={stories}
                renderItem={({item}) => <Story imageUri={item.imageUri} profileName={item.name} />}
                keyExtractor={item=>item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Stories;