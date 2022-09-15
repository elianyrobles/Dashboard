import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSizeComponent } from './crud-size.component';

describe('CrudSizeComponent', () => {
  let component: CrudSizeComponent;
  let fixture: ComponentFixture<CrudSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
