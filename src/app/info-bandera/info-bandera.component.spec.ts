import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBanderaComponent } from './info-bandera.component';

describe('InfoBanderaComponent', () => {
  let component: InfoBanderaComponent;
  let fixture: ComponentFixture<InfoBanderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBanderaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
