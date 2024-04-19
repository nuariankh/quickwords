import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { DefaultTheme } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons';
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
            screenOptions={{
                tabBarIcon: ({ color }) => (
                    <Icon name='book-open-page-varient-outline' size={24} color='#FFCC00' />
                )
            }}
            >

        </Tab.Screen>
    </Tab.Navigator>
}

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={appTheme}>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#FFCC00',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                        }
                    }}
                >
                    <Stack.Screen 
                    name='QuickWords'
                    component={Home}
                    />
                    <Stack.Screen 
                        name='Random Word'
                        component={RandomWordScreen}    
                    />
                </Stack.Navigator>

                <Tab.Navigator
                    initialRouteName={HomeScreen}
                    activeColor="#FFCC00"
                    barStyle={{ backgroundColor: '#fff' }}
                >
                    <Tab.Screen 
                        name='Home' 
                        component={HomeScreen}
                        screenOptions={{
                        tabBarIcon: ({ color }) => (
                            <Icon name='book-open-page-varient-outline' size={24} color='#FFCC00' />
                            )
                        }}
                    />
                    <Tab.Screen 
                        name='Random Word' 
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

