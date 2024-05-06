import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import WordSearchScreen from './screens/WordSearchScreen';
import { DefaultTheme } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import RandomWordScreen from './screens/RandomWordScreen';

const appTheme = {
    ...DefaultTheme,
    colors: {
        primary: '#FFCC00',
        secondary: '#6C757D',
        tertiary: '#800020'
    }
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: true,
    headerShown: true,
    tabBarActiveTintColor: "#FFCC00",
    tabBarInactiveTintColor: "#6C757D",
    tabBarStyle: {
        position: 'absolute',
        borderColor: '#6C757D',
        borderTopWidth: 1,
    },
    headerStyle: {
        backgroundColor: '#FFCC00',
        height: 100
    }
}

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={appTheme}>
                <Tab.Navigator
                    initialRouteName={WordSearchScreen}
                    activeColor="#FFCC00"
                    screenOptions={screenOptions}
                >
                    <Tab.Screen 
                        name='QuickWords' 
                        component={WordSearchScreen}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon name='book' type='FontAwesome' size={24} color={color} />
                                )
                        }}
                    />
                    <Tab.Screen 
                        name='Random Word' 
                        component={RandomWordScreen} 
                        options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name='random' type='FontAwesome' size={24} color={color} />
                            )
                        }}
                    />
                </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

