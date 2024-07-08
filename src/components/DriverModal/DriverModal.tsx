import { ChangeEvent, useState } from "react";
import "./DriverModal.scss";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import * as T from "./types";

function DriverModal({ openModal, onCloseModal, onConfirmModal }: T.DriverModalProps) {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [vehicle, setVehicle] = useState("");

  const handleVehicleChange = (event: SelectChangeEvent) => {
    setVehicle(event.target.value as string);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDocumentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDocument(event.target.value);
  };

  const handleConfirmModal = () => {
    onConfirmModal();
  };

  return (
    <Modal open={openModal} aria-labelledby="modal-driver-title">
      <Box className="modal-content">
        <Typography id="modal-driver-title" variant="h6" component="h2" marginBottom={3}>
          Adicionar Motorista
        </Typography>

        <Box className="input-content">
          <TextField
            id="name"
            label="Nome"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
        </Box>

        <Box className="input-content">
          <TextField
            id="document"
            label="Documento"
            variant="outlined"
            fullWidth
            value={document}
            onChange={handleDocumentChange}
          />
        </Box>

        <FormControl fullWidth>
          <InputLabel id="select-vehicle">Veículo</InputLabel>
          <Select
            labelId="select-vehicle"
            id="select-vehicle"
            value={vehicle}
            fullWidth
            placeholder="Veículo"
            label="Veículo"
            onChange={handleVehicleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Box display="flex" justifyContent="flex-end" gap={2} marginTop={4}>
          <Button color="warning" onClick={onCloseModal}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleConfirmModal} disabled={!name || !document}>
            Confirmar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DriverModal;
