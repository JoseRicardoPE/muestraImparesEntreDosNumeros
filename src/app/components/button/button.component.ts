import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() resetInputUser = new EventEmitter<void>();
  @Output() generateOddNumbersClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  resetInput() {
    this.resetInputUser.emit();
  }

  generateOddNumbers() {
    this.generateOddNumbersClick.emit();
  }

}
