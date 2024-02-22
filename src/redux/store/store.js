
"use client";
import { configureStore } from "@reduxjs/toolkit";
import professionalDetails from "../slices/profDetails";
import personalDetails from "../slices/personalDetails";

export const store = configureStore({
  reducer: {
    professionalDetails: professionalDetails,
    personalDetails: personalDetails,
  },
});
