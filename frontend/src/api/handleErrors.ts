import axios, { AxiosError } from "axios";

type ApiError = {
  message: string;
};
type BackendError = {
  error: string;
};

export const handleErrors = (err: unknown): ApiError => {
  if (axios.isAxiosError(err)) {
    const errorMessage = err as AxiosError<BackendError>;
    if (errorMessage.response) {
      if (errorMessage.code === "ERR_BAD_REQUEST") {
        if (typeof errorMessage.response.data.error === "string") {
          return {
            message: String(errorMessage.response.data.error),
          };
        }
      }

      return {
        message: String(errorMessage.message) || "Server Error",
      };
    }

    if (errorMessage.request) {
      if (errorMessage.code === "ERR_NETWORK") {
        return {
          message: "Unable to connect. Please try again",
        };
      }
      return {
        message:
          String(errorMessage.message) || "Server Temporarily out of Service",
      };
    }

    return { message: String(errorMessage.message) };
  }

  return { message: "Unexpected Error" };
};
