import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { Constants } from 'react-native-unimodules';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPOk9bg2Gb-c71XHoykSoVF0VxEK7G_GQ",
  authDomain: "message-board-b640b.firebaseapp.com",
  databaseURL: "https://message-board-b640b.firebaseio.com",
  projectId: "message-board-b640b",
  storageBucket: "message-board-b640b.appspot.com",
  messagingSenderId: "328242575272",
  appId: "1:328242575272:web:9055888b031fc85cefcf9d",
  measurementId: "G-PD02JJX255"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messages: [],
    }
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("messages")
      .once("value", snapshot => {
        const data = snapshot.val();
        if (snapshot.val()) {
          const initMessages = []
          Object.keys(data).forEach(message => initMessages.push(data[message]));
          this.setState({
            messages: initMessages
          })
        }
      });

    firebase
      .database()
      .ref()
      .child("messages")
      .on("child_added", snapshot => {
        const data = snapshot.val();
        if (snapshot.val()) {
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }))
        }
      });

  }

  addItem() {
    // firebase function here for sending data
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.msgBox}>
          <TextInput placeholder='Enter your message'
            onChangeText={(text) => this.setState({ message: text })}
            style={styles.txtInput} />

          <Button title='Send' onPress={this.addItem} />
        </View>
        <FlatList data={this.state.messages}
          renderItem={({ item }) =>
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item}
              </Text>
            </View>
          }
        />
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
    backgroundColor: '#fff',
  },
  txtInput: {
    flex: 1,
  },
  listItemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
  },
  listItem: {
    fontSize: 20,
    padding: 10,
  },
});
