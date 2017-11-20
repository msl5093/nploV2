import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRouterModule } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { PassesComponent } from './components/passes/passes.component';
import { FaqComponent } from './components/faq/faq.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { PageService } from './services/page.service';
import { ClassesService } from './services/classes.service';
import { PassesService } from './services/passes.service';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ScheduleComponent,
    AboutComponent,
    ClassesComponent,
    PassesComponent,
    FaqComponent,
    SpinnerComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    PageService,
    ClassesService,
    PassesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
