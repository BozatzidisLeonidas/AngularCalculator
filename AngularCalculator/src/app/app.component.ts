import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCalculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'anyValue';

  onClickValue (value : string, type : any) {
    if(type == 'number'){
      this.onNumberClick(value);
    }
  }

  onNumberClick (value : string) {
     if(this.calNumber != 'noValue'){
      this.calNumber += value;
     }
  }
}
