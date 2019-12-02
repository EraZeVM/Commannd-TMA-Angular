import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandHandleComponent } from './command-handle/command-handle.component';
import { CommandGeneratorComponent } from './command-generator/command-generator.component';
import { CommandListComponent } from './command-handle/command-list/command-list.component';
import { CommandDetailComponent } from './command-handle/command-list/command-detail/command-detail.component';


@NgModule({
  declarations: [CommandHandleComponent, CommandGeneratorComponent, CommandListComponent, CommandDetailComponent],
  imports: [
    CommonModule
  ]
})
export class CommandModule {}
