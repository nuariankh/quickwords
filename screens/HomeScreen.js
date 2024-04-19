import { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import { useTheme, TextInput, Text, Button, Card } from "react-native-paper";
import { styles } from '../styles/styles';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

const HomeScreen = () => {
    const theme = useTheme();
    const [wordSearchText, setWordSearchText] = useState('');
    const [searchedWords, setSearchedWords] = useState([]);
    const [error, setError] = useState(null)


    const submitSearch = async (word) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setSearchedWords(data);
            console.log(searchedWords);

        } catch (error) {
            setError(error);
        }
    }

    return (
        <View
            style={styles.container}>
            <Text variant='headlineLarge' theme={theme} style={{color: theme.colors.primary, fontWeight: 'bold'}}>Words at your fingertips.</Text>
            <TextInput
                label='Search'
                value={wordSearchText}
                onChangeText={(input) => setWordSearchText(input)}
                mode='outlined'
                theme={theme}
                style={{
                    width: '75%'
                }}
                />
                <Button mode='contained' style={styles.primaryButton}
                    onPress={() => submitSearch(wordSearchText)}
                >
                    Search.
                </Button>
                <ScrollView overScrollMode='never'>
                    {searchedWords.map((wordData, index) => {
                        return (
                            <View style={styles.wordCard} key={index}>
                                <Text style={styles.dictionaryHeading}>{capitalizeFirstLetter(wordData.word)}</Text> 
                                {wordData.meanings.map((meaning, mIndex) => {
                                    return (
                                        <View key={mIndex}>
                                            <Text style={styles.dictionaryPartOfSpeechText}>{meaning.partOfSpeech}</Text>
                                            <Text style={styles.dictionaryDefinitionText}>{meaning.definitions.map((definition, defIndex) => {
                                                return (
                                                <Text>{definition.definition}</Text>
                                                    )
                                            })}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })}
                </ScrollView>
        </View>
    )
};


export default HomeScreen;