import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamodifiedComponent } from './datamodified.component';

describe('DatamodifiedComponent', () => {
  let component: DatamodifiedComponent;
  let fixture: ComponentFixture<DatamodifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamodifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamodifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});