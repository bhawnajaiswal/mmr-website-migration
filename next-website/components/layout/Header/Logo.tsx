import Link from "next/link";
import { SITE } from "@/config/site";

interface LogoProps {
  variant?: "header" | "footer";
}

export default function Logo({ variant = "header" }: LogoProps) {
  const width = variant === "header" ? 144 : 144;
  const height = variant === "header" ? 66 : 66;

  return (
    <Link href="/" className="logo-link">
      <img
        src={SITE.logo}
        alt={SITE.name}
        width={width}
        height={height}
        className="logo-img"
      />
    </Link>
  );
}
