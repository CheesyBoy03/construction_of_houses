const openPage = _class => {
    let open = document.querySelector('.active-tab');
    let page = document.querySelector(`.${_class}`)

    if(open){
        open.classList.remove('active-tab')
    }

    page.classList.add('active-tab')
}
