"use client";

import { trpc } from "@frontend/app/trpc";
import Card from "@frontend/components/Card";
import Navbar from "@frontend/components/Navbar";
import { Center, Container, Flex, Grid } from "@frontend/styled-system/jsx";
import { City } from "@server/cities/city.schema";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    (async () => {
      const data = await trpc.getAllCities.query();
      setCities(data);
    })();
  }, []);

  async function searchCity(city: string) {
    try {
      const newCity = await trpc.addCity.query(city);
      setCities((cities) => [...cities, newCity]);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  async function removeCity(cityId: string) {
    const isDelete = (await trpc.removeCity.query(cityId)) !== null;

    if (isDelete) {
      setCities((cities) => cities.filter((city) => city._id !== cityId));
    } else {
      toast.error("Problème lors de la suppression. Veuillez réessayer.");
    }
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
        py="10"
        overflow="scroll"
      >
        <Center>
          {!!cities.length && (
            <Grid columns={5} gap="10">
              {cities.map((c, i) => (
                <Card key={i} city={c} rmCity={removeCity} />
              ))}
            </Grid>
          )}

          {!cities.length && (
            <Image
              src="/spinner.gif"
              alt="loader spinner"
              width={120}
              height={120}
            />
          )}
        </Center>
      </Container>
    </Flex>
  );
}
