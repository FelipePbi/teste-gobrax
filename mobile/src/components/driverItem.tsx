import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSelectRowHook } from "../hooks/useSelectRowHook";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DriverItem({ id, name, document, vehicle }) {
  const { handleSelectRow, id: selectedId } = useSelectRowHook();

  const isSelected = selectedId === id;

  return (
    <TouchableOpacity
      onPress={() =>
        handleSelectRow({
          id,
          driver: name,
          vehicle,
        })
      }
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: isSelected ? "#c7dbff" : "#fff",
          },
        ]}
      >
        <View style={styles.infoWrapperWithMargin}>
          <View style={styles.idWrapper}>
            <Text style={styles.label}>ID</Text>
            <Text style={styles.info}>#{id}</Text>
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.info}>{name}</Text>
          </View>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.docWrapper}>
            <Text style={styles.label}>Documento</Text>
            <Text style={styles.info}>{document}</Text>
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.label}>Vinculo</Text>
            <Text style={styles.info}>{vehicle ? "Sim" : "Não"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    width: 70,
    borderRightWidth: 2,
    borderRightColor: "#969696",
  },
  docWrapper: {
    flex: 1.3,
    borderRightWidth: 2,
    borderRightColor: "#969696",
  },
  nameWrapper: {
    flex: 1,
    paddingLeft: 16,
  },
  infoWrapper: {
    flexDirection: "row",
  },
  infoWrapperWithMargin: {
    flexDirection: "row",
    marginBottom: 16,
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
