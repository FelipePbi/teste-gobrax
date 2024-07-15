import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelectRowHook } from "../hooks/useSelectRowHook";

export default function SelectedInfo() {
  const { driver, vehicle } = useSelectRowHook();

  if (!driver) {
    return <Text>Selecionado: Nenhum motorista selecionado!</Text>;
  }

  return (
    <Text>
      Selecionado: {driver} - {vehicle}
    </Text>
  );
}
