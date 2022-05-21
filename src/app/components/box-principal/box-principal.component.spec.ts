import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPrincipalComponent } from './box-principal.component';

describe('BoxPrincipalComponent', () => {
  let component: BoxPrincipalComponent;
  let fixture: ComponentFixture<BoxPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
