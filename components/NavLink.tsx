"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import DownArrow from "@/components/icons/DownArrow";

interface Props {
  path: string;
  name: string;
}

function NavLink({ path, name }: Props): ReactElement {
  const pathname = usePathname();
  const isPathActive = path === pathname;

  return (
    <Link
      href={path}
      className={`text-base select-none  ${
        isPathActive
          ? "text-gray-800 font-bold dark:text-gray-400"
          : "text-gray-600 dark:text-gray-300 font-normal "
      }`}
    >
      {name} {isPathActive && <DownArrow />}
    </Link>
  );
}

export default NavLink;
