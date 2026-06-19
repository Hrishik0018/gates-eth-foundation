import { Link as RouterLink, NavLink, Outlet as RouterOutlet, useNavigate, type LinkProps as RouterLinkProps } from "react-router-dom";
import type { AnchorHTMLAttributes, ComponentType, ReactNode } from "react";

export type HeadConfig = {
  meta?: Array<Record<string, string>>;
  links?: Array<Record<string, string>>;
};

export type RouteConfig = {
  path?: string;
  component?: ComponentType;
  head?: () => HeadConfig;
  notFoundComponent?: ComponentType;
  errorComponent?: ComponentType;
  shellComponent?: ComponentType<{ children: ReactNode }>;
};

type CompatLinkProps = Omit<RouterLinkProps, "className"> & {
  className?: string;
  activeProps?: { className?: string };
};

export function createFileRoute(path: string) {
  return (config: RouteConfig) => ({ path, ...config });
}

export function createRootRouteWithContext<TContext>() {
  void (0 as unknown as TContext);
  return (config: RouteConfig) => ({ path: "/", ...config });
}

export function Link({ activeProps, className, to, ...props }: CompatLinkProps) {
  if (activeProps?.className) {
    return (
      <NavLink
        to={to}
        end
        {...props}
        className={({ isActive }) => (isActive ? activeProps.className ?? className ?? "" : className ?? "")}
      />
    );
  }
  return <RouterLink to={to} className={className} {...props} />;
}

export function Outlet() {
  return <RouterOutlet />;
}

export function useRouter() {
  const navigate = useNavigate();
  return { invalidate: () => navigate(0) };
}

export function HeadContent() { return null; }
export function Scripts() { return null; }
export type LinkProps = CompatLinkProps;
export type NavigateAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
