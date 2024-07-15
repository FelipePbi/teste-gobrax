import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import SelectedRowInfo from "../../components/SelectedRowInfo/SelectedRowInfo";
import "./Home.scss";
import { Container } from "@mui/material";
import DriverModal from "../../components/DriverModal/DriverModal";
import { useDriverModalHook } from "../../hooks/useDriverModalHook";
import { useMemo } from "react";
import type { MenuOptions } from "../../components/Header/types";
import { useVehicleModalHook } from "../../hooks/useVehicleModalHook";
import VehicleModal from "../../components/VehicleModal/VehicleModal";
import { useGetVehicleHook } from "../../services/useGetVehicleHook";

function Home() {
  const driverHook = useDriverModalHook();
  const vehicleHook = useVehicleModalHook();
  const getVehicleHook = useGetVehicleHook();

  const optionsMenuHeader: MenuOptions[] = useMemo(() => {
    return [
      {
        label: "Motoristas",
        onClick: driverHook.onOpenModal,
      },
      {
        label: "Veículos",
        onClick: vehicleHook.onOpenModal,
      },
    ];
  }, [driverHook.onOpenModal, vehicleHook.onOpenModal]);

  return (
    <>
      <Container className="home-container">
        <Header menuOptions={optionsMenuHeader} />
        <SelectedRowInfo />
        <Grid />
      </Container>

      <VehicleModal {...vehicleHook} />
      <DriverModal {...driverHook} vehicleOptions={getVehicleHook.vehiclesData} />
    </>
  );
}

export default Home;
