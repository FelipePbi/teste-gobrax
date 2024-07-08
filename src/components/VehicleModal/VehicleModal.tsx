import { ChangeEvent, useState } from "react";
import "./VehicleModal.scss";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import * as T from "./types";

function VehicleModal({ openModal, onCloseModal, onConfirmModal }: T.VehicleModalProps) {
  const [brand, setBrand] = useState("");
  const [plate, setPlate] = useState("");

  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  const handlePlateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlate(event.target.value);
  };

  const handleConfirmModal = () => {
    onConfirmModal();
  };

  return (
    <Modal open={openModal} aria-labelledby="modal-vehicle-title">
      <Box className="modal-content">
        <Typography id="modal-vehicle-title" variant="h6" component="h2" marginBottom={3}>
          Adicionar Veículo
        </Typography>

        <Box className="input-content">
          <TextField
            id="brand"
            label="Marca"
            variant="outlined"
            fullWidth
            value={brand}
            onChange={handleBrandChange}
          />
        </Box>

        <Box className="input-content">
          <TextField
            id="plate"
            label="Placa"
            variant="outlined"
            fullWidth
            value={plate}
            onChange={handlePlateChange}
          />
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2} marginTop={4}>
          <Button color="warning" onClick={onCloseModal}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleConfirmModal} disabled={!brand || !plate}>
            Confirmar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default VehicleModal;
