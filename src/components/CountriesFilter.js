import { gql, useLazyQuery } from '@apollo/client';

const GET_COUNTRIES_BY_CURRENCY = gql`
  query CountryByCurrency($currency: String!) {
    countries(filter: { currency: { eq: $currency } }) {
      emoji
      name
      code
      currency
    }
  }
`;
export default function CountriesFilter() {
  const [getFilterCountries, { data }] = useLazyQuery(
    GET_COUNTRIES_BY_CURRENCY,
    {
      variables: {
        currency: 'EUR',
      },
    }
  );
  console.log(data);
  return (
    <div>
      <button onClick={() => getFilterCountries()}>Get</button>
      {data?.countries.map((country) => (
        <h1>{country.name}</h1>
      ))}
    </div>
  );
}
