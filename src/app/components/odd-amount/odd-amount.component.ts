import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-amount',
  templateUrl: './odd-amount.component.html',
  styleUrls: ['./odd-amount.component.scss']
})
export class OddAmountComponent implements OnInit {

  @Input() showOddNumbersResult: boolean = false;

  arrayOddNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  showOddNumbers(numbers: number[]) {
    this.arrayOddNumbers = numbers.filter(num => num % 2 !== 0);
  }

}
