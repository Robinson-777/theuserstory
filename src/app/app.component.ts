import { AppService } from './app.service';
import { Component, ViewChild, OnInit, AfterViewInit, Input } from '@angular/core';
import { MatSort, MatTableDataSource, MatSortable } from '@angular/material';

// interface of theUserstorymodel
export interface TheUserStoryElement {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent implements OnInit, AfterViewInit {
  header = 'The User Story';
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource([]);
  toggleView = false;
  @Input() sorting: MatSortable;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: AppService) {
    this.service.fnPageSourcedata().then((data: TheUserStoryElement[]) => {
      if (data && data.length > 0) {
        this.dataSource.data = data.filter(d => d.id !== undefined);
        // this.cpyDataSource = data.slice();
      }
    });
  }
  ngOnInit() {
    // this.dataSource.sort = this.sort;
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
