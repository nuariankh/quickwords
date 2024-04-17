import { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native'
import { useTheme, TextInput, Text, Button } from "react-native-paper";

const Main = () => {
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
            console.log(searchedWords)
            console.log(searchedWords[0].word);
            console.log('Definition: ' + searchedWords[0].meanings[1].definitions[0].definition);

        } catch (error) {
            setError(error);
        }
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20
            }}
        >
            <Text variant='headlineLarge' theme={theme} style={{color: theme.colors.primary}}>Words at your fingertips.</Text>
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
                <Button mode='contained' style={{ 
                    backgroundColor: theme.colors.tertiary, 
                    color: '#ffffff', 
                    margin: 10
                    }}
                    onPress={() => submitSearch(wordSearchText)}
                >
                    Search.
                </Button>
                <ScrollView>
                    {searchedWords.map((wordData, index) => {
                        return (
                            <View key={index}>
                                <Text varient='displayMedium'>{wordData.word}</Text>
                                {wordData.meanings.map((meaning, mIndex) => {
                                    return (
                                        <View key={mIndex}>
                                            <Text>{meaning.partOfSpeech}</Text>
                                            <Text>Definition: {meaning.definitions.map((definition, defIndex) => {
                                                return (
                                                <Text>{definition.definition}</Text>
                                                    )
                                            })}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })

                    }
                </ScrollView>
        </View>
    )
};

export default Main;