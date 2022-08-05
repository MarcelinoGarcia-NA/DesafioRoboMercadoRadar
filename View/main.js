let c= document.getElementById('command-submit');
let _robot= new Robot(0,0,'N');
let _ground = new Ground(5,5);

console.log(PositionRobot(_robot,_ground,c));
