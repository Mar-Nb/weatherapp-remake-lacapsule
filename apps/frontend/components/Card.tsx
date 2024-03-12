import { Divider, HStack, VStack } from "@frontend/styled-system/jsx";
import { css } from "@frontend/styled-system/css";
import { City } from "@server/cities/city.schema";
import Image from "next/image";

export default function Card(props: City) {
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
          {props.name}
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
        />
      </HStack>

      <Divider orientation="horizontal" color="white" mb="2" />

      <Image
        src={`/${props.main.toLowerCase()}.png`}
        alt={`${props.main}`}
        width={40}
        height={40}
      />

      <span className={css({ textTransform: "capitalize" })}>
        {props.description}
      </span>
      <span>{props.tempMin + "°C - " + props.tempMax + "°C"}</span>
    </VStack>
  );
}
