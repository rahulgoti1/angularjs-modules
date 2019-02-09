import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private srv: TestService, private http: HttpClient) {
    this.srv.printToConsole('Rahul Goti');
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/rahulgoti1');
    obs.subscribe((json) => console.log('Got the response from server', json));
  }

}
