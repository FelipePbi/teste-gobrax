import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { fakerPT_BR } from "@faker-js/faker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCreateDriverHook } from "../services/useCreateDriverHook";
import { formatMask } from "../helpers/formatString";
import { useGetVehicleHook } from "../services/useGetVehicleHook";

export default function AddDriver() {
  const { driverLoading, createDriverMutation } = useCreateDriverHook();
  const { vehiclesData } = useGetVehicleHook();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        disabled={driverLoading}
        onPress={() =>
          createDriverMutation({
            name: fakerPT_BR.person.fullName(),
            document: formatMask(
              "XXX.XXX.XXX-XX",
              fakerPT_BR.number.int({ min: 10000000000, max: 99999999999 })
            ),
            vehicleId: fakerPT_BR.helpers.arrayElement([
              ...(vehiclesData?.map(({ id }) => id) || ""),
              null,
            ] as string[]),
          })
        }
      >
        {(driverLoading && <ActivityIndicator />) || (
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
