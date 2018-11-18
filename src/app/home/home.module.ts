import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.componet';

@NgModule({
    declarations: [
        SigninComponent,
        SignUpComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        VMessageModule,
        RouterModule ]
})
export class HomeModule{}