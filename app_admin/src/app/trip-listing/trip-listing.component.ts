import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';

import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit{
  trips!: Trip[];
  message: string = '';

constructor(private tripDataService: TripDataService, private router: Router) {
  console.log('trip-listing constructor');
}

public addTrip(): void {
  this.router.navigate(['add-trip'])
}

private getStuff(): void {
  console.log('getStuff running');

  this.tripDataService.getTrips().subscribe({
    next: (value) => {
      console.log('API returned:', value);
      this.trips = value as Trip[];
    },
    error: (error) => {
      console.log('API ERROR:', error);
    }
  });
}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();

  }
}
