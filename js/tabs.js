const tabsLink = document.querySelectorAll('.tabs-link');
const tabContents = document.querySelectorAll('.tab-content-item');

for (let i = 1; i < tabContents.length; i++) {
  tabContents[i].classList.remove('active');
  tabContents[i].style.display = 'none';
}

tabsLink.forEach(function(link) {
  link.addEventListener('click', function() {
    tabsLink.forEach(function(link) {
      link.classList.remove('active');
    });
    link.classList.add('active');
    tabContents.forEach(function(content) {
      content.classList.remove('active');
      content.style.display = 'none';
    });


    let tabId = link.getAttribute('data-tab');

    const tabContent = document.getElementById(`${tabId}`);

    tabContent.classList.add('active');
    tabContent.style.display = 'block';
  })
})
