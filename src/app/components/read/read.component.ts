import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpService } from '../../services/http.service';

export interface PeriodicElement {
  name: string;
  email: string;
  mobileNo: string;
  createdDate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Jay Dholakiya', email: 'Hydrogen', mobileNo: 'jaydholakiya01@gmail.com', createdDate: '2024-07-28 00:00:00'},
  {name: 'Parth Pathak', email: 'Helium', mobileNo: 'parthpathak01@gmail.com', createdDate: '2024-07-28 00:00:00'}
];

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {
  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Mobile No', 'Created Date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private httpService: HttpService, private _liveAnnouncer: LiveAnnouncer) {
    this.httpService.get('').subscribe(res => {
      if (res !== undefined) {
        console.log(res);
      }
    });
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit() {
    
  }
}
