import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { Tarea1Component }   from './tarea1/tarea1.component';
import { Tarea2Component }   from './tarea2/tarea2.component';
import { Tarea3Component }   from './tarea3/tarea3.component';
import { Tarea4Component }   from './tarea4/tarea4.component';
import { Tarea5Component }   from './tarea5/tarea5.component';
import { ExamComponent }   from './exam/exam.component';
import { ResultComponent }   from './result/result.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    Tarea1Component,
    Tarea2Component,
    Tarea3Component,
    Tarea4Component,
    Tarea5Component,
    ExamComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
