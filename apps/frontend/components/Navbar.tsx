import { Circle, HStack } from "@frontend/styled-system/jsx";
import { css } from "@frontend/styled-system/css";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  search: (value: string) => Promise<void>;
}

export default function Navbar({ search }: NavbarProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  
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
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        <button className={css({ pl: "4", cursor: "pointer" })} onClick={
            async () => {
            searchValue && await search(searchValue);
            setSearchValue('');
          }
        }>
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
