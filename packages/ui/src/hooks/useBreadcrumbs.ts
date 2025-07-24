import { usePathname } from "next/navigation";
import { NavItem } from "../layouts/AdminShell/AdminShell.type";

export function useBreadcrumbs(links: NavItem[]) {
  const pathname = usePathname();

  const result: { label: string; href?: string }[] = [];

  const findPath = (
    items: NavItem[],
    parentTrail: { label: string; href?: string }[] = []
  ): boolean => {
    for (const item of items) {
      if (!item.label) continue;
      const currentTrail = [
        ...parentTrail,
        { label: item.label, href: item.url },
      ];

      if (pathname === item.url) {
        result.push(...currentTrail);
        return true;
      }

      if (item.children && findPath(item.children, currentTrail)) {
        return true;
      }
    }
    return false;
  };

  findPath(links);

  return result;
}
