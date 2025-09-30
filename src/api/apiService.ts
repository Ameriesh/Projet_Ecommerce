import ky from "ky";
import { HTTPError } from "ky";

interface ApiError {
  code: string;
  message: string;
}

const baseUrl = ky.create({
  prefixUrl: "https://real-time-amazon-data.p.rapidapi.com",
  timeout: 15000,
  headers: {
    "X-Rapidapi-Key": "2c28b7094emshfb77b7dd0033a54p1deb16jsnf96a7495c52f",
    "X-Rapidapi-Host": "real-time-amazon-data.p.rapidapi.com",
  },
});

const getMessage = (status: number): ApiError => {
  switch (status) {
    case 404:
      return { code: "404", message: "La ressource demandée n'a pas été trouvée" };
    case 500:
      return { code: "500", message: "Le serveur est indisponible" };
    default:
      return { code: "unknown", message: "Erreur inconnue" };
  }
};

export const apiService = {
  get: async <T>(endpoint: string, searchParams?: Record<string, string>): Promise<T> => {
    try {
      const response = await baseUrl.get(endpoint, { searchParams });
      return (await response.json()) as T;
    } catch (error: unknown) {
      if (error instanceof HTTPError) {
        const err = getMessage(error.response.status);
        throw new Error(err.message);
      }
      throw new Error("Erreur inattendue");
    }
  },
};
