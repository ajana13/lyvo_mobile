import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Constants } from 'expo';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <View>
          <TextInput placeholder='Enter your message'
            onChangeText={(text) => this.setState({ message: text })} />
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
});
