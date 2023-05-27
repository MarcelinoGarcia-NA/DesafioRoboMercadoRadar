let form = document.getElementById('form-robot');
let command_submit= document.getElementById('command-submit');
 
form.addEventListener('submit', function(e) {
    
    let _robot= new Robot(0,0,'N');
    let _ground = new Ground(5,5);

    let position =PositionRobot(_robot,_ground,command_submit.value);
    document.getElementById('location-robot').textContent=position;

    e.preventDefault();
});








