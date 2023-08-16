import PopoverWidget from "./components/popoverWidget/PopoverWidget";

const container = document.querySelector('.container');
const btn = new PopoverWidget(container);
btn.bindToDOM();