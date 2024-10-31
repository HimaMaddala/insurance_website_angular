import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-insurance-services',
  templateUrl: './insurance-services.component.html',
  standalone: true,
  imports: [NgFor]
})
export class InsuranceServicesComponent {
  insuranceServices = [
    { image: 'assets/insurance_assets/img1.jpg', title: 'Business Insurance', subtitle: 'INSURANCE • VEHICLE' },
    { image: 'assets/insurance_assets/img2.jpg', title: 'Vehicle Insurance', subtitle: 'INSURANCE • VEHICLE' },
    { image: 'assets/insurance_assets/img3.jpg', title: 'Car Insurance', subtitle: 'INSURANCE • CAR' },
  ];
}
