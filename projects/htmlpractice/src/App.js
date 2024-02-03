import Intro from "./intro.js";
import Node from "./node.js";
import { request } from "./api.js";

export default function App({ target }) {
  //constructor function 의 형태를 지니고 있음
  this.state = { introWord: "Nice to meet you", isLoading: false, catUrl: "" };
  this.setState = (nextState) => {
    //컴포넌트들의 setState를 호출하면 알아서 렌더됨
    this.state = nextState;
    intro.setState(this.state.introWord);
    node.setState(this.state.catUrl);
  };

  const fetch = async (id) => {
    this.state = { ...this.state, isLoading: true };
    const data = await request(id);
    const catUrl = data[0].url;
    this.setState({ ...this.state, catUrl: catUrl });
  };

  const intro = new Intro({ target, initialState: this.state.introWord });
  const node = new Node({
    target,
    initialState: this.state.catUrl,
    onClick: () => {
      alert("clicked");
    },
  });
  fetch("");
}
