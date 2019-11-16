import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunImageComponent } from './gun-image.component';

describe('GunImageComponent', () => {
  let component: GunImageComponent;
  let fixture: ComponentFixture<GunImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
