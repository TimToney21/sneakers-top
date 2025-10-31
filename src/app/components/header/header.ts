import {Component, output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HEADER_NAVIGATION_CONFIG} from './const/HEADER_NAVIGATION_CONFIG.constants';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
navigationConfig = HEADER_NAVIGATION_CONFIG
  buttonEvent = output<string>()
  searchClick() {
    this.buttonEvent.emit('SearchSearchSearch')
  }
  buttonEvent1 = output<string>()
  favoritesClick() {
    this.buttonEvent1.emit('FavoritesFavoritesFavorites')
  }
  buttonEvent2 = output<string>()
  profileClick() {
    this.buttonEvent2.emit('ProfileProfileProfile')
  }
}
