import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RentComponent } from './rent/rent.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { AlertComponent } from './alert/alert.component';
import { EditEquipmentComponent } from './equipment/edit-equipment/edit-equipment.component';
import { DropDownInputComponent } from './small/drop-down-input/drop-down-input.component';
import { DeleteEquipmentComponent } from './equipment/delete-equipment/delete-equipment.component';
import { EquipmentStatusComponent } from './equipment/equipment-status/equipment-status.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InstanceAddComponent} from './equipment/instance-add/instance-add.component';

@NgModule({
  declarations: [
      AppComponent,
      NavigationComponent,
      DashboardComponent,
      RentComponent,
      EquipmentComponent,
      UsersComponent,
      FooterComponent,
      DynamicTableComponent,
      AlertComponent,
      EditEquipmentComponent,
      DropDownInputComponent,
      DeleteEquipmentComponent,
      EquipmentStatusComponent,
      InstanceAddComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      AngularFontAwesomeModule,
      HttpClientModule,
      DataTablesModule,
      NgxChartsModule,
      BrowserAnimationsModule,
      NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
