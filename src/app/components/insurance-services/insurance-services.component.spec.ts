import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceServicesComponent } from './insurance-services.component';

describe('InsuranceServicesComponent', () => {
  let component: InsuranceServicesComponent;
  let fixture: ComponentFixture<InsuranceServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
