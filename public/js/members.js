$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    // eslint-disable-next-line no-extend-native
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    $.get('/api/user_data').then((data) => {
        localStorage.setItem('username', capitalize(data.email.split('@').shift()));
        $('.member-name').text(localStorage.getItem('username'));
    });
});
