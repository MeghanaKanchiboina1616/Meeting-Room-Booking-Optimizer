import {
  Button,
  Box,
  Typography,
  Alert,
} from "@mui/material";

import { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { uploadRooms } from "../api/upload";

export default function UploadRooms() {
  const [file, setFile] =
    useState<File | null>(null);

  const mutation = useMutation({
    mutationFn: uploadRooms,
  });

  const handleUpload = () => {
    if (!file) return;

    mutation.mutate(file);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
      }}
    >
      <Typography variant="h5">
        Upload Rooms Excel
      </Typography>

      <Button
        variant="outlined"
        component="label"
      >
        Choose File

        <input
          type="file"
          hidden
          accept=".xlsx,.xls"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] ||
                null
            )
          }
        />
      </Button>

      {file && (
        <Typography>
          Selected: {file.name}
        </Typography>
      )}

      <Button
        variant="contained"
        disabled={
          !file ||
          mutation.isPending
        }
        onClick={
          handleUpload
        }
      >
        {mutation.isPending
          ? "Uploading..."
          : "Upload"}
      </Button>

      {mutation.isSuccess && (
        <Alert severity="success">
          Rooms uploaded
          successfully!
        </Alert>
      )}

      {mutation.isError && (
        <Alert severity="error">
          Upload failed
        </Alert>
      )}
    </Box>
  );
}