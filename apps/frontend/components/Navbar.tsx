import { Circle, HStack } from "@frontend/styled-system/jsx";
import { css } from "@frontend/styled-system/css";
import Image from "next/image";

export default function Navbar() {
  return (
    <HStack gap="12" p="4" bg="stone.900">
      <span className={css({ fontSize: "xl", fontWeight: "bold" })}>
        WeatherApp
      </span>

      <HStack gap="2" justify="space-evenly" bg="#2f3640" rounded="full">
        <input
          className={css({
            border: "none",
            background: "none",
            outline: "none",
            fontSize: "md",
            p: "12px 24px 12px 24px",
          })}
          type="text"
          placeholder="Entrez le nom d'une ville"
        />

        <button className={css({ pl: "4", cursor: "pointer" })}>
          <Circle
            p="3"
            className={css({ bg: { base: "blue.500", _hover: "blue.700" } })}
          >
            <Image src="/glass.svg" alt="search" width={20} height={20} />
          </Circle>
        </button>
      </HStack>
    </HStack>
  );
}
