import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { PassesComponent } from './components/passes/passes.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'about', component: AboutComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'passes', component: PassesComponent },
    { path: 'faq', component: FaqComponent }
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule { }