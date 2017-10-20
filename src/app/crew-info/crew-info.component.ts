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
  ushers1: Array<Crew> = [];
  ushers2: Array<Crew> = [];

  constructor() {}

  ngOnInit() {
    this.groomsmen.push(new Crew('TJ Klatka', 'Best Man', 'assets/tj.jpg', 'Friend', ['Met in High School.', 'Physics Teacher.', 'Gravitates Towards Physics.']));
    this.groomsmen.push(new Crew('Kevin Yu', 'Groomsman', 'assets/kevin.jpg', 'Friend', ['Met in High School.', 'Northwestern Graduate School Student.', 'Great Conversationalist.']));
    this.groomsmen.push(new Crew('Dennis Caravello', 'Groomsman', 'assets/dennis.jpg', 'Friend', ['Met in Third Grade.', 'Singer/Songwriter.', 'Drinking Bud.']));
    this.groomsmen.push(new Crew('Steve Miles', 'Groomsman', 'assets/steve.jpg', 'Brother-in-Law', ['UIUC/North Carolina State Grad.', 'Software Developer.', 'Best Sous Chef in Wake County.']));
    this.groomsmen.push(new Crew('Mac LeBuhn', 'Groomsman', 'assets/mac.JPG', 'Brother-in-Law', ['Northwestern Law Grad.', 'Lawyer.', 'Civic-minded.']));
    this.bridesmaids.push(new Crew('Colleen Clark', 'Maid of Honor', 'assets/colleen.JPG', 'Friend', ['Met in Girl Scouts.', 'Teacher/Soccer Coach.', 'BIFF.']));
    this.bridesmaids.push(new Crew('Alex Partipilo', 'Bridesmaid', 'assets/alex.JPG', 'Friend', ['Met in Fourth Grade.', 'Elementary School Teacher.', 'Life of the Party.']));
    this.bridesmaids.push(new Crew('Amy Heller', 'Bridesmaid', 'assets/amy.JPG', 'Friend', ['Met in Sixth Grade.', 'Secretary by Day/Actress by Night.', 'City Dweller.']));
    this.bridesmaids.push(new Crew('Karen Miles', 'Bridesmaid', 'assets/karen.jpg', 'Sister-in-Law', ['UIUC/North Carolina State Grad.', 'Middle School Teacher.', 'Best Chef in Wake County.']));
    this.bridesmaids.push(new Crew('Helen Grove', 'Bridesmaid', 'assets/helen.JPG', 'Sister-in-Law', ['The Johns Hopkins University Grad.', 'Corporate Communications Director.', 'Blackjack Enthusiast.']));
    this.ushers1.push(new Crew('Pat LeBuhn', 'Usher', 'assets/PatrickEmily.JPG', 'Brother', ['Indiana University Grad.', 'IT Release Manager.', 'Man of Few Words.']));
    this.ushers2.push(new Crew('Peter LeBuhn', 'Usher', 'assets/PeterUsher.jpg', 'Brother', ['Second City Student.', 'Jimmy Johns Manager.', 'Improv Comedian.']));
  }

}
