import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceAddComponent } from './instance-add.component';

describe('InstanceAddComponent', () => {
  let component: InstanceAddComponent;
  let fixture: ComponentFixture<InstanceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
