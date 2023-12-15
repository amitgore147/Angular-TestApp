import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: string = '';

  constructor(private commonService: CommonServiceService) {}

  ngOnInit() {
    // Use the service to get data
    this.commonService.getData().subscribe(
      (data: string) => {
        this.message = data;
      },
      (error: any) => {
        console.error('Error:', error);
      },
      () => {
        console.log('Observable completed');
      }
    );
  }
}
