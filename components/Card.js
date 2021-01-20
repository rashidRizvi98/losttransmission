import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

var url = " http://192.168.43.151:5000/api";

function Card({ time, temperature, pressure, humidity, visibility }) {
  const [possibility, setPossibility] = useState("");

  const getPossibility = async () => {
    axios
      .post(url, [[temperature, pressure, humidity, visibility]])
      .then((response) => {
        console.log("succes axios :", response.data);
        const poss = response.data;
        setPossibility(poss);
      })
      .catch((error) => {
        console.log("fail axios :", error);
      });
  };

  useEffect(() => {
    getPossibility();
  }, []);

  return (
    <View style={styles.card}>
      <Text>
        Time: <Text> {time}</Text>
      </Text>

      <Text>
        Temperature: <Text> {temperature}</Text>{" "}
      </Text>

      <Text>
        Pressure: <Text> {pressure}</Text>
      </Text>

      <Text>
        Humidity: <Text> {humidity}</Text>
      </Text>

      <Text>
        Visibility: <Text> {visibility}</Text>
      </Text>

      <Text>
        Signal failure possibility: <Text> {possibility}</Text>
      </Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {},
  card: {
    padding: 5,
    alignContent: "center",

    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
});
