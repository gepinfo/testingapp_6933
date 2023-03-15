import { Component, OnInit } from '@angular/core';
import { DatamodifiedService } from './datamodified.service';

@Component({
  selector: 'app-datamodified',
  templateUrl: './datamodified.component.html',
  styleUrls: ['./datamodified.component.scss'],
})

export class DatamodifiedComponent implements OnInit {
    public name:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private datamodifiedService: DatamodifiedService,
    ) { }

    ngOnInit() {
        this.name.created_by = sessionStorage.getItem('email') || ''; 
    }
}