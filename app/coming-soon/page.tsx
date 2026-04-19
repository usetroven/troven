import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Coming soon — Troven",
  description:
    "We’re polishing this corner of Troven. The main stage is already open — come take a look around.",
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
