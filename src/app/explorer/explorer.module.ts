import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordDiagramComponent } from './chord-diagram/chord-diagram.component';
import { D3Service } from './d3/d3-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ChordDiagramComponent ],
  exports: [ ChordDiagramComponent ],
  providers: [ D3Service ]
})
export class ExplorerModule { }
