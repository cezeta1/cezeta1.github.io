import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'home',
  imports: [
    CommonModule,
    TuiHeader,
    TuiTitle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
