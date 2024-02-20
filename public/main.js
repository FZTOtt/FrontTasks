const menu = document.getElementById('menu')
const openBtn = document.getElementById('open')

openBtn.addEventListener('click', () => {
    Items = `
    <a>Раз</a>
    <a>Два</a>`;
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    menuContainer.innerHTML = Items;
    menu.appendChild(menuContainer);
    menuContainer.style.display = 'block';

    document.addEventListener('click', (event) => {
        if(!menu.contains(event.target)) {
            menuContainer.style.display = 'none';
        }
    });
});

