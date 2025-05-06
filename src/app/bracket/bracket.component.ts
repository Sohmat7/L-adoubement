import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bracket',
  imports: [CommonModule],
  templateUrl: './bracket.component.html',
  styleUrl: './bracket.component.css'
})
export class BracketComponent {


  score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  w1 = ""
  w2 = ""
  w3 = ""
  w4 = ""
  w5 = ""
  w6 = ""
  w7 = ""
  w8 = ""
  w9 = ""
  w10 = ""

  
  l1 = ""
  l2 = ""
  l3 = ""
  l4 = ""
  l5 = ""
  l6 = ""
  l7 = ""
  l8 = ""
  l9 = ""
  l10 = ""
  l11 = ""
  l12 = ""
  l13 = ""

  getScore(event: Event) {

    this.score[Number((event.target as HTMLInputElement).id)] = Number((event.target as HTMLInputElement).value)


    console.log(this.score)

    if(this.score[0] === 3 && this.score[1] < 3) {
      document.getElementById("p2")?.classList.remove("match-top")
      document.getElementById("p2")?.classList.add("match-bottom")
      document.getElementById("p9")?.classList.add("match-bottom")
      this.w1 = "Ocarno"
      this.l1 = "Maxyoursgarou"
      
    }
    else if(this.score[1] === 3 && this.score[0] < 3) {
      document.getElementById("p1")?.classList.remove("match-top")
      document.getElementById("p1")?.classList.add("match-bottom")
      this.w1 = "Maxyoursgarou"
      this.l1 = "Ocarno"

    }
    else {
      document.getElementById("p1")?.classList.add("match-top")
      document.getElementById("p2")?.classList.add("match-top")
      this.w1 = ""
      this.l1 = ""
    }


    if(this.score[2] === 3 && this.score[3] < 3) {
      document.getElementById("p4")?.classList.remove("match-bottom")
      document.getElementById("p4")?.classList.add("match-top")
      document.getElementById("p10")?.classList.add("match-bottom")
      this.w2 = "Tilté"
      this.l2 = "Talion"
      
    }
    else if(this.score[3] === 3 && this.score[2] < 3) {
      document.getElementById("p3")?.classList.remove("match-bottom")
      document.getElementById("p3")?.classList.add("match-top")
      this.w2 = "Talion"
      this.l2 = "Tilté"

    }
    else {
      document.getElementById("p3")?.classList.add("match-bottom")
      document.getElementById("p4")?.classList.add("match-bottom")
      this.w2 = ""
      this.l2 = ""
    }

    
    if(this.score[4] === 3 && this.score[5] < 3) {
      document.getElementById("p6")?.classList.remove("match-top")
      document.getElementById("p6")?.classList.add("match-bottom")
      document.getElementById("p11")?.classList.add("match-bottom")
      this.l3 = "Peu2Vertu"
      this.w3 = "Faroc"
      
    }
    else if(this.score[5] === 3 && this.score[4] < 3) {
      document.getElementById("p5")?.classList.remove("match-top")
      document.getElementById("p5")?.classList.add("match-bottom")
      this.w3 = "Peu2Vertu"
      this.l3 = "Faroc"

    }
    else {
      document.getElementById("p5")?.classList.add("match-top")
      document.getElementById("p6")?.classList.add("match-top")
      this.w3 = ""
      this.l3 = ""
    }

    
    if(this.score[6] === 3 && this.score[7] < 3) {
      document.getElementById("p8")?.classList.remove("match-top")
      document.getElementById("p8")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      this.w4 = "Picpic7"
      this.l4 = "J44J"
      
    }
    else if(this.score[7] === 3 && this.score[6] < 3) {
      document.getElementById("p7")?.classList.remove("match-top")
      document.getElementById("p7")?.classList.add("match-bottom")
      this.w4 = "J44J"
      this.l4 = "Picpic7"

    }
    else {
      document.getElementById("p7")?.classList.add("match-top")
      document.getElementById("p8")?.classList.add("match-top")
      this.w4 = ""
      this.l4 = ""
    }







    if(this.score[8] === 3 && this.score[9] < 3) {
      document.getElementById("p10")?.classList.remove("match-bottom")
      document.getElementById("p10")?.classList.add("match-top")
      document.getElementById("p12")?.classList.add("match-top")
      this.w5 = this.w1
      this.l5 = this.w2
      
    }
    else if(this.score[9] === 3 && this.score[8] < 3) {
      document.getElementById("p9")?.classList.remove("match-bottom")
      document.getElementById("p9")?.classList.add("match-top")
      this.w5 = this.w2
      this.l5 = this.w1

    }
    else {
      document.getElementById("p9")?.classList.add("match-bottom")
      document.getElementById("p10")?.classList.add("match-bottom")
      this.w5 = ""
      this.l5 = ""
    }


    if(this.score[10] === 3 && this.score[11] < 3) {
      document.getElementById("p12")?.classList.remove("match-top")
      document.getElementById("p12")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      this.w6 = this.w3
      this.l7 = this.w4
      
    }
    else if(this.score[11] === 3 && this.score[10] < 3) {
      document.getElementById("p11")?.classList.remove("match-top")
      document.getElementById("p11")?.classList.add("match-bottom")
      this.w6 = this.w4
      this.l7 = this.w3

    }
    else {
      document.getElementById("p11")?.classList.add("match-top")
      document.getElementById("p12")?.classList.add("match-top")
      this.w6 = ""
      this.l7 = ""
    }


    if(this.score[12] === 3 && this.score[13] < 3) {
      document.getElementById("p14")?.classList.remove("match-top")
      document.getElementById("p14")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      this.w7 = this.w5
      this.l11 = this.w6
      
    }
    else if(this.score[13] === 3 && this.score[12] < 3) {
      document.getElementById("p13")?.classList.remove("match-top")
      document.getElementById("p13")?.classList.add("match-bottom")
      this.w7 = this.w6
      this.l11 = this.w5

    }
    else {
      document.getElementById("p13")?.classList.add("match-top")
      document.getElementById("p14")?.classList.add("match-top")
      this.w7 = ""
      this.l11 = ""
    }



    if(this.score[16] === 3 && this.score[17] < 3) {
      document.getElementById("p102")?.classList.remove("match-top")
      document.getElementById("p102")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      this.l6 = this.l1
      
    }
    else if(this.score[17] === 3 && this.score[16] < 3) {
      document.getElementById("p101")?.classList.remove("match-top")
      document.getElementById("p101")?.classList.add("match-bottom")
      this.l6 = this.l2

    }
    else {
      document.getElementById("p101")?.classList.add("match-top")
      document.getElementById("p102")?.classList.add("match-top")
      this.l6 = ""
    }


    if(this.score[18] === 3 && this.score[19] < 3) {
      document.getElementById("p104")?.classList.remove("match-bottom")
      document.getElementById("p104")?.classList.add("match-top")
      document.getElementById("p12")?.classList.add("match-top")
      this.l8 = this.l3
      
    }
    else if(this.score[19] === 3 && this.score[18] < 3) {
      document.getElementById("p103")?.classList.remove("match-bottom")
      document.getElementById("p103")?.classList.add("match-top")
      this.l8 = this.l4

    }
    else {
      document.getElementById("p103")?.classList.add("match-bottom")
      document.getElementById("p104")?.classList.add("match-bottom")
      this.l8 = ""
    }




    if(this.score[20] === 3 && this.score[21] < 3) {
      document.getElementById("p106")?.classList.remove("match-bottom")
      document.getElementById("p106")?.classList.add("match-top")
      document.getElementById("p12")?.classList.add("match-top")
      this.l9 = this.l5
      
    }
    else if(this.score[21] === 3 && this.score[20] < 3) {
      document.getElementById("p105")?.classList.remove("match-bottom")
      document.getElementById("p105")?.classList.add("match-top")
      this.l9 = this.l6

    }
    else {
      document.getElementById("p106")?.classList.add("match-bottom")
      document.getElementById("p105")?.classList.add("match-bottom")
      this.l9 = ""
    }



    if(this.score[22] === 3 && this.score[23] < 3) {
      document.getElementById("p108")?.classList.remove("match-top")
      document.getElementById("p108")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      this.l10 = this.l7
      
    }
    else if(this.score[23] === 3 && this.score[22] < 3) {
      document.getElementById("p107")?.classList.remove("match-top")
      document.getElementById("p107")?.classList.add("match-bottom")
      this.l10 = this.l8

    }
    else {
      document.getElementById("p107")?.classList.add("match-top")
      document.getElementById("p108")?.classList.add("match-top")
      this.l10 = ""
    }




    if(this.score[24] === 3 && this.score[25] < 3) {
      document.getElementById("p110")?.classList.remove("match-top")
      document.getElementById("p110")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      this.l12 = this.l9
      
    }
    else if(this.score[25] === 3 && this.score[24] < 3) {
      document.getElementById("p109")?.classList.remove("match-top")
      document.getElementById("p109")?.classList.add("match-bottom")
      this.l12 = this.l10

    }
    else {
      document.getElementById("p109")?.classList.add("match-top")
      document.getElementById("p110")?.classList.add("match-top")
      this.l12 = ""
    }




    if(this.score[26] === 3 && this.score[27] < 3) {
      document.getElementById("p112")?.classList.remove("match-top")
      document.getElementById("p112")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      this.w8 = this.l11
      
    }
    else if(this.score[27] === 3 && this.score[26] < 3) {
      document.getElementById("p111")?.classList.remove("match-top")
      document.getElementById("p111")?.classList.add("match-bottom")
      this.w8 = this.l12

    }
    else {
      document.getElementById("p111")?.classList.add("match-top")
      document.getElementById("p112")?.classList.add("match-top")
      this.w8 = ""
    }


    if(this.score[14] === 3 && this.score[15] < 3) {
      document.getElementById("p114")?.classList.remove("match-top")
      document.getElementById("p114")?.classList.add("match-bottom")
      document.getElementById("p12")?.classList.add("match-bottom")
      
    }
    else if(this.score[15] === 3 && this.score[14] < 3) {
      document.getElementById("p113")?.classList.remove("match-top")
      document.getElementById("p113")?.classList.add("match-bottom")
      this.w9 = this.w7
      this.w10 = this.w8

    }
    else {
      document.getElementById("p113")?.classList.add("match-top")
      document.getElementById("p114")?.classList.add("match-top")
    }




  }


}
