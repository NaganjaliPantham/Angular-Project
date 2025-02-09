import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidder',
  templateUrl: './slidder.component.html',
  styleUrls: ['./slidder.component.css']
})
export class SlidderComponent {
  constructor(private router:Router){}
  onclick(){
    this.router.navigate(['/signup'])
  }
}
