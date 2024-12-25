export interface NavLinkType {
  icon?: React.ElementType;
  label: string;
  href: string;
  pathMatch?: string;
  subMenu?: NavLinkType[];
}
