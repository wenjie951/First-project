import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


export default class App extends React.Component {
    render() {
        return ( 
          <View style = { styles.container } >
            <Button onPress={() => { Alert.alert('Alert','You tapped the button!')}} title = "Press Me" style={ styles.button} accessibilityLabel = "Learn more about this purple button" />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: '#000',
        fontSize: 36,
    }
});