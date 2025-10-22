import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-app-button',
  imports: [
    NgClass
  ],
  templateUrl: './app-button.html',
  styleUrl: './app-button.scss'
})
export class AppButton {
type = input('primary')
}
