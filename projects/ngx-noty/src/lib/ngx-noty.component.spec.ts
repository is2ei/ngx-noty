import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotyComponent } from './ngx-noty.component';

describe('NgxNotyComponent', () => {
  let component: NgxNotyComponent;
  let fixture: ComponentFixture<NgxNotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
