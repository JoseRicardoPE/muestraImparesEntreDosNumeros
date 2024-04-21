import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OddAmountComponent } from '../odd-amount/odd-amount.component';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  formUser!: FormGroup;
  showOddNumbersResult: boolean = false;
  @ViewChild(OddAmountComponent) resultOddAmount!: OddAmountComponent;

  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      inputFirstNumber: ['', [Validators.required, Validators.pattern('^[0-9)]+$')]],
      inputSecondNumber: ['', [Validators.required, Validators.pattern('^[0-9)]+$')]],
    });
  }

  ngOnInit(): void {
  }

  generateOddNumbersForm() {
    
    const firstNumberUser = parseInt(this.formUser.get('inputFirstNumber')?.value);
    const secondNumberUser = parseInt(this.formUser.get('inputSecondNumber')?.value);

    let startNumber;
    let endNumber;

    if (!isNaN(firstNumberUser) && !isNaN(secondNumberUser)) {
      const sortNumbersUser = [firstNumberUser, secondNumberUser].sort((a, b) => a - b);
      startNumber = sortNumbersUser[0];
      endNumber = sortNumbersUser[1];
      const oddNumbers = this.getOddNumbers(startNumber, endNumber);
      this.showOddNumbersResult = true;
      this.resultOddAmount.showOddNumbers(oddNumbers);
    } else {
      console.log('Ingrese sólo números');
    }
  }

  getOddNumbers(start: number, end: number): number[] {
    const numbers: number[] = [];
    
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        numbers.push(i);
      }
    }
    return numbers;
  }

  resetInputForm() {
    this.formUser.reset();
    this.showOddNumbersResult = false;
  }

}
