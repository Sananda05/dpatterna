export class Light {

    // light on function
    public on(){
        return 'on';
    }
    
    // light off function
    public off(){
        return 'off';
    }
}

var luminosity:number =0;

export class RedLight extends Light{
    
    //defining luminosity value

    public HIGH:number = 3;
    public MEDIUM:number=2;
    public LOW:number=1;
    public NORMAL:number=0;
    
    // Red light on
    public on(){
        return `red${this.NORMAL}`;
    }
    
    // Red light off
    public off(){
        return 'off';
    }
    // Increase luminosity
    public increaseLuminosity(): string {
        luminosity++;
        return this.setLuminosity(luminosity)      
    }
    // decrease luminosity
    public decreaseLuminosity():string{
        luminosity--;
        return this.setLuminosity(luminosity)
    }

    public setLuminosity(luminosity:number): string{
        
    // set luminosity according to the value

        if(luminosity==0) 
        {return `red${this.NORMAL}`;}
        else if(luminosity==1)
        {return `red${this.LOW}`} 
        else if(luminosity==2)
        {return `red${this.MEDIUM}`}
        else
        {return `red${this.HIGH}`;}

    }

}

export interface Command {
    execute():string
}


export class LightOnCommand implements Command {

    light:Light;

    constructor(light:Light){
        this.light=light;
    }
    // return light on command
    execute():string{
        return this.light.on();
    }
}

export class LightOffCommand implements Command{
    light:Light;

    constructor(light:Light){
        this.light=light;
    }
    // return light off command
    execute():string{
        return this.light.off();
    }
}

export class RedLightOnCommand implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }
    // return red light on command
    execute(): string {
        return this.light.on()
    }

}

export class RedLightOffCommand implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }
    // return red light off command
    execute(): string {
        return this.light.off()
    }

}

export class RedLightIncreaseLuminosity implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }
    // return red light increase luminosity command
    execute(): string {
        return this.light.increaseLuminosity()
    }

}

export class RedLightDecreaseLuminosity implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }
    // return red light decrease luminosity command
    execute(): string {
        return this.light.decreaseLuminosity()
    }

}

export class Controller {
    remoteCommand!: Command;
    
    //set a specific command in controller
    setCommand(command: Command) {
        this.remoteCommand = command;
    }
    // executing the command
    executeCommand() {
        return this.remoteCommand.execute()
    }


}