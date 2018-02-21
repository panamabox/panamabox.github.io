import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'tarea1', title: 'Tarea 1',  icon:'ti-pencil-alt2', class: '' },
    { path: 'tarea2', title: 'Tarea 2',  icon:'ti-pencil-alt2', class: '' },
    { path: 'tarea3', title: 'Tarea 3',  icon:'ti-pencil-alt2', class: '' },
    { path: 'tarea4', title: 'Tarea 4',  icon:'ti-pencil-alt2', class: '' },
    { path: 'tarea5', title: 'Tarea 5',  icon:'ti-pencil-alt2', class: '' },
    { path: 'exam', title: 'Examen',  icon:'ti-ruler-alt-2', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    sidebarToggle(){
        var toggleButton = document.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];

        toggleButton.classList.remove('toggled');
        body.classList.remove('nav-open');
    }
}
