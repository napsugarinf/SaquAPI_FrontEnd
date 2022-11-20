import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedataComponent } from './typedata.component';

describe('TypedataComponent', () => {
  let component: TypedataComponent;
  let fixture: ComponentFixture<TypedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
