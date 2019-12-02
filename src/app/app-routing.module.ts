import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandHandleComponent } from './command/command-handle/command-handle.component';
import { CommandGeneratorComponent } from './command/command-generator/command-generator.component';
import { MonitorScreenComponent } from './monitor/monitor-screen/monitor-screen.component';
import { LoggerScreenComponent } from './monitor/logger-screen/logger-screen.component';



const routes: Routes = [
  {
    path: 'cmdhandle',
    component : CommandHandleComponent 
  },
  {
    path: 'cmdgenerator',
    component : CommandGeneratorComponent
  },
  {
    path: 'appmonitor',
    component : MonitorScreenComponent
  },
  {
    path : 'applogger',
    component : LoggerScreenComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
