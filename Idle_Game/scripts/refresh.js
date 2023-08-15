function display_upgrade_yn(id1, id2, val1, val2, val3) {
    if (val1 > val2) {
        if (val3 == 0) {
            id1.classList.add('can_upgrade');
            id1.classList.remove('cant_upgrade');
            id2.classList.add('can_upgrade');
            id2.classList.remove('cant_upgrade');
            val3 = 1;
        }

    }
    else {
        if (val3 == 1) {
            id1.classList.add('cant_upgrade');
            id1.classList.remove('can_upgrade');
            id2.classList.add('cant_upgrade');
            id2.classList.remove('can_upgrade');
            val3 = 0;
        }
    }
    return val3
}