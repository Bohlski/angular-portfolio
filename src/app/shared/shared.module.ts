import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextLimitPipe } from './pipes/text-limit.pipe';


@NgModule({
  declarations: [TextLimitPipe],
  imports: [
    CommonModule
  ],
  exports: [TextLimitPipe]
})
export class SharedModule { }
