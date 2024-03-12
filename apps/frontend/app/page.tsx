import { trpc } from "@frontend/app/trpc";
import Card from "@frontend/components/Card";
import Navbar from "@frontend/components/Navbar";
import { css } from "@frontend/styled-system/css";
import { Container, Flex } from "@frontend/styled-system/jsx";

export default async function Home() {
  // const { greeting } = await trpc.hello.query({ name: 'Martin' });
  const cities = await trpc.getAllCities.query();
  const users = await trpc.getAllUsers.query();

  return (
    <Flex direction="column" height="full">
      <Navbar />

      <Container
        bgGradient="to-t"
        gradientFrom="stone.500"
        gradientTo="stone.900"
        height="full"
      >
        <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Hello 🐼!
        </div>

        <h2>getAllCities</h2>
        <span>{JSON.stringify(cities)}</span>

        <Card {...cities[0]} />

        <hr />

        <h2>getAllUsers</h2>
        <span>{JSON.stringify(users)}</span>
      </Container>
    </Flex>
  );
}
