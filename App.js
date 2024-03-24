import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Pessoas from "./src/Pessoas";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, nome: "Mateus", idade: 50, email: "mateus@mateus.com" },
        { id: 2, nome: "Joao", idade: 30, email: "joao@joao.com" },
        { id: 3, nome: "Henrique", idade: 15, email: "henique@henqique.com" },
        { id: 4, nome: "Arthur", idade: 10, email: "Arthur@arthur.com " },
        { id: 1, nome: "Mateus", idade: 50, email: "mateus@mateus.com" },
        { id: 2, nome: "Joao", idade: 30, email: "joao@joao.com" },
        { id: 3, nome: "Henrique", idade: 15, email: "henique@henqique.com" },
        { id: 4, nome: "Arthur", idade: 10, email: "Arthur@arthur.com " },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 20}}> funcionou </Text>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoas data={item} />}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "light",
    borderColor: "black",
    alignItems: "center",
  },
});

export default App;
