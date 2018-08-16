import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSettingsComponent } from './audio-settings.component';

describe('AudioSettingsComponent', () => {
  let component: AudioSettingsComponent;
  let fixture: ComponentFixture<AudioSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
