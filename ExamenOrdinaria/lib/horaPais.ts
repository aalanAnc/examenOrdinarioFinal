export type horaPais = {
  inforTime: string;
};

const getHoraPais = async (city: string): Promise<horaPais> => {
  const API_URL = "https://api.api-ninjas.com/v1/worldtime?city=";
  const URL = `${API_URL}/alpha${city}`;
  const response = await fetch(URL);
  if (response.status !== 200) {
    throw new Error("Invalid City");
  }
  const data = await response.json();
  if (data.length === 0) {
    throw new Error(`Invalid City`);
  }
  return {
    inforTime: data[0].dateTime,
  };
};
