import { Fragment, useEffect, type ComponentType } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import type { HeadConfig, RouteConfig } from "./router-compat";

type RouteModule = { Route?: RouteConfig };

const routeModules = import.meta.glob<RouteModule>("./routes/**/*.tsx", { eager: true });
const discoveredRoutes = Object.values(routeModules)
  .map((module) => module.Route)
  .filter((route): route is RouteConfig & { path: string; component: ComponentType } => Boolean(route?.path && route?.component && route.path !== "/__root"))
  .sort((a, b) => b.path.length - a.path.length);

const defaultHead: HeadConfig = {
  meta: [
    { title: "Gates ETH Foundation — Empowering India Since 2011" },
    { name: "description", content: "A premier NGO advancing women empowerment, youth skill development and mental wellness for armed forces across India." },
    { property: "og:title", content: "Gates ETH Foundation" },
    { property: "og:description", content: "Empowering women, youth and the brave since 2011." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" }
  ]
};

function mergeHead(head?: HeadConfig): HeadConfig {
  return {
    meta: [...(defaultHead.meta ?? []), ...(head?.meta ?? [])],
    links: [...(head?.links ?? [])]
  };
}

function useManagedHead(head?: HeadConfig) {
  useEffect(() => {
    const finalHead = mergeHead(head);
    const createdNodes: HTMLElement[] = [];
    let title = "Gates ETH Foundation — Empowering India Since 2011";

    for (const item of finalHead.meta ?? []) {
      if (item.title) {
        title = item.title;
        continue;
      }
      const meta = document.createElement("meta");
      Object.entries(item).forEach(([key, value]) => meta.setAttribute(key, value));
      meta.setAttribute("data-managed-head", "true");
      document.head.appendChild(meta);
      createdNodes.push(meta);
    }

    for (const item of finalHead.links ?? []) {
      const link = document.createElement("link");
      Object.entries(item).forEach(([key, value]) => link.setAttribute(key, value));
      link.setAttribute("data-managed-head", "true");
      document.head.appendChild(link);
      createdNodes.push(link);
    }

    document.title = title;
    return () => createdNodes.forEach((node) => node.remove());
  }, [head]);
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
  return null;
}

function RouteRenderer({ route }: { route: RouteConfig & { component: ComponentType } }) {
  const Component = route.component;
  useManagedHead(route.head?.());
  return <Component />;
}

function NotFoundPage() {
  useManagedHead({ meta: [{ title: "404 — Gates ETH Foundation" }] });
  return (
    <SiteLayout>
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <div className="text-7xl font-bold text-foreground">404</div>
          <h1 className="mt-4 text-3xl font-semibold text-foreground">Page not found</h1>
          <p className="mt-3 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <a href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--saffron)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated transition-transform hover:scale-[1.02]">Go home</a>
        </div>
      </section>
    </SiteLayout>
  );
}

export default function App() {
  return (
    <Fragment>
      <ScrollToTop />
      <Routes>
        {discoveredRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<RouteRenderer route={route} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}
