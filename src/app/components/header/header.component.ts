import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicateService } from '../../services/communicate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query = ''
  
  constructor(private router : Router, private Service: CommunicateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('asdasdasdsa')
    this.sendMessage()
    this.router.navigate(['search',this.query])
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    
    this.Service.sendUpdate(this.query);
}

}
