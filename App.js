import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { DefaultTheme } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-paper';
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

const TabNavigator = () => {
    <Tab.Navigator
        initialRouteName={HomeScreen}
        activeColor="#FFCC00"
        barStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen 
            name='Home' 
            component={HomeScreen} 
            optionsptions={{
                tabBarIcon: 'book'
            }}
            >

        </Tab.Screen>
    </Tab.Navigator>
}

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={appTheme}>
                <Tab.Navigator
                    initialRouteName={HomeScreen}
                    activeColor="#FFCC00"
                    barStyle={{ backgroundColor: '#fff' }}
                >
                    <Tab.Screen 
                        name='Word Search' 
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon name='book' type='FontAwesome' size={24} color={color} />
                                )
                        }}
                    />
                    <Tab.Screen 
                        name='random' 
                        component={RandomWordScreen} 
                        screenOptions={{
                        tabBarIcon: ({ color }) => (
                            <Icon name='book-open-page-varient-outline' size={24} color='#FFCC00' />
                            )
                        }}
                    />
                </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

