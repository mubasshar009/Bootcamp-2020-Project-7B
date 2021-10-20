import { shallow } from 'enzyme';
import TimerButton from './TimerButton';


describe("TImer" , () => {
    let container: any;
    beforeEach(() => (
        container = shallow(<TimerButton reset={jest.fn()} start={jest.fn()} stop={jest.fn()}/>)
    ))    
    it("Should Render a div",() => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
    it("Should Render three button" , () => {
        expect(container.find("button").length).toBeGreaterThanOrEqual(3);
    })
})