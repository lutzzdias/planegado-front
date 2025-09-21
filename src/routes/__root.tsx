/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import css from "../app.css?url";
import { Navbar } from "../components/Navbar";
import { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Planegado" },
    ],
    links: [{ rel: "stylesheet", href: css }],
  }),
  errorComponent: () => <div>error</div>, // TODO: create component
  notFoundComponent: () => <div>error</div>, // TODO: create component
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className="h-full font-roboto">
      <head>
        <HeadContent />
      </head>
      <body className="flex h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Scripts />
      </body>
    </html>
  );
}
