import { error } from '@angular/compiler/src/util';
import { Component, OnInit, VERSION } from '@angular/core';
import { of , from , take , tap , map } from 'rxjs' ;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;


ngOnInit(){

  of( 12 , 10 , 14 , 5 ).pipe(
    tap( nmb =>  console.log( 'emission tap ' , nmb)),
    map ( nmb => nmb * 2),
    tap( nmb =>  console.log( 'emission tap2 ' , nmb)),
    map ( nmb => nmb -10 ),
    map( nmb => {
      if( nmb === 10 ){
        throw new  Error('essai mapp error') ;
      }
        
        return nmb ; 
    }
    )
  )
  .subscribe(
    nmb => console.log(nmb) ,
    err => console.log( " this is error  " , err ),
    () => console.log(" done with the numbers")

  );

  from( [97, 98 , 99] ).subscribe(
    nmb => console.log(nmb) ,
    err => console.log( " this is error $ " , err ),
    () => console.log(" done with the numbers")
  )
}

}
