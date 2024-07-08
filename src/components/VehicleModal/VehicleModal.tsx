import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import "./VehicleModal.scss";
import { formatMask } from "../helpers/formatString";

import * as T from "./types";
import { LoadingButton } from "@mui/lab";

function VehicleModal({
  openModal,
  vehiclesLoading,
  onCloseModal,
  onConfirmModal,
}: T.VehicleModalProps) {
  const [brand, setBrand] = useState("");
  const [plate, setPlate] = useState("");

  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  const handlePlateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value && value.length <= 8) {
      console.log();
      setPlate(formatMask("XXX-XXXX", value).toLocaleUpperCase());
    } else if (!value) {
      setPlate("");
    }
  };

  const plateIsValid = /^[A-Z]{1,3}-[\d]{4}$/.test(plate);

  const handleConfirmModal = () => {
    onConfirmModal({
      brand,
      plate,
    });
  };

  useEffect(() => {
    if (openModal) {
      setBrand("");
      setPlate("");
    }
  }, [openModal]);

  return (
    <Modal open={openModal} aria-labelledby="modal-vehicle-title">
      <Box className="modal-content">
        <Typography id="modal-vehicle-title" variant="h6" component="h2" marginBottom={3}>
          Adicionar Veículo
        </Typography>

        <Box className="input-content">
          <TextField
            id="brand"
            label="Marca*"
            variant="outlined"
            fullWidth
            value={brand}
            onChange={handleBrandChange}
            disabled={vehiclesLoading}
          />
        </Box>

        <Box className="input-content">
          <TextField
            id="plate"
            label="Placa*"
            variant="outlined"
            fullWidth
            value={plate}
            error={!plateIsValid && plate.length === 8}
            helperText={!plateIsValid && plate.length === 8 ? "Formato errado! Ex.: AAA-9999" : ""}
            onChange={handlePlateChange}
            disabled={vehiclesLoading}
          />
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2} marginTop={4}>
          <Button color="warning" onClick={onCloseModal} disabled={vehiclesLoading}>
            Cancelar
          </Button>
          <LoadingButton
            variant="contained"
            onClick={handleConfirmModal}
            disabled={!brand || !plate || !plateIsValid}
            loading={vehiclesLoading}
          >
            Confirmar
          </LoadingButton>
        </Box>
      </Box>
    </Modal>
  );
}

export default VehicleModal;
