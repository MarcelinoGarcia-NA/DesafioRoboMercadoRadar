 class Robot {
    constructor(position_x,position_y,pointer){
        this.pointer=pointer;
        this.position_x=position_x;
        this.position_y=position_y;
    }
    get getPosition_x(){
        return this.position_x;
    }
    set setPosition_x(position_x){
        this.position_x=position_x;
    }
    get getPosition_y(){
        return this.position_y;
    }
    set setPosition_y(position_y){
        this.position_y=position_y;
    }
    get getPointer(){
        return this.pointer;
    }
    set setPointer(pointer){
        this.pointer=pointer;
    }
    
}