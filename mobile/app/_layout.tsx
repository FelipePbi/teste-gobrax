import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SelectedRowProvider } from "../src/contexts/SelectedRowContext";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <SelectedRowProvider>
          <Drawer initialRouteName="index">
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "Motoristas",
                title: "Gobrax",
              }}
            />
            <Drawer.Screen
              name="vehicle"
              options={{
                drawerLabel: "Veículos",
                title: "Gobrax",
              }}
            />
          </Drawer>
        </SelectedRowProvider>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
