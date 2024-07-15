import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { fakerPT_BR } from "@faker-js/faker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { formatMask } from "../helpers/formatString";
import { useCreateVehicleHook } from "../services/useCreateVehicleHook";

export default function AddVehicle() {
  const { vehiclesLoading, createVehicleMutation } = useCreateVehicleHook();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        disabled={vehiclesLoading}
        onPress={() =>
          createVehicleMutation({
            brand: fakerPT_BR.vehicle.manufacturer(),
            plate: formatMask("XXX-XXXX", fakerPT_BR.vehicle.vrm()),
          })
        }
      >
        {(vehiclesLoading && <ActivityIndicator />) || (
          <Ionicons name="add" size={32} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#1b43bc",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
