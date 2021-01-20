import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Card from "../components/Card";
import Colors from "../utils/colors";

export default function FailurePrediction() {
  const [report, setReport] = useState([]);

  const getWeatherReport = async () => {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Colombo,lk&appid=a406dfeefad605949acd872309284380&units=metric"
    );
    const data = await response.json();
    setReport(data.list);

    report.map((singleReport) => {});
  };

  useEffect(() => {
    getWeatherReport();
    console.log(report);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {report.map((singleReport) => {
          return (
            <View style={{ padding: 10 }}>
              <Card
                time={singleReport.dt_txt}
                temperature={singleReport.main.temp}
                pressure={singleReport.main.pressure}
                humidity={singleReport.main.humidity}
                visibility={singleReport.weather[0].description}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.mediumGrey,
  },
});
