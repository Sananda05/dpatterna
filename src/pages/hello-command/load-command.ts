import{
    Light,
    RedLight,
    Command,
    LightOnCommand,
    LightOffCommand,
    RedLightOnCommand,
    RedLightOffCommand,
    RedLightIncreaseLuminosity,
    RedLightDecreaseLuminosity,
    Controller,
}from "../../patterns/command/light-commands"

let controller = new Controller();

// initally red light is off
let REDLIGHT: boolean = false;
let result: string;

//function for setiing command in controller class
export function LightCommand(command: Command): string {

    controller.setCommand(command)

    return controller.executeCommand()

}

export function lightController(command : string){

    switch (command) {

        // if the red light is on, the command will work for Red Light class, otherwise the next part will execute. 
        case "on":
            result = REDLIGHT ? LightCommand(new RedLightOnCommand(new RedLight())) :LightCommand(new LightOnCommand(new Light()))
            console.log(result)
            break;

        case "off":
            REDLIGHT=false
            result = REDLIGHT ? LightCommand(new RedLightOffCommand(new RedLight())) : LightCommand(new LightOffCommand(new Light()))
            break

        case "red":
            REDLIGHT = true
            result= REDLIGHT?LightCommand(new RedLightOnCommand(new RedLight())):LightCommand(new LightOnCommand(new Light()))
            break   

        case "increase":
            REDLIGHT = true
            result=REDLIGHT? LightCommand(new RedLightIncreaseLuminosity(new RedLight())):LightCommand(new LightOnCommand(new Light()))
            break

        case "decrease":
            result = REDLIGHT? LightCommand(new RedLightDecreaseLuminosity(new RedLight())) :LightCommand(new LightOnCommand(new Light()))
            break
        default:

    }
    // @ts-ignore
    return result;
}
