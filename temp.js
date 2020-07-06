import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends React {
    constructor(props) {
        // super(props)
        this.state = {
            message: ''
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        // firebase function here for sending data
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar style="auto" /> */}
                <View style={styles.msgBox}>
                    <TextInput placeholder='Enter your message'
                        onChangeText={(text) => this.setState({ message: text })}
                        style={styles.txtInput} />

                    <Button title='Send' onPress={this.addItem} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        marginTop: Constants.statusBarHeight,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    msgBox: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff'
    },
    txtInput: {
        flex: 1,
    }
});
