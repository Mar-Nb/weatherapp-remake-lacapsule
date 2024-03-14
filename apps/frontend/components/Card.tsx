import { Divider, HStack, VStack } from "@frontend/styled-system/jsx";
import { css } from "@frontend/styled-system/css";
import { City } from "@server/cities/city.schema";
import Image from "next/image";

interface CardProps {
  city: City;
  rmCity: (id: string) => Promise<void>;
}

export default function Card({city, rmCity}: CardProps) {
  return (
    <VStack
      width="48"
      border="2px solid white"
      borderRadius="lg"
      bg="stone.950"
      gap="1"
      pb="2"
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
        p="3"
        width="full"
      >
        <span
          className={css({
            fontWeight: "bold",
            flexGrow: "1",
          })}
        >
          {city.name}
        </span>
        <Image
          src="/close.svg"
          alt="delete button"
          width={15}
          height={15}
          className={css({
            cursor: "pointer",
            opacity: { base: "1", _hover: "0.75" },
          })}
          onClick={async () => await rmCity(city._id)}
        />
      </HStack>

      <Divider orientation="horizontal" color="white" mb="2" />

      <Image
        src={`/${city.main.toLowerCase()}.png`}
        alt={`${city.main}`}
        width={40}
        height={40}
      />

      <span className={css({ textTransform: "capitalize" })}>
        {city.description}
      </span>
      <span>{city.tempMin + "°C - " + city.tempMax + "°C"}</span>
    </VStack>
  );
}
