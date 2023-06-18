export default function Node({target, initialState, onClick}){
  const child = document.createElement('div')
  target.appendChild(child)
  this.state= initialState
  this.setState = (nextState) =>{
    this.state = nextState
    this.render()
  }
  this.render = () => {
    if(this.state==='') return
    child.innerHTML = `
      <image class="Node" src=${this.state} width=300 height=300/>
    `
  }
  child.addEventListener('click',(e)=>{
    const closestNode = e.target.closest('.Node')
    const src= closestNode.src
    onClick(src)
  })
  this.render()
}