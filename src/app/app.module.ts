import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MAT_DATE_LOCALE, MatSelectModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { CarteComponent } from './components/carte/carte.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { DishTableComponent } from './dish-table/dish-table.component';

import { QuickLunchService } from './services/quick-lunch.service'

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
