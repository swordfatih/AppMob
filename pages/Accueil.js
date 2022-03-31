import { StyleSheet, TouchableHighlight, Button, Text, View, Image } from 'react-native';

function Accueil({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>Le Québécois est vraiment trop sympa!</Text>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/vehicules/car_0/picture.jpg")}
                />
            </View>

            <View style={styles.interface}>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Authentification')}>
                    <Text style={styles.buttonText}>❌</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Authentification')}>
                    <Text style={styles.buttonText}>💚</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        // whole page's style, like a phone screen
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 50,
        marginBottom: 20,
        width: 50,
        height: 50,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#000000'
    },
    // les boutons doivent être alignés horizontalement 
    interface: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        width: 200,
        padding: 10,
        height: '15%'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '80%'
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: '50px'
    }
});

export default Accueil;