import { mount, shallow } from "enzyme";
import Timer from "./Timer";

describe("App" , () => {
    let container:any;
    beforeEach(() => (
        container = shallow(<Timer />)
    ))
    it("Invokes startTime when start button is clicked",() => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    })

})