import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidder1',
  templateUrl: './slidder1.component.html',
  styleUrls: ['./slidder1.component.css']
})
export class Slidder1Component {
  constructor(private router:Router){}
    onclick(){
      this.router.navigate(['/farming'])
    }
}
