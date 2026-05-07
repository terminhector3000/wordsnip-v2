import axios, { AxiosError } from "axios";

type ApiError = {
  message: string;
  code?: string;
};
type BackendError = {
  error: string;
};

export const handleErrors = (err: unknown): ApiError => {
  if (axios.isAxiosError(err)) {
    const errorMessage = err as AxiosError<BackendError>;
    const errorCode: string = String(errorMessage.code);
    for (const [k, v] of Object.entries(errorMessage)) {
      console.log(k, ":", v);
    }
    if (errorMessage.response) {
      if (errorMessage.code === "ERR_BAD_REQUEST") {
        if (typeof errorMessage.response.data.error === "string") {
          return {
            message: errorMessage.response.data.error,
            code: errorCode,
          };
        }
      }

      return {
        message: errorMessage.message || "Server Error",
        code: errorCode,
      };
    }

    if (errorMessage.request) {
      if (errorMessage.code === "ERR_NETWORK") {
        return {
          message: "Unable to connect. Please try again",
          code: "ERR_NETWORK",
        };
      }
      return {
        message: errorMessage.message || "Server Temporarily out of Service",
        code: errorCode,
      };
    }

    return { message: errorMessage.message, code: errorCode };
  }

  return { message: "Unexpected Error" };
};
