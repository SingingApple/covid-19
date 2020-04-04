const dataLink = "https://api.covid19india.org/data.json";

const getData = async () => {
  const response = await fetch(dataLink);
  const data = await response.json();
  return data;
};

const countryData = async () => {
  const response = fetch(
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "8ef33c47ccmsh1c15ac14095d5e1p1cba3ajsna20a155c67b8"
      }
    }
  );
  const data = (await response).json();
  return data;
};
