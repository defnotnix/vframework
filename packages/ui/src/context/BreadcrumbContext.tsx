"use client";

import React, { createContext, useContext, useState } from "react";

export type Crumb = { label: string; href?: string };

const BreadcrumbContext = createContext<{
  breadcrumbs: Crumb[] | null;
  setBreadcrumbs: (crumbs: Crumb[] | null) => void;
}>({
  breadcrumbs: null,
  setBreadcrumbs: () => {},
});

export const BreadcrumbProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Crumb[] | null>(null);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumbContext = () => useContext(BreadcrumbContext);
