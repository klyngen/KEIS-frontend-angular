import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogStatsComponent } from './timelog-stats.component';

describe('TimelogStatsComponent', () => {
  let component: TimelogStatsComponent;
  let fixture: ComponentFixture<TimelogStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
