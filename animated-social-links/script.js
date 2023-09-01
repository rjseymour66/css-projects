(() => {
    'use strict';

    let expanded = false;
    const container = document.getElementById('share');
    const shareButton = document.getElementById('shareButton');
    const menuItems = Array.from(container.querySelectorAll('li'));
    const menu = container.querySelector('menu');

    addButtonListeners();
    addListListeners();
    addTransitionListeners();

    function addButtonListeners() {
        shareButton.addEventListener('click', toggleMenu);
        shareButton.addEventListener('keyup', handleToggleButtonKeypress);
    }

    function addListListeners() {
        menuItems.forEach(li => {
            const link = li.querySelector('a');
            link.addEventListener('keyup', handleMenuItemKeypress);
            link.addEventListener('keydown', handleTab);
            link.addEventListener('click', toggleMenu);
        });
    }

    function addTransitionListeners() {
        // TODO
    }

    function handleToggleButtonKeypress(event) {
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                if (!expanded) { toggleMenu(); }
                moveToNext();
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                if (expanded) { toggleMenu(); }
                break;
        }
    }

    function handleMenuItemKeypress(event) {
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                moveToNext();
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                if (event.altKey === true) {
                    navigate(event);
                    toggleMenu();
                } else {
                    moveToPrevious();
                }
                break;
            case 'Enter':
                toggleMenu();
                break;
            case ' ':
                navigate(event);
                toggleMenu();
                break;
            case 'Tab':
                event.preventDefault();
                toggleMenu();
                break;
            case 'Escape':
                toggleMenu();
                break;
            case 'Home':
                moveToNext(0);
                break;
            case 'End':
                moveToNext(menuItems.length - 1);
                break;
        }
    }

    function handleTab(event) {
      if (event.key !== 'Tab') { return; }
      event.preventDefault();
    }
});