function lockedProfile() {
    function showMore() {
        let profile = this.parentNode;
        let unlockechCheckmark = profile.getElementsByTagName('input')[1];
        let info = profile.children[9];
        let button = profile.getElementsByTagName('button')[0];

        if (unlockechCheckmark.checked && button.textContent === 'Show more') {
            info.style.display = 'block';
            button.textContent = 'Hide it';
        } else if (unlockechCheckmark.checked && button.textContent === 'Hide it') {
            info.style.display = 'none';
            button.textContent = 'Show more';
        }
    }

    let profiles = document.getElementsByClassName('profile');
    Array.from(profiles).forEach(profile => {
        let button = profile.getElementsByTagName("button")[0];
        button.addEventListener('click', showMore);
    });
}