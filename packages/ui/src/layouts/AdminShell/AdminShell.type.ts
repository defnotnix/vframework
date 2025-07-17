export type NavItem = {
  label?: string;
  description?: string;
  icon?: React.ReactNode;
  url?: string;
  children?: NavItem[];
  roles: ("admin" | "guest" | "user")[];
  horizontalLine?: boolean;
  customRender?: React.ReactNode;
};

export type PropAdminShellTopnav = {
  navItems: any[];
};

export type PropAdminShellMainnav = {
  logo: string;
  navItems: NavItem[];
  appTitle: string;
};

export type PropAdminShell = {
  classnames?: any;
  children: React.ReactNode;
  actions?: React.ReactNode;
} & PropAdminShellMainnav;
