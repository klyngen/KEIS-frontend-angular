import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllInstancesComponent } from './delete-all-instances.component';

describe('DeleteAllInstancesComponent', () => {
  let component: DeleteAllInstancesComponent;
  let fixture: ComponentFixture<DeleteAllInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
