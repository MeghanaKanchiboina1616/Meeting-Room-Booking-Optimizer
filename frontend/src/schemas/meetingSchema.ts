import { z } from "zod";

export const meetingSchema = z.object({
  title: z.string().min(1, "Title is required"),

  organizer: z.string().min(
    1,
    "Organizer is required"
  ),

  participants: z.coerce
    .number()
    .min(1, "At least 1 participant is required"),

  duration: z.coerce
    .number()
    .min(15, "Duration must be at least 15 minutes"),

  projector: z.boolean().default(false),

  preferred_building: z.string(),
});

export type MeetingFormData =
  z.output<typeof meetingSchema>;