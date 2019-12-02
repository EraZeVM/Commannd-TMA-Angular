import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommandListComponent } from './command-handle/command-list/command-list.component';
import { CommandDetailComponent } from './command-handle/command-list/command-detail/command-detail.component';

const routes: Routes = [
  {
    path : 'cmdlist',
    component : CommandListComponent
  },
  {
    path : 'cmddetail',
    component : CommandDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class CommandHandleRoutingModule { }
