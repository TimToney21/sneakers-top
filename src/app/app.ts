import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {AppButton} from './components/app-button/app-button';
import {Title} from './components/title/title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AppButton, Title],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sneakers-top');
}
