import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Alert,
} from "@mui/material";
import {
  useForm,
  type SubmitHandler,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  meetingSchema,
} from "../schemas/meetingSchema";

import type {
  MeetingFormData,
} from "../schemas/meetingSchema"; 

import { createMeeting } from "../api/meetings";

import { useState } from "react";

import {
  useQueryClient,
} from "@tanstack/react-query";

export default function MeetingForm() {
  const [success, setSuccess] = useState("");

  const [errorMessage, setErrorMessage] =
    useState("");
  const queryClient = useQueryClient();
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm<MeetingFormData>({
  resolver:
    zodResolver(
      meetingSchema
    ) as any,

  defaultValues: {
    title: "",
    organizer: "",
    participants: 1,
    duration: 30,
    projector: false,
    preferred_building: "",
  },
});

  const onSubmit: SubmitHandler<MeetingFormData> = async (data) => {
    try {
      setSuccess("");
      setErrorMessage("");

      const payload = {
        title: data.title,

        organizer:
          data.organizer,

        participants:
          data.participants,

        duration:
          data.duration,

        preferences: {
          projector:
            data.projector,

          preferred_building:
            data.preferred_building,
        },
      };

      await createMeeting(
        payload
      );

      queryClient.invalidateQueries({
        queryKey: ["meetings"],
       });

      setSuccess(
        "Meeting created successfully!"
      );

      reset();
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Failed to create meeting"
      );
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
      }}
    >
      {success && (
        <Alert severity="success">
          {success}
        </Alert>
      )}

      {errorMessage && (
        <Alert severity="error">
          {errorMessage}
        </Alert>
      )}

      <TextField
        label="Title"
        {...register("title")}
        error={!!errors.title}
        helperText={
          errors.title?.message
        }
      />

      <TextField
        label="Organizer"
        {...register(
          "organizer"
        )}
        error={
          !!errors.organizer
        }
        helperText={
          errors.organizer
            ?.message
        }
      />

      <TextField
        label="Participants"
        type="number"
        {...register(
          "participants"
        )}
        error={
          !!errors.participants
        }
        helperText={
          errors.participants
            ?.message
        }
      />

      <TextField
        label="Duration (minutes)"
        type="number"
        {...register(
          "duration"
        )}
        error={
          !!errors.duration
        }
        helperText={
          errors.duration
            ?.message
        }
      />

      <TextField
        label="Preferred Building"
        {...register(
          "preferred_building"
        )}
        error={
          !!errors.preferred_building
        }
        helperText={
          errors
            .preferred_building
            ?.message
        }
      />

      <FormControlLabel
        control={
          <Checkbox
            {...register(
              "projector"
            )}
          />
        }
        label="Projector Required"
      />

      <Button
        variant="contained"
        type="submit"
        disabled={
          isSubmitting
        }
      >
        {isSubmitting
          ? "Creating..."
          : "Create Meeting"}
      </Button>
    </Box>
  );
}