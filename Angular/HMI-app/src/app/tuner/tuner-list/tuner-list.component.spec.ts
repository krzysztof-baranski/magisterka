import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunerListComponent } from './tuner-list.component';

describe('TunerListComponent', () => {
  let component: TunerListComponent;
  let fixture: ComponentFixture<TunerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
