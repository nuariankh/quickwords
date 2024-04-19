import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 200,
        marginBottom: 50
    },
    wordCard: {
        padding: 25,
        borderWidth: 2,
        borderRadius: 15,
        margin: 10,
        borderColor: '#FFCC00'
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
    }
})