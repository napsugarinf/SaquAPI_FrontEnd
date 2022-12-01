import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomdataComponent } from './roomdata.component';

describe('RoomdataComponent', () => {
  let component: RoomdataComponent;
  let fixture: ComponentFixture<RoomdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
