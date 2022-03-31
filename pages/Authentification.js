import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

function Authentification({ navigation }) {
    return (
        <View style={styles.styleTahCommeSimeon}>
            <Text style={styles.titleStyle}>AdopteUnChar 🚗 - Authentification</Text>
            <Text style={styles.textStyle}>Open up App.js to start working on your app trop bien !</Text>
            <StatusBar style="auto" />
            <Button
                title="Aller à l'accueil"
                onPress={() => navigation.navigate('Accueil')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleTahCommeSimeon: {
        flex: 1,
        backgroundColor: '#ffbaf9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#fff',
    },
    titleStyle: {
        color: '#fff',
        fontSize: 30,
    }
});

export default Authentification;