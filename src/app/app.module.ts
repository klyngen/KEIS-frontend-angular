import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RentComponent } from './rent/rent.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    RentComponent,
    EquipmentComponent,
    UsersComponent,
    FooterComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      AngularFontAwesomeModule,
      HttpClientModule,
      DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
