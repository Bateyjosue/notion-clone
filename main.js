import './style.css'

const root = document.querySelector('#app')
const editor = document.querySelector('#editor')

// create handle input

const handleCreateInput = (event) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Type / for blocks, @ to link docs or people')
    input.setAttribute('class', 'outline-0 border-none')
    root.appendChild(input)
    
}

// create onclick event to create the input on click in the app

const getLastElement = () => {
  const input = document.querySelectorAll('input');
  return input[input.length - 1];
};

editor.addEventListener('click', (event) => {  
  if(event.target.id === "editor") {
    if(getLastElement() == undefined){
      handleCreateInput();
    }
    else if(getLastElement().value != ''){
      handleCreateInput();
    }

      getLastElement().addEventListener('keypress', event => {
        if (event.key === 'Enter') {
          if (event.target.value === '/1') {
            event.target.setAttribute('placeholder', 'Heading 1')
            event.target.value = ''
            event.target.classList.add('text-5xl', 'py-2', 'font-bold')
          }
        }
      })
  }
});

