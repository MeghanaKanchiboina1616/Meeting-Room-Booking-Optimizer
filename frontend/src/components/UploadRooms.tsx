import {
  Button,
  Box,
  Typography,
  Alert,
  Paper,
  LinearProgress,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionIcon from "@mui/icons-material/Description";

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
        gap: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          border: "2px dashed #CBD5E1",
          borderRadius: 4,
          p: 5,
          textAlign: "center",
          backgroundColor: "#F8FAFC",

          "&:hover": {
            borderColor: "#2563EB",
            backgroundColor: "#EFF6FF",
          },
        }}
      >
        <CloudUploadIcon
          sx={{
            fontSize: 60,
            color: "#2563EB",
            mb: 2,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
          }}
        >
          Upload Excel File
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
            mb: 3,
          }}
        >
          Select an .xlsx or .xls file containing room information
        </Typography>

        <Button
          variant="contained"
          component="label"
          size="large"
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
            fontWeight: 700,
            background:
              "linear-gradient(90deg,#2563EB,#1D4ED8)",

            "&:hover": {
              background:
                "linear-gradient(90deg,#1D4ED8,#1E40AF)",
            },
          }}
        >
          Choose Excel File

          <input
            hidden
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] ||
                  null
              )
            }
          />
        </Button>
      </Paper>

      {file && (
        <Paper
          sx={{
            p: 2,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            gap: 2,
            backgroundColor: "#F8FAFC",
          }}
        >
          <DescriptionIcon
            color="primary"
          />

          <Box>
            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {file.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Ready for upload
            </Typography>
          </Box>
        </Paper>
      )}

      {mutation.isPending && (
        <LinearProgress />
      )}

      <Button
        variant="contained"
        disabled={
          !file ||
          mutation.isPending
        }
        onClick={handleUpload}
        size="large"
        sx={{
          py: 1.5,
          borderRadius: 3,
          fontWeight: 700,
          fontSize: "1rem",
          textTransform: "none",
          background:
            "linear-gradient(90deg,#10B981,#059669)",

          "&:hover": {
            background:
              "linear-gradient(90deg,#059669,#047857)",
          },
        }}
      >
        {mutation.isPending
          ? "Uploading..."
          : "Upload Rooms"}
      </Button>

      {mutation.isSuccess && (
        <Alert severity="success">
          Rooms uploaded successfully!
        </Alert>
      )}

      {mutation.isError && (
        <Alert severity="error">
          Upload failed. Please try again.
        </Alert>
      )}
    </Box>
  );
}