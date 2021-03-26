const Popup = () => {
    const popup = document.querySelector('.popup');
    const body = document.querySelector('body');

    if(popup.classList.contains('close-popup')){
        popup.classList.remove('close-popup');
        body.classList.add('block-body');
    }
    else{
        popup.classList.add('close-popup');
        body.classList.remove('block-body');
    };
};
