import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import SelectedRowInfo from "../../components/SelectedRowInfo/SelectedRowInfo";
import "./Home.scss";
import { Container } from "@mui/material";
import DriverModal from "../../components/DriverModal/DriverModal";
import { useDriverHook } from "../../hooks/useDriverHook";
import { useMemo } from "react";
import type { MenuOptions } from "../../components/Header/types";
import { useVehicleHook } from "../../hooks/useVehicleHook";
import VehicleModal from "../../components/VehicleModal/VehicleModal";

function Home() {
  const driverHook = useDriverHook();
  const vehicleHook = useVehicleHook();

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
      <DriverModal {...driverHook} />
    </>
  );
}

export default Home;
