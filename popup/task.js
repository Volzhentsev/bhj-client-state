function popup() {
    const pop = document.getElementById('subscribe-modal');
    const popupClose = document.querySelector('.modal__close_times');
    if (checkCoockie('modal')) {
        pop.className = 'modal';
    } else{
        pop.className = 'modal modal_active'
    }
    popupClose[0].onclick = () => {
        pop.className = 'modal';
        setCookie('modal', 'true');
    }
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
    return true
}

function checkCoockie(name) {
    let pairs = document.cookie.split('; ');
    let cookie = pairs.find(item => item.startsWith(name + '='));
    return cookie != undefined
}

popup()
