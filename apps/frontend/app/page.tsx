import { trpc } from "@frontend/app/trpc";

export default async function Home() {
  // const { greeting } = await trpc.hello.query({ name: 'Martin' });
  const cities = await trpc.getAllCities.query();

  return <div>{JSON.stringify(cities)}</div>;
}
