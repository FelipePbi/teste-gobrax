import React from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import DriverItem from "../src/components/driverItem";
import { useGridHook } from "../src/hooks/useGridHook";
import AddDriver from "../src/components/addDriver";
import SelectedInfo from "../src/components/selectedInfo";

export default function App() {
  const { gridRowData, gridLoading, refetch } = useGridHook();

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={<RefreshControl refreshing={gridLoading} onRefresh={refetch} />}
        data={gridRowData?.reverse()}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Lista de Motoristas</Text>
            <SelectedInfo />
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Text>Nenhum motorista adicionado!</Text>
            <Text>Pressione no botão + para adicionar</Text>
          </View>
        )}
        renderItem={({ item }) => <DriverItem {...item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 100,
        }}
      />
      <AddDriver />
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
    height: 65,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
});
