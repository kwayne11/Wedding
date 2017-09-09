import { Component, OnInit } from '@angular/core';
import { Crew } from '../crew';

@Component({
  selector: 'app-crew-info',
  templateUrl: './crew-info.component.html',
  styleUrls: ['./crew-info.component.css']
})
export class CrewInfoComponent implements OnInit {
  groomsmen: Array<Crew> = [];
  bridesmaids: Array<Crew> = [];

  constructor() {}

  ngOnInit() {
    this.groomsmen.push(new Crew('TJ Klatka', 'Best Man', 'assets/tj.jpg', 'Friend', ['Physics Teacher.', 'Rush Fanboy.', 'Insulin Addict.']));
    this.groomsmen.push(new Crew('Kevin Yu', 'Groomsman', 'assets/kevin.jpg', 'Friend', ['Northwestern Grad School.', 'World Traveler.', 'Legolas Wannabe.']));
    this.groomsmen.push(new Crew('Dennis Caravello', 'Groomsman', 'assets/dennis.jpg', 'Friend', ['Singer/Songwriter.', 'Jake Arrieta Look-alike.', 'Drake Hater.']));
    this.groomsmen.push(new Crew('Steve Miles', 'Groomsman', 'assets/steve.jpg', 'Brother-in-Law', ['Programmer.', 'Has Watched Every Movie Known to Man.', 'Sports Guru.']));
    this.groomsmen.push(new Crew('Mac LeBuhn', 'Groomsman', 'assets/mac.JPG', 'Brother-in-Law', ['Lawyer.', 'Even Taller.', 'Also a Book Reader.']));
    this.bridesmaids.push(new Crew('Colleen Clark', 'Maid of Honor', 'assets/colleen.JPG', 'Friend', ['Teacher.', 'Best Drinking Partner.', 'BIFF.']));
    this.bridesmaids.push(new Crew('Alex Partipilo', 'Bridesmaid', 'assets/alex.JPG', 'Friend', ['Teacher.', 'Soccer Player.', 'Coolest Dad.']));
    this.bridesmaids.push(new Crew('Amy Heler', 'Bridesmaid', 'assets/amy.JPG', 'Friend', ['Actress.', 'Meryl Streep Lover.', 'City Dweller.']));
    this.bridesmaids.push(new Crew('Karen Miles', 'Bridesmaid', 'assets/karen.jpg', 'Sister-in-Law', ['Teacher.', 'Wine Connoisseur.', 'Great Cook.']));
    this.bridesmaids.push(new Crew('Helen Grove', 'Bridesmaid', 'assets/helen.JPG', 'Sister-in-Law', ['CIA Agent.', 'Tall.', 'Book Reader.']));
  }

}
