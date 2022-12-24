export interface SidebarItem {
  icon: string;
  href: string;
  text: string;
}
export interface BackItem {
  text: string;
  href: string;
  icon: string;
}
export interface SidebarGroup {
  name: string;
  items: SidebarItem[];
}

export interface SidebarContent {
  back: BackItem | null;
  title: string;
  items: SidebarGroup[];
}
