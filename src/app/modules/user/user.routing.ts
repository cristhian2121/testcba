import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ContainerUserComponent } from './components/container-user/container-user.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
