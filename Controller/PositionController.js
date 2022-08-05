let _robot= new Robot(0,0,'N');
let _ground = new Ground(5,5);
let c ="MML";

function PositionRobot(robot,ground,command){
    let c = command.toUpperCase();
    let newcommand= c.split('');
    let cont=0;
    for(i=0;i<newcommand.length;i++){
        if((newcommand[i]!="M")&&(newcommand[i]!="L")&&(newcommand[i]!="R")){
            return "Comando não é válido!";
        }
    }
    try{
        while (cont<=newcommand.length){
            if(newcommand[cont]=="M"){
                if(robot.getPointer=="N"){
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="";  
                   robot.setPosition_y=robot.getPosition_y+1;
                   ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }
                if(robot.getPointer =="S"){
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="";
                    robot.setPosition_y=robot.getPosition_y-1;
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                } 
                if(robot.getPointer =="W"){
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="";
                    robot.setPosition_x=robot.getPosition_x-1;
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                } 
                if(robot.getPointer =="E"){
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="";
                    robot.setPosition_x=robot.getPosition_x+1;
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }
            }if(newcommand[cont]=="L"){
                if(robot.getPointer=="N"){
                    robot.setPointer="W";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }else
                if(robot.getPointer =="S"){
                    robot.setPointer="E";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }else
                if(robot.getPointer =="E"){
                    robot.setPointer="N";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }else
                if(robot.getPointer =="W"){
                    robot.setPointer="S";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }
            }
            if(newcommand[cont]=="R"){
                if(robot.getPointer==="N"){
                    robot.setPointer="E";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }else
                if(robot.getPointer ==="S"){
                    robot.setPointer="W";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }else
                if(robot.getPointer ==="E"){
                    robot.setPointer="S";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }else
                if(robot.getPointer ==="W"){
                    robot.setPointer="N";
                    ground.ground[robot.getPosition_x][robot.getPosition_y]="Robo->"+robot.getPointer;
                }
                
            }
            cont++;
            if((robot.getPosition_x>4 || robot.getPosition_y>4 || robot.getPosition_y<0)){
                ground.ground[robot.getPosition_x][robot.getPosition_y]="";  
                return "Comando invalido, com este comando o robô irá para fora do terreno";
            }      
           
        }
        return "("+ robot.getPosition_x + robot.getPosition_y + robot.getPointer+")";
    }catch (e){
        if(robot.getPosition_x<0){
            return "Comando invalido, com este comando o robô irá para fora do terreno";
        } else return "Ocorreu um erro na aplicação";
    } 
    
}
console.log(PositionRobot(_robot,_ground,c));