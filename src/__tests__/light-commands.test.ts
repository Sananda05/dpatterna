import {Controller,LightOnCommand,LightOffCommand,RedLightOnCommand,RedLight,RedLightOffCommand,RedLightIncreaseLuminosity,RedLightDecreaseLuminosity, Light} from "../patterns/command/light-commands";
import {lightController} from "../pages/hello-command/load-command"

describe("Light Commands Test", () => {
    let REDLIGHT = false
    let controller = new Controller()

    test('Light ON test', () => {
        let expected = lightController('on');

        controller.setCommand(new LightOnCommand(new Light))
        let reality = controller.executeCommand()
        expect(expected).toEqual(reality);
    })

    test('Light OFF test', () => {
        let expected = lightController('off');
        controller.setCommand(new LightOffCommand(new Light))
        let reality = controller.executeCommand()
        expect(expected).toEqual(reality);
    })

    test('Red Light ON test', () => {
        REDLIGHT = true
        let expected = lightController('red');
        controller.setCommand(new RedLightOnCommand(new RedLight))
        let reality = controller.executeCommand()
        expect(expected).toEqual(reality);
    })

    test('Red Light OFF test', () => {
        REDLIGHT = true
        let expected = lightController('off');
        
        controller.setCommand(new RedLightOffCommand(new RedLight()))
        let reality = controller.executeCommand()
        expect(expected).toEqual(reality);
    })

    test('Increase luminosity test', () => {
        let expected = "red1"
        controller.setCommand(new RedLightIncreaseLuminosity(new RedLight))
        let reality = controller.executeCommand()
        expect(expected).toEqual(reality);
    })

    test('Decrease luminosity test', () => {
        REDLIGHT = true
        let expected = "red0"
        controller.setCommand(new RedLightDecreaseLuminosity(new RedLight))
        let reality = controller.executeCommand()
        expect(expected).toEqual(reality);
    })


})