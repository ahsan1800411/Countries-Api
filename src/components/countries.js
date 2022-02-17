import { gql, useQuery } from '@apollo/client';

const GET_COUNTRIES = gql`
  query {
    countries {
      emoji
      name
      code
      currency
    }
  }
`;

export default function Countries() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  if (error) {
    return <h1>Error</h1>;
  }
  if (loading) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>Countries List</h1>
      {data.countries.map((country) => (
        <>
          <h1>Name:{country.name}</h1>
          <h2>Code:{country.code}</h2>
          <h3>Currency: {country.currency}</h3>
          <h4>Emoji:{country.emoji}</h4>
        </>
      ))}
    </>
  );
}
