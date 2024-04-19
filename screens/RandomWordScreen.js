import { Button, Text } from 'react-native-paper'
import { View } from 'react-native';
import { styles } from '../styles/styles';
import { useState } from 'react';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';


const RandomWordScreen = () => {

    const [randomWord, setRandomWord] = useState(null);
    const [error, setError] = useState(null);

    const fetchWord = async () => {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/word');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            setRandomWord(data);
        } catch (error) {
            setError(error);
        }
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
                    <Text variant='displayMedium' style={{color: '#800020', fontWeight: 'bold'}}>{capitalizeFirstLetter(randomWord[0])}</Text>
                </View>
            }
        </View>
    )
}

export default RandomWordScreen;