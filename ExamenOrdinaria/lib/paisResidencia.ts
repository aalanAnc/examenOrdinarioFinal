export type paisResidencia = {
  name: string;
};

const getPaisResidencia = async (cityName: string): Promise<paisResidencia> => {
  const API_URL = "https://api.api-ninjas.com/v1/city?name=";
  const URL = `${API_URL}/alpha${cityName}`;
  const response = await fetch(URL);
  if (response.status !== 200) {
    throw new Error("Invalid City");
  }
  const data = await response.json();
  if (data.length === 0) {
    throw new Error(`Invalid City`);
  }
  return {
    name: data[0].name.city,
  };
};

export default getPaisResidencia;
