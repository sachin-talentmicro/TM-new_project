import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbenchHomeComponent } from './workbench-home/workbench-home.component';
import { RouterModule, Routes } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

const routes: Routes = [
  { path: '', component: WorkbenchHomeComponent },
];


@NgModule({
  declarations: [
    WorkbenchHomeComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    [RouterModule.forChild(routes)]
  ]
})
export class WorkbenchModule { }
