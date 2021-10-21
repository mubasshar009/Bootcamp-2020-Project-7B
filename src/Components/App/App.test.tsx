import { shallow } from "enzyme";
import App from "./App";

describe("App" , () => {
    let container:any ;
    beforeEach(() => (
        container = shallow(<App />)
    ))
    it("should render a div", () => {
        expect(container.find("div").length).toEqual(1)
    })
    
})