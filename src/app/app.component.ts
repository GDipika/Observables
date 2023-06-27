import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'rxjs_operators';
  // observable = new Observable((observer) => {
  //   console.log('Observable starts')

// creating observable using  observable constructor

  //   setTimeout(() => { observer.next("1") }, 1000)
  //   setTimeout(() => { observer.next("2") }, 2000)
  //   setTimeout(() => { observer.next("3") }, 3000)
  //   setTimeout(() => { observer.error(new Error('something went rong,please try again later')) }, 3000) 
  //   setTimeout(() => { observer.next("4") }, 4000)
  //   setTimeout(() => { observer.next("5") }, 5000)
  //   setTimeout(() => { observer.complete() }, 2000)
    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
    // observer.next("4")
    // observer.next("5")
  // });


  // other way to create observable using create method

  observable =  Observable.create((observer: { next: (arg0: string) => void; error: (arg0: Error) => void; complete: () => void; }) =>{
    setTimeout(() => { observer.next("1") }, 1000)
    setTimeout(() => { observer.next("2") }, 2000)
    setTimeout(() => { observer.next("3") }, 3000)
    // setTimeout(() => { observer.error(new Error('something went rong,please try again later')) }, 3000) 
    setTimeout(() => { observer.next("4") }, 4000)
    setTimeout(() => { observer.next("5") }, 5000)
    setTimeout(() => { observer.complete() }, 6000)
  });
  
  ngOnInit(): void {
    this.observable.subscribe((data: any) => {
      console.log(data);
    }, (error: { message: any; }) => {
      alert(error.message);
    },()=>{
alert('observable has completed emitting all values')
    });
  }
}
