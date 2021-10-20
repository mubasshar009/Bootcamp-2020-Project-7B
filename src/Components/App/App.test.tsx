import { shallow } from "enzyme";
import App from "./App";
import Timer from '../Timer/Timer';

describe("App" , () => {
    let container:any ;
    beforeEach(() => (
        container = shallow(<App />)
    ))
    it("should render a div", () => {
        expect(container.find("div").length).toEqual(1)
    })
    
})