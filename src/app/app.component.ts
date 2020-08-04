import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';
  ngOnInit(){
   

   //arrow function 


   const aux= [1,2,3,4,5,6,7,8]
   const index=aux.findIndex(s => s === 3)
   console.log(index)
   
   const aux2 = aux.filter(s => s%2===0)
   console.log('pares:',aux2)

   const aux3 = aux.map(s => s*2)
   console.log('map:',aux3)


   // spread operator
   const aux5 = [1000,2000,...aux];
   console.log('spread ',aux5)

   const aux6= {
     name:'ricardo',
     lastName: 'Pari'
   }
      const aux7={address: 'aaa',...aux6}
      console.log('spread2 ',aux7)

    //destructuring     

     const persona = {
       data: {
         name:'ricado',
         response: []
       },
       address:{
           n: 1,
           extra:'aa'

       }
     }
     
     //const[data, address] = persona;
   
      //let aux-> solo trabajan dentro del contexto
      //donde el desarrollador lo defina

      for (let index =0;index<aux.length; index++){
        console.log('AAAAAAAAAA',index)
      }

      if( 2>1) {
          return 'yes'
      } else {
          return 'no'
      }
      2 > 1 ? 'yes' : 'no'
  }


}

