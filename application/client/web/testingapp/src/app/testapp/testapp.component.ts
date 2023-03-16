import { Component, OnInit } from '@angular/core';
import { TestappService } from './testapp.service';

@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.scss'],
})

export class TestappComponent implements OnInit {
    public name:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private testappService: TestappService,
    ) { }

    ngOnInit() {
        this.name.created_by = sessionStorage.getItem('email') || ''; 
    }
}