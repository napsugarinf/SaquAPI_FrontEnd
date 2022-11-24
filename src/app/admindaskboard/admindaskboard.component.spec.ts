import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindaskboardComponent } from './admindaskboard.component';

describe('AdmindaskboardComponent', () => {
  let component: AdmindaskboardComponent;
  let fixture: ComponentFixture<AdmindaskboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindaskboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
