class Ground{
 
    constructor(x,y){
        this.ground=[];
        for(let i=0; i<x; i++){
            this.ground[i]=[];
            for(let j=0; j<y; j++){
                this.ground[i][j]='';
            }
          }
    } 
}