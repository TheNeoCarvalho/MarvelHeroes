import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";

export default class Home extends Component {
  onPress = () => {
    console.log("ok");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.onPress}>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://i.pinimg.com/236x/86/4e/88/864e8866248153422ce9f9bb6e3264ae--superheroes.jpg"
              }}
            />
            <View style={styles.box}>
              <Text style={styles.title}>Capitão America</Text>
              <Text style={styles.desc}>Vingadores</Text>
            </View>
          </View>
        </TouchableHighlight>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://vignette.wikia.nocookie.net/marveldatabase/images/1/17/T%27Challa_%28Civil_War%29_%28Earth-TRN517%29_from_Marvel_Contest_of_Champions_001.png/revision/latest?cb=20170703193111"
            }}
          />
          <View style={styles.box}>
            <Text style={styles.title}>Pantera Negra</Text>
            <Text style={styles.desc}>Vingadores</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwxIe4M3RaAb_C2R7H-PkVJNGW9GEIAYz06vXETPpWNdXcZZF"
            }}
          />
          <View style={styles.box}>
            <Text style={styles.title}>Thor</Text>
            <Text style={styles.desc}>Vingadores</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 10
  },
  image: {
    flex: 1,
    width: 50,
    height: 50,
    marginLeft: 10
  },
  desc: {
    textAlign: "left",
    color: "#333333",
    marginBottom: 5,
    paddingLeft: 10
  },
  card: {
    padding: 10,
    width: "auto",
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: "white"
  },
  box: {
    flex: 6
  }
});
