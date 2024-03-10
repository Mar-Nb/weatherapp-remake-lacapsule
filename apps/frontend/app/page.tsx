import { trpc } from "@frontend/app/trpc";
import { css } from "@frontend/styled-system/css"

export default async function Home() {
  // const { greeting } = await trpc.hello.query({ name: 'Martin' });
  const cities = await trpc.getAllCities.query();
  const users = await trpc.getAllUsers.query();

  return (
    <div>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>

      <h2>getAllCities</h2>
      <span>{JSON.stringify(cities)}</span>

      <hr /> 

      <h2>getAllUsers</h2>
      <span>{JSON.stringify(users)}</span>
    </div>
  );
}
