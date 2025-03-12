import useSWR from "swr";

const fetcher = async ([_, message]) => {
  const response = await fetch(
    `https://mocki.io/v1/bd249ba1-cfd4-4669-81ad-e75ab165cfb6?message=${encodeURIComponent(
      message
    )}`
  );

  if (!response.ok) throw new Error("Errore nel recupero della risposta");

  const data = await response.json();
  return data.reply; // L'API dovrebbe restituire un oggetto con { reply: "testo del bot" }
};

const useBot = (userMessage) => {
  const { data, isLoading, error, mutate } = useSWR(
    userMessage ? ["bot-response", userMessage] : null,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default useBot;
