import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { SharedModule } from '../shared/shared.module';
import { CreateRoutingModule } from './create.routing';



@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
