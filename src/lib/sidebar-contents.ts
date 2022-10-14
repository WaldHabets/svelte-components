
export interface SidebarItem {
  icon: string;
  href: string;
  text: string;
}
export interface SidebarGroup {
  name: string;
  items: SidebarItem[];
}
