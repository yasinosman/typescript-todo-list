export const createHtmlElement = (
    elementType: string,
    innerHtml: string | null,
    properties: any
): HTMLElement | HTMLFormElement => {
    const element = document.createElement(elementType);
    if (typeof innerHtml === "string") {
        element.innerHTML = innerHtml;
    }
    if (properties !== null && properties !== undefined) {
        Object.keys(properties).forEach((key) => {
            element.setAttribute(key, properties[key]);
        });
    }

    return element;
};
