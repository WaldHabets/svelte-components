export interface SidebarItem {
  icon: string;
  href: string;
  text: string;
}
export interface SidebarGroup {
  name: string | null;
  items: SidebarItem[];
}

export interface SidebarContent {
  title: string;
  items: SidebarGroup[];
}
