import { Component, input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-title',
  imports: [
    NgClass
  ],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {
type = input('default')
}
