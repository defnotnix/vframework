export type PropAdminShellTopnav = {
  navItems: any[];
};

export type PropAdminShell = {
  //styles
  classNames?: any;

  children: React.ReactNode;
} & PropAdminShellTopnav;
