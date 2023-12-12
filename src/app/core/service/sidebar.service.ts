import { getSvg } from 'src/app/svg/svgIcon';
import { RouteInfo } from './../../layout/sidebar/sidebar.metadata';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  routeData: RouteInfo[] = [
    {
      path: "/project/project-master",
      title: "Project Master",
      icon: getSvg[0]?.ProjectMaster,
      iconhoverblue: getSvg[0]?.ProjectMaster1,
      iconhoversaffron: getSvg[0]?.ProjectMaster1,
      isHover: false,
      class: "",
      groupTitle: true,
      badge: "",
      badgeClass: "",
      role: ["Admin"],
      submenu: [],
    },
    {
      path: "/project/project-board",
      title: "Projects Board",
      icon: getSvg[0]?.ProjectsBoard,
      iconhoverblue: getSvg[0]?.ProjectsBoard1,
      iconhoversaffron: getSvg[0]?.ProjectsBoard1,
      isHover: false,
      class: "menu-toggle",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["Admin"],
      submenu: [
      ],
    },
    {
      path: "/project/Task-Approval",
      title: "Task Approval",
      icon: getSvg[0]?.TaskApproval,
      iconhoverblue: getSvg[0]?.TaskApproval1,
      iconhoversaffron: getSvg[0]?.TaskApproval1,
      isHover: false,
      class: "menu-toggle",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["Admin"],
      submenu: [
      ],

    },
    {
      path: "/project/Project-Reports",
      title: "Project Reports",
      icon: getSvg[0]?.ProjectReports,
      iconhoverblue: getSvg[0]?.ProjectReports1,
      iconhoversaffron: getSvg[0]?.ProjectReports1,
      isHover: false,
      class: "menu-toggle",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["Admin"],
      submenu: [
        {
          path: "help-desk/ticket-dashboard",
          title: "TICKET DASHBOARD",
          icon: getSvg[0]?.user,
          iconhoverblue: getSvg[0]?.user1,
          iconhoversaffron: getSvg[0]?.home1,
          isHover: false,
          class: "menu-toggle",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["Admin"],
          submenu: []
        },
        {
          path: "help-desk/ticket-category",
          title: "TICKET CATEGORY",
          icon: getSvg[0]?.user,
          iconhoverblue: getSvg[0]?.user1,
          iconhoversaffron: getSvg[0]?.home1,
          isHover: false,
          class: "menu-toggle",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["Admin"],
          submenu: []
        },
        {
          path: "help-desk/ticket-raised",
          title: "TICKET RAISED",
          icon: getSvg[0]?.user,
          iconhoverblue: getSvg[0]?.user1,
          iconhoversaffron: getSvg[0]?.home1,
          isHover: false,
          class: "menu-toggle",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["Admin"],
          submenu: []
        },
        {
          path: "help-desk/ticket-received",
          title: "TICKET RECEIVED",
          icon: getSvg[0]?.user,
          iconhoverblue: getSvg[0]?.user1,
          iconhoversaffron: getSvg[0]?.home1,
          isHover: false,
          class: "menu-toggle",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["Admin"],
          submenu: []
        },],
    },
    // {
    //   path: "/organization-master/organization",
    //   title: "Organization",
    //   icon: getSvg[0]?.helpdesk,
    //   iconhoverblue: getSvg[0]?.helpdesk1,
    //   iconhoversaffron: getSvg[0]?.helpdesk3,
    //   isHover: false,
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["Admin"],
    //   submenu: [
    //     {
    //       path: "/organization-master/organization",
    //       title: "Organization",
    //       icon: getSvg[0]?.user,
    //       iconhoverblue: getSvg[0]?.user1,
    //       iconhoversaffron: getSvg[0]?.home1,
    //       isHover: false,
    //       class: "menu-toggle",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: ["Admin"],
    //       submenu: []
    //     },
    //     {
    //       path: "/organization-master/department",
    //       title: "Department",
    //       icon: getSvg[0]?.user,
    //       iconhoverblue: getSvg[0]?.user1,
    //       iconhoversaffron: getSvg[0]?.home1,
    //       isHover: false,
    //       class: "menu-toggle",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: ["Admin"],
    //       submenu: []
    //     },
    //     {
    //       path: "/organization-master/designation",
    //       title: "Designation",
    //       icon: getSvg[0]?.user,
    //       iconhoverblue: getSvg[0]?.user1,
    //       iconhoversaffron: getSvg[0]?.home1,
    //       isHover: false,
    //       class: "menu-toggle",
    //       groupTitle: false,
    //       badge: "",
    //       badgeClass: "",
    //       role: ["Admin"],
    //       submenu: []
    //     },
    //   ],
    // },


    // {
    //   path: "/organization-master/organization",
    //   title: "Project Master",
    //   icon: getSvg[0]?.ProjectMaster,
    //   iconhoverblue: getSvg[0]?.ProjectMaster1,
    //   iconhoversaffron: getSvg[0]?.ProjectMaster1,
    //   isHover: false,
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["Admin"],
    //   submenu: [
    //   ],
    // },
  
    // {
    //   path: "/organization-master/organization",
    //   title: "Projects Board",
    //   icon: getSvg[0]?.ProjectsBoard,
    //   iconhoverblue: getSvg[0]?.ProjectsBoard1,
    //   iconhoversaffron: getSvg[0]?.ProjectsBoard1,
    //   isHover: false,
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["Admin"],
    //   submenu: [
    //   ],
    // },
  
    // {
    //   path: "/organization-master/organization",
    //   title: "Task Approval",
    //   icon: getSvg[0]?.TaskApproval,
    //   iconhoverblue: getSvg[0]?.TaskApproval1,
    //   iconhoversaffron: getSvg[0]?.TaskApproval1,
    //   isHover: false,
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["Admin"],
    //   submenu: [
    //   ],
    // },
  
    // {
    //   path: "/organization-master/organization",
    //   title: "Project Reports",
    //   icon: getSvg[0]?.ProjectReports,
    //   iconhoverblue: getSvg[0]?.ProjectReports1,
    //   iconhoversaffron: getSvg[0]?.ProjectReports1,
    //   isHover: false,
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: ["Admin"],
    //   submenu: [
    //   ],
    // },
  ];  
  
  public getSidebar(): any {
    const routeObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.routeData);
      }, 100);
    });

    return routeObservable;
  }}
