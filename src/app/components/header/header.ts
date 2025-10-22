import { Component } from '@angular/core';
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
}
