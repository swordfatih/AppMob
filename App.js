import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Authentification from './pages/Authentification.js';
import Accueil from './pages/Accueil.js';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accueil" component={Accueil} />
                <Stack.Screen name="Authentification" component={Authentification} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;