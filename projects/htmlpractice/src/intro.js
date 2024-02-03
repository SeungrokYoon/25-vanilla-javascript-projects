export default function Intro({ target, initialState, onClick }) {
  const child = document.createElement("div");
  target.appendChild(child);
  child.classname = "Nodes";
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    child.innerHTML = `
      <div>Hi ${this.state} my name is Seungrok</div>
    `;
  };
  this.render();
}
