const sidebar = document.querySelector('.sidebar');
const showSideBar = document.querySelector('#showSidebar');
const hideSideBar = document.querySelector('#hideSidebar');
const nav = document.querySelector('nav');
const containers = document.querySelectorAll('.container');


//navbar logig
showSideBar.addEventListener('click', () => {
    sidebar.style.display = "block";
    nav.classList.add('push-down');
});

hideSideBar.addEventListener('click', () => {
    sidebar.style.display = "none";
    nav.classList.remove('push-down');
});

//accordion logic
containers.forEach(container => {
    const question = container.querySelector('.question');

    container.addEventListener('click', () => {
        container.classList.toggle('active');
    });
    question.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            container.classList.toggle('active');
        }
    });
});

//input logic

const emailInput = document.getElementById('myInput');
const contactBtn = document.getElementById('myBtn');
const errorMsg = document.getElementById('errorMsg');
const footerInputDiv = document.querySelector('.footer-input');

contactBtn.addEventListener('click', function () {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        errorMsg.style.display = 'block';
        emailInput.classList.add('error');
        footerInputDiv.classList.add('error');
    } else {
        errorMsg.style.display = 'none';
        emailInput.classList.remove('error');
        footerInputDiv.classList.remove('error');
        alert('Form submitted successfully!');
        emailInput.value = '';
    }
});


        
const tabs = document.querySelectorAll('[data-tab]');
const contentContainers = document.querySelectorAll('[data-content]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            tabs.forEach(item => item.classList.remove('active-tab'));
            tab.classList.add('active-tab');
            contentContainers.forEach(container => {
                container.classList.remove('active-content');
            });
            const activeContent = document.querySelector(`[data-content="${tabId}"]`);
             if (activeContent) {
                activeContent.classList.add('active-content');
             }
        });
    });



