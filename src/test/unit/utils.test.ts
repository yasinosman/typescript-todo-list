import * as utils from "../../utils";

it("Should return an h1 with a classname of 'header' and innerHTML of 'Hello World'", () => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";
    h1.classList.add("header");
    expect(utils.createHtmlElement("h1", "Hello World", { class: "header" })).toEqual(h1);
});

it("Should return an h1 with innerHTML of Hello World", () => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";
    expect(utils.createHtmlElement("h1", "Hello World", null)).toEqual(h1);
});

it("Should return an h1 with a classname of 'header'", () => {
    const h1 = document.createElement("h1");
    h1.classList.add("header");
    expect(utils.createHtmlElement("h1", "", { class: "header" })).toEqual(h1);
});
