import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ListUserComponent } from './components/list-user/list-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from '../shared/shared.module';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { ContainerUserComponent } from './components/container-user/container-user.component';
import { SelectedUserService } from './services/selected-user.service';

@NgModule({
    declarations: [
        ListUserComponent,
        RegisterUserComponent,
        DetailUserComponent,
        ContainerUserComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
    ],
    providers: [
        SelectedUserService,
    ]
})
export class UserModule { }
