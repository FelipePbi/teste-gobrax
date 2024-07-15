import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function VehicleItem({ id, brand, plate }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <View style={styles.idWrapper}>
          <Text style={styles.label}>ID</Text>
          <Text style={styles.info}>#{id}</Text>
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.label}>Placa</Text>
          <Text style={styles.info}>{plate}</Text>
        </View>
        <View style={styles.brandWrapper}>
          <Text style={styles.label}>Marca</Text>
          <Text style={styles.info}>{brand}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 6,
  },
  idWrapper: {
    width: 60,
    borderRightWidth: 2,
    borderRightColor: "#969696",
  },
  nameWrapper: {
    flex: 1,
    paddingLeft: 16,
  },
  brandWrapper: {
    flex: 1.5,
    paddingLeft: 16,
  },
  infoWrapper: {
    flexDirection: "row",
  },
  label: {
    fontSize: 12,
    color: "#303030",
  },
  info: {
    fontSize: 16,
    color: "#141414",
    fontWeight: "600",
  },
});
