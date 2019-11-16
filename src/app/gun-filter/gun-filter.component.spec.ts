import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunFilterComponent } from './gun-filter.component';

describe('GunFilterComponent', () => {
  let component: GunFilterComponent;
  let fixture: ComponentFixture<GunFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
