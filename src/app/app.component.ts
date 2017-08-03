import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('history') history;

  constructor() {

  }

  ngOnInit() {
    console.log(222, this.history)
  }

  move(e) {
    // let element = this.history.nativeElement.style.transform
    // let element = this.history.nativeElement.children;

    // e.target.style.zIndex =
    // e.target.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -50, 1)';

    // console.log(element)

    let element = this.history.nativeElement.firstChild.nextElementSibling.classList;
    console.log(e, element);

    if (element.contains('move')) {
      element.remove('move');
    } else {
      element.add('move');
    }

  }

  animation() {


  // matrix3d(1, 0, 0, 0, 0, 0.2, 0, 0, 0, 0, 1, 0, 0, 200, -50, 1)
  }

}