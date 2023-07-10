import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  appointments:any = []
  date:any = ""

  constructor(
    private adminservice: AdminService
    ){}

  ngOnInit(){
    this.getappointment()
  }

  getappointment(){
    this.adminservice.getappointment().subscribe((res:any)=>{
      this.appointments = res
      this.date = new Date()
      console.log(this.date)
    })
  }
}
