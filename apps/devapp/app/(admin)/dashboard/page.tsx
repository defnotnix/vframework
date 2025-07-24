"use client";

import { useEffect } from "react";
import { useBreadcrumbContext } from "../../../../../packages/ui/src/context/BreadcrumbContext";

export default function () {
  const { setBreadcrumbs } = useBreadcrumbContext();
  useEffect(() => {
    setBreadcrumbs([
      { label: "Rag" },
      { label: "Shy" },
      { label: "Nix" },
      { label: "Echo" },
      { label: "Regs" },
    ]);

    return () => setBreadcrumbs(null);
  }, []);
  return <>Dashboard</>;
}
