import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#D74870'
    },
    outerView:{
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    topContainer:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileText: {
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    image: {
        flex: 1,
    },
    caption:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        
    },
    bottomContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10       
    },
    inputContainer: {
        paddingHorizontal: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput:{
        borderWidth: 1,
        marginHorizontal: 10,
        flex: 1,
        height: 40,
        borderColor: '#fff',
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 50,
        color: '#fff',
        paddingLeft: 10
    
    }
});

export default styles;