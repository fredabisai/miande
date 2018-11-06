import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { KanisaComponent} from "./kanisa/kanisa.component";
import { MshirikiComponent} from "./mshiriki/mshiriki.component";
import { MatangazoComponent} from "./matangazo/matangazo.component";
import { PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {HeaderComponent} from "./header/header.component";
import {DashboardComponent} from "./user/dashboard/dashboard.component";
import {AdduserComponent} from "./user/adduser/adduser.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'Kanisa',
        component: KanisaComponent
    },
    {
        path: 'Matangazo',
        component: MatangazoComponent
    },
    {
        path: 'Mshiriki',
        component: MshirikiComponent
    },
    {
        path: 'Mahali',
        component: HeaderComponent
    },
    {
        path: 'user/dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/adduser',
        component: AdduserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PagenotfoundComponent

    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
