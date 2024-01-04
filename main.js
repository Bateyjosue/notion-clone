import './style.css'

const root = document.querySelector('#app')
const editor = document.querySelector('#editor')


// create handle input

const handleCreateInput = () => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Type / for blocks, @ to link docs or people');
  input.setAttribute('class', 'outline-0 border-none');
  root.appendChild(input);

  input.addEventListener('input', (event) => {

    if (event.target.value === '/1') {
      const popdown = document.querySelector('.popdown');
      const heading = document.querySelector('.h1');

      popdown.classList.remove('hidden');

      heading.addEventListener('click', () => {
        event.target.classList.add('text-5xl', 'py-2', 'font-bold');
        event.target.setAttribute('placeholder', 'Heading 1');
        if (event.target.value === '/1') {
          event.target.value = '';
        }
        popdown.classList.add('hidden');
      });
    }
  });

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (input.value !== '') {
        handleCreateInput();
      }
    }
  });
};


// Create Popdown 

  const section = document.createElement('section')

  section.innerHTML = `
  <div class="popdown border rounded-md w-72 h-96 hidden">
        <div class="text-light flex flex-col gap-2 p-2">
          <h2 class="font-bold">Add blocks</h2>
          <p class="text-sm text-gray-400">
            Keep typing to filter, or escape to exit
          </p>
          <span class="text-gray-500"
            >Filtering keyword
            <span class="bg-blue-900 text-white px-1 py-0.8 rounded-md"
              >1</span
            ></span
          >
        </div>
        <ul class="py-1 text-sm">
          <li class="h1 flex p-2 text-sm gap-4 items-center hover:bg-gray-200">
            <span class="text-3xl text-gray-400 text-center px-2">T</span>
            <span>
              <h2 class="font-bold">Heading 1</h2>
              <p class="text-xs text-gray-400">Shortcut: type # + space</p>
            </span>
          </li>
          <li class="flex p-2 text-sm gap-4 items-center hover:bg-gray-200">
            <span class="text-3xl text-gray-400 text-center px-2">T</span>
            <span>
              <h2 class="font-bold">Expandable Heading 1</h2>
              <p class="text-xs text-gray-400">Shortcut: type >># + space</p>
            </span>
          </li>
        </ul>
      </div>
  `

  editor.appendChild(section)

// create onclick event to create the input on click in the app

const getLastElement = () => {
  const input = document.querySelectorAll('input');
  return input[input.length - 1];
};

editor.addEventListener('click', (e) => {
  if (e.target.id === 'editor') {
    if(getLastElement() == undefined || getLastElement().value != ''){
      handleCreateInput();
    }
  }
});

