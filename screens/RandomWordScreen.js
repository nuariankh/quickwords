import { Button, Text } from 'react-native-paper'
import { View } from 'react-native';
import { styles } from '../styles/styles';
import { useState } from 'react';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';


const RandomWordScreen = () => {

    const navigation = useNavigation();

    const [randomWord, setRandomWord] = useState(null);
    const [error, setError] = useState(null);

    const fetchWord = async () => {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/word');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setRandomWord(data);
        } catch (error) {
            setError(error);
        }
    }

    const navigateToWordSearch = (word) => {
        navigation.navigate('Word Search', {randomWord: word});
    }
    
    return (
        <View style={styles.container}>
            <Text variant='headlineLarge' style={styles.primaryBoldText}>Get a Random Word</Text>
            <Button 
                mode='contained' 
                style={styles.primaryButton}
                onPress={() => fetchWord()}
                >
                Get.
            </Button>
            {
                randomWord && 
                <View>
                    <Text 
                        variant='displayMedium' 
                        style={{color: '#800020', fontWeight: 'bold'}}
                        onPress={() => navigateToWordSearch(randomWord[0])}
                    >
                    
                        {capitalizeFirstLetter(randomWord[0])}
                    </Text>
                </View>
            }
        </View>
    )
}

export default RandomWordScreen;