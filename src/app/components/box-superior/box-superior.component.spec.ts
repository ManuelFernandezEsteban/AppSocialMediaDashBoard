import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSuperiorComponent } from './box-superior.component';

describe('BoxSuperiorComponent', () => {
  let component: BoxSuperiorComponent;
  let fixture: ComponentFixture<BoxSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
