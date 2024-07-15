import React from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import DriverItem from "../src/components/driverItem";
import { useGridHook } from "../src/hooks/useGridHook";
import AddDriver from "../src/components/addDriver";
import SelectedInfo from "../src/components/selectedInfo";
import VehicleItem from "../src/components/vehicleItem";
import { useGetVehicleHook } from "../src/services/useGetVehicleHook";
import AddVehicle from "../src/components/addVehicle";

export default function Vehicle() {
  const { vehiclesData, refetch, vehiclesLoading } = useGetVehicleHook();

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={<RefreshControl refreshing={vehiclesLoading} onRefresh={refetch} />}
        data={vehiclesData?.reverse()}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Lista de Veículos</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Text>Nenhum veículo adicionado!</Text>
            <Text>Pressione no botão + para adicionar</Text>
          </View>
        )}
        renderItem={({ item }) => <VehicleItem {...item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 100,
        }}
      />
      <AddVehicle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeaea",
  },
  separator: {
    height: 16,
  },
  emptyList: {
    flex: 1,
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
});
