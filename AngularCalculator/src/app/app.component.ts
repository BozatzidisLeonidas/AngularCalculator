import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculator';

  calValue: number = 0;
  funcT: any = 'noFunction';

  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(value: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(value);
    } else if (type == 'function') {
      this.onFunctionClick(value);
    }
  }

  onNumberClick(value: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber += value;
    } else {
      this.calNumber = value;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(value: string) {
    if(value = 'c'){
      this.clearAll();
    }else if (this.funcT == 'noFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = value;
    } else if (this.funcT != 'noFunction') {
      this.secondNumber = this.calValue;
      this.calculateValue(value);
    }
  }

  calculateValue(value: string) {
    let total = 0;
    if (this.funcT == '+') {
      total = this.firstNumber + this.secondNumber;
    }
    if (this.funcT == '-') {
      total = this.firstNumber - this.secondNumber;
    }
    if (this.funcT == '*') {
      total = this.firstNumber * this.secondNumber;
    }
    if (this.funcT == '/') {
      total = this.firstNumber / this.secondNumber;
    }
    if (this.funcT == '%') {
      total = this.firstNumber % this.secondNumber;
    }
    
    this.totalAssignValues(total, value);

    if (value == '=') {
      this.onEqualPress(total);
    }
  }

  onEqualPress(total: number) {
    this.calValue = total; // Update calValue with the result
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
  }

  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
  }

  totalAssignValues(total: number, value: string) {
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    if (value != '=') {
      this.funcT = value;
    } else {
      this.funcT = 'noFunction'; // Reset function to noFunction when value is '='
    }
  }
}
