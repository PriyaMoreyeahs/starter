// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: any;
  iconhoverblue:any ;
  iconhoversaffron:any ;
  class: string;
  isHover:boolean;
  groupTitle: boolean;
  badge: string;
  badgeClass: string;
  role: string[];
  submenu: RouteInfo[];
}
