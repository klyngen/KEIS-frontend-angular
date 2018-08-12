import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { RentComponent } from './rent/rent.component';
import { TimelogStatsComponent } from './timelog-stats/timelog-stats.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard', subtitle: 'Keis Equipment Indexing System', icon: 'tachometer'}},
    {path: 'users', component: UsersComponent, data: {title: 'Users', subtitle: 'User management', icon: 'users'}},
    {path: 'equipment', component: EquipmentComponent, data: {title: 'Equipment', subtitle: 'Equipment management', icon: 'wrench'}},
    {path: 'rent', component: RentComponent, data: {title: 'Rent', subtitle: 'Rent management', icon: 'exchange'}},
    {path: 'timeexport', component: TimelogStatsComponent, data: {title: 'Time loggs', subtitle: 'Rent management', icon: 'table'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
