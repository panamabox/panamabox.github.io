import { Routes } from '@angular/router';

import { Tarea1Component }   from './tarea1/tarea1.component';
import { Tarea2Component }   from './tarea2/tarea2.component';
import { Tarea3Component }   from './tarea3/tarea3.component';
import { Tarea4Component }   from './tarea4/tarea4.component';
import { Tarea5Component }   from './tarea5/tarea5.component';
import { ExamComponent }   from './exam/exam.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'tarea1',
        pathMatch: 'full',
    },
    {
        path: 'tarea1',
        component: Tarea1Component
    },
    {
        path: 'tarea2',
        component: Tarea2Component
    },
    {
        path: 'tarea3',
        component: Tarea3Component
    },
    {
        path: 'tarea4',
        component: Tarea4Component
    },
    {
        path: 'tarea5',
        component: Tarea5Component
    },
    {
        path: 'exam',
        component: ExamComponent
    }
]
