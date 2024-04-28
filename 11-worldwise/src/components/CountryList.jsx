import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );

  //   const countries = cities.reduce((arr, city) => {
  //     if (!arr.map((el) => el.country).includes(city.country))
  //       return [...arr, { country: city.country, emoji: city.emoji }];
  //     else return arr;
  //   }, []);

  //  ===== Or this method
  const countries = [];
  cities.forEach((city) => {
    const index = countries.findIndex(
      (country) => country.country === city.country
    );
    if (index === -1) {
      countries.push({ country: city.country, emoji: city.emoji });
    }
  });

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country} />
      ))}
    </div>
  );
}

export default CountryList;
