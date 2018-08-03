import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRentComponent } from './delete-rent.component';

describe('DeleteRentComponent', () => {
  let component: DeleteRentComponent;
  let fixture: ComponentFixture<DeleteRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
