import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  score:number;
  final:number;
  results:boolean;
  screen1:boolean;
  screen2:boolean;
  screen3:boolean;
  screen4:boolean;
  validate:boolean;
  questions:any = [
    {questionId:'1',question:'Which of the following data type that can store the value 150.88',answers1:'String',answers2:'Intager',answers3:'Decimal',model:'answer1'},
    {questionId:'2',question:'Choose a programming language used in hardware design',answers1:'Assembler',answers2:'Java',answers3:'VHDL',model:'answer2'},
    {questionId:'3',question:'Which of the following is true ',answers1:'Javascript is not object oriented',answers2:'HTML can be used for styling',answers3:'Ionic is used for hybrid apps',model:'answer3'},
    {questionId:'4',question:'Each byte is equals to ',answers1:'8 bytes',answers2:'4 bits',answers3:'8 bits',model:'answer4'},
    {questionId:'5',question:'Which symbol mostly used to terminate a line ',answers1:'{}',answers2:';',answers3:':',model:'answer5'}
  ];
  questions1:any = [
    {questionId:'6',question:'Who is the Most Famous Video Game Character of all Time?',answers1:'Sonic',answers2:'Mario',answers3:'Solid-Snake',model:'answer6'},
    {questionId:'7',question:'What was The First Home Console?',answers1:'X Box 360',answers2:'Sega Genisis',answers3:'Oddessy',model:'answer7'},
    {questionId:'8',question:'What is Know as the Hardest Game of all Time',answers1:'Grand Theft Auto',answers2:'Contra',answers3:'Pac-Man',model:'answer8'},
    {questionId:'9',question:'Which of the following is valid graphics specs',answers1:'10 Gigabyte',answers2:'3 Gigahertz',answers3:'NVDIA GTX 3GH',model:'answer9'},
    {questionId:'10',question:'NES was Short for....?',answers1:'Never Ending Simulation',answers2:'Nitendo Entertainment System',answers3:'Not Ever Still',model:'answer10'}
  ];
  questions2:any = [
    {questionId:'11',question:'Who is Pablo Picasso ?',answers1:'Song Writer',answers2:'Amazon.com co-founder',answers3:'Spanish Artist',model:'answer11'},
    {questionId:'12',question:'Which of the following belongs to ARTS world',answers1:'Programming',answers2:'Cloning',answers3:'Painting',model:'answer12'},
    {questionId:'13',question:'Which of the following is true ',answers1:'Art has to do with computers',answers2:'Kanye West is an artist',answers3:'Technology invented art',model:'answer13'},
    {questionId:'14',question:'Which Spanish artist painted the series known as ‘Fantasy and Invention’ in the 18th century?',answers1:'Pablo Escobar',answers2:'Steve Jobs',answers3:'Francisco Goya',model:'answer14'},
    {questionId:'15',question:'Which artist said ‘Everything you can imagine is real?',answers1:'Jay-Z',answers2:'Barack Obama',answers3:'Pablo Picasso',model:'answer15'}
  ];
  answers:any = [{answer:'rb-2-0'},{answer:'rb-2-0'},{answer:'rb-2-0'}];
  constructor(public navCtrl: NavController,private alrtCntrl:AlertController) {
    this.score = 0;
    this.results = false;
    this.screen1 = true;
    this.screen2 = false;
    this.screen3 = false;
    this.screen4 = false;
  }
  start(){
    this.screen1 = false;
    this.screen2 = true;
  }
  next(){
    this.questions.forEach(element => {
      if(element.model == 'answer1' || element.model == 'answer2' || element.model == 'answer3' || element.model == 'answer4' || element.model == 'answer5' ){
        let alert = this.alrtCntrl.create(
          {title:'Incomplete',
         message:'Please answer question '+element.questionId,
         buttons:['OK']
       });
      alert.present();
      }
      if(element.model != 'answer1' && element.model != 'answer2' && element.model != 'answer3' && element.model != 'answer4' && element.model != 'answer5' ){
          
        this.screen3 = true;
        this.screen2 = false;

        if(element.model == "rb-2-0"){  
           this.score += 1;
          }else if(element.model == "rb-5-0"){  
           this.score += 1;
          }else if(element.model == "rb-8-0"){  
           this.score += 1;
          }else if(element.model == "rb-11-0"){ 
            this.score +=1;
          }else if(element.model == "rb-13-0"){ 
           this.score +=1;
         }

      }
    })
  }
  next1(){
    this.questions1.forEach(element => {
      if(element.model == 'answer6'){
        let alert = this.alrtCntrl.create(
          {title:'Incomplete',
         message:'Please answer question '+element.questionId,
         buttons:['OK']
       });
      alert.present();
      }else if(element.model == 'answer7'){
        let alert = this.alrtCntrl.create(
          {title:'Incomplete',
         message:'Please answer question '+element.questionId,
         buttons:['OK']
       });
      alert.present();
      }else if(element.model == 'answer8'){
        let alert = this.alrtCntrl.create(
          {title:'Incomplete',
         message:'Please answer question '+element.questionId,
         buttons:['OK']
       });
      alert.present();
      }else if(element.model == 'answer9'){
        let alert = this.alrtCntrl.create(
          {title:'Incomplete',
         message:'Please answer question '+element.questionId,
         buttons:['OK']
       });
      alert.present();
      }else if(element.model == 'answer10'){
        let alert = this.alrtCntrl.create(
          {title:'Incomplete',
         message:'Please answer question '+element.questionId,
         buttons:['OK']
       });
      alert.present();
      }else{
        this.screen3 = false;
        this.screen4 = true;

        

     if(element.model == "rb-16-0"){  
       this.score += 1;
      }else if(element.model == "rb-20-0"){  
       this.score += 1;
      }else if(element.model == "rb-22-0"){  
       this.score += 1;
      }else if(element.model == "rb-26-0"){ 
        this.score +=1;
      }else if(element.model == "rb-28-0"){ 
       this.score +=1;
     }
      }
    })
  }
 submit(){
  this.questions2.forEach(element => {
    if(element.model == 'answer11' || element.model == 'answer12' || element.model == 'answer13' || element.model == 'answer14' || element.model == 'answer15' ){
      let alert = this.alrtCntrl.create(
        {title:'Incomplete',
       message:'Please answer question '+element.questionId,
       buttons:['OK']
     });
    alert.present();
    }else{ 
      this.screen4 = false;

     if(element.model == "rb-32-0"){ 
      this.results = true;
       this.score += 1;
      }else if(element.model == "rb-35-0"){ 
       this.results = true;
       this.score += 1;
      }else if(element.model == "rb-37-0"){ 
       this.results = true;
       this.score += 1;
      }else if(element.model == "rb-41-0"){
       this.results = true;
        this.score +=1;
      }else if(element.model == "rb-44-0"){
       this.results = true;
       this.score +=1;
     }

    }
   }); 
   this.final = (this.score/15)*100;
 }
}
