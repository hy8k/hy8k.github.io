"use strict";


document.addEventListener('DOMContentLoaded', function () {
    const tabList = document.getElementsByClassName('tab');
    const postsList = document.getElementsByClassName('posts-list');

    if (tabList.length !== 0) {
        tabList[0].classList.add('active');
        postsList[0].classList.add('show');

        for (let i = 0; i < tabList.length; i++) {
            tabList[i].addEventListener('click', function () {
                const arrayTabs = Array.prototype.slice.call(tabList);
                const index = arrayTabs.indexOf(this);

                document.getElementsByClassName('active')[0].classList.remove('active');
                this.classList.add('active');
                document.getElementsByClassName('show')[0].classList.remove('show');
                postsList[index].classList.add('show');
            }, false);
        }

        tabList[0].click();
    }
}, false);
