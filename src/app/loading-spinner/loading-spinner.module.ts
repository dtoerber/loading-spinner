import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, MatButtonModule],
  entryComponents: [LoadingSpinnerComponent]
})
export class LoadingSpinnerModule {}
