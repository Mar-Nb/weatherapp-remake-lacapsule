"use client";

import { trpc } from "@frontend/app/trpc";
import Card from "@frontend/components/Card";
import Navbar from "@frontend/components/Navbar";
import { Center, Container, Flex, Grid } from "@frontend/styled-system/jsx";
import { City } from "@server/cities/city.schema";
import { useState } from "react";

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  
  (async () => {
    const data = await trpc.getAllCities.query();
    setCities(data);
  })();

  /*useEffect(() => {
    (async () => {
      const data = await trpc.getAllCities.query();
      setCities(data);
    })();
  }, []);*/

  async function searchCity(city: string) {
    const newCity = await trpc.addCity.query(city);
    setCities(cities => [...cities, newCity]);
  }

  return (
    <Flex direction="column" height="full">
      <Navbar search={searchCity} />

      <Container
        bgGradient="to-t"
        gradientFrom="stone.500"
        gradientTo="stone.900"
        height="full"
        width="full"
        pt="10"
      >
        <Center>
          <Grid columns={5} gap="10">
            {cities && cities.map((city, i) => <Card key={i} {...city} />)}
          </Grid>
        </Center>
      </Container>
    </Flex>
  );
}
