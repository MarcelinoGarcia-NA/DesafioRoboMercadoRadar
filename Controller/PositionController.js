
function PositionRobot(robot,ground,command){
    let commadUpperCase = command.toUpperCase();//colocando comando em caixa alta;
    let newcommand= commadUpperCase.split('');//criando um array com a palavra comando;

    try{
       for(let i=0; i<newcommand.length;i++){
           switch(newcommand[i]){
              case 'M':
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
                break;
            case 'L':
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
                break;
            case 'R':
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
                break;
            default:
                return "Comando Inválido!";
		    }
            if((robot.getPosition_x>4 || robot.getPosition_y>4 || robot.getPosition_y<0)){
                ground.ground[robot.getPosition_x][robot.getPosition_y]="";  
                return "Comando inválido, com este comando o robô irá para fora do terreno!";
            } 
           }
        return "("+ robot.getPosition_x +","+ robot.getPosition_y +","
        
        
        + robot.getPointer+")";
    }catch (e){
        if(robot.getPosition_x<0){
            return "Comando inválido, com este comando o robô irá para fora do terreno!";
        }else  return "Ocorreu um erro na aplicação";
    } 
    
}
