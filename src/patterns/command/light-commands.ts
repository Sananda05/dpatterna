export class Light {
    public on(){
        return 'on';
    }

    public off(){
        return 'off';
    }
}

var luminosity:number =0;

export class RedLight extends Light{

    public HIGH:number = 3;
    public MEDIUM:number=2;
    public LOW:number=1;
    public NORMAL:number=0;

    public on(){
        return `red${this.NORMAL}`;
    }

    public off(){
        return 'off';
    }

    public increaseLuminosity(): string {
        luminosity++;
        return this.setLuminosity(luminosity)      
    }

    public decreaseLuminosity():string{
        luminosity--;
        return this.setLuminosity(luminosity)
    }

    public setLuminosity(luminosity:number): string{

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

    execute():string{
        return this.light.on();
    }
}

export class LightOffCommand implements Command{
    light:Light;

    constructor(light:Light){
        this.light=light;
    }

    execute():string{
        return this.light.off();
    }
}

export class RedLightOnCommand implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.on()
    }

}

export class RedLightOffCommand implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.off()
    }

}

export class RedLightIncreaseLuminosity implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseLuminosity()
    }

}

export class RedLightDecreaseLuminosity implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseLuminosity()
    }

}

export class Controller {
    remoteCommand!: Command;

    setCommand(command: Command) {
        this.remoteCommand = command;
    }

    executeCommand() {
        return this.remoteCommand.execute()
    }


}