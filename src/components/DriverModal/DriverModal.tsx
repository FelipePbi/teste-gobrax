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
import { LoadingButton } from "@mui/lab";
import { formatMask } from "../helpers/formatString";

function DriverModal({
  openModal,
  driverLoading,
  vehicleOptions,
  onCloseModal,
  onConfirmModal,
}: T.DriverModalProps) {
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
    const valueStr = event.target.value;
    const value = valueStr.match(/\d+/g)?.join("");

    if (value && value.length <= 11) {
      setDocument(formatMask("XXX.XXX.XXX-XX", value));
    } else if (!value) {
      setDocument("");
    }
  };

  const handleConfirmModal = () => {
    onConfirmModal({
      name,
      document,
      vehicleId: vehicle,
    });
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
            label="Nome*"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleNameChange}
            disabled={driverLoading}
          />
        </Box>

        <Box className="input-content">
          <TextField
            id="document"
            label="Documento*"
            variant="outlined"
            fullWidth
            value={document}
            onChange={handleDocumentChange}
            disabled={driverLoading}
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
            disabled={!vehicleOptions?.length || driverLoading}
          >
            {vehicleOptions?.map(({ id, brand, plate }) => (
              <MenuItem key={id} value={id}>
                {brand} - {plate}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box display="flex" justifyContent="flex-end" gap={2} marginTop={4}>
          <Button color="warning" onClick={onCloseModal} disabled={driverLoading}>
            Cancelar
          </Button>
          <LoadingButton
            variant="contained"
            onClick={handleConfirmModal}
            disabled={!name || !document}
            loading={driverLoading}
          >
            Confirmar
          </LoadingButton>
        </Box>
      </Box>
    </Modal>
  );
}

export default DriverModal;
