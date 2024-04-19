import { StyleSheet } from "react-native"

// primary: '#FFCC00',
// secondary: '#6C757D',
// tertiary: '#800020'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 50
    },
    wordCard: {
        padding: 25,
        borderWidth: 2,
        borderRadius: 15,
        margin: 10,
        borderColor: '#6C757D'
    },
    dictionaryHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFCC00'
    },
    dictionaryPartOfSpeechText: {
        color: '#6C757D',
        fontStyle: 'italic',
        fontSize: 14
    },
    dictionaryDefinitionText: {
        fontSize: 12,
        fontWeight: 'light'
    },
    primaryButton: {
        margin: 10,
        backgroundColor: '#FFCC00'
    },
    primaryText: {
        color: '#FFCC00'
    },
    primaryBoldText: {
        color: '#FFCC00',
        fontWeight: 'bold'
    },
    tertiaryText: {
        color: '#800020'
    }
})