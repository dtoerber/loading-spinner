import { Component } from '@angular/core';
import { LoadingSpinnerService } from './loading-spinner/services/loading-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spinner';

  constructor(private loadingSpinner: LoadingSpinnerService) {}

  loadData() {
    this.loadingSpinner.reveal();
    setTimeout(() => this.loadingSpinner.hide(), 2000);
  }

  stop() {
    console.log(`got a stop`);
  }
}
