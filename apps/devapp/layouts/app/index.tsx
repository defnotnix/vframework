"use client";

import { PropsWithChildren, useEffect } from "react";
//vfw
import { AppWrapper } from "@nyx/ui";
import { QueryWrapper } from "@nyx/core";
//themes
import { configThemeMantine } from "@/config/theme";
//styles
import classes from "./app.module.css";
//mantinestyles
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/notifications/styles.css";

//oauth

export function LayoutApp({ children }: PropsWithChildren) {
  return (
    <QueryWrapper
      apiProvider={"https://dummyjson.com"}
      withCredentials={false}
      timeout={5000}
      queryProps={{
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }}
    >
      <AppWrapper
        theme={configThemeMantine}
        defaultColorScheme={"light"}
        classNames={classes}
        extraHeadTags={
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
              rel="stylesheet"
            />
          </>
        }
      >
        {children}
      </AppWrapper>
    </QueryWrapper>
  );
}
