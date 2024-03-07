const features = document.getElementById('features')
const featuresListItems = document.getElementById('features-list-items')
const featuresArrowDown = document.getElementById('feat-arrow-down')
const company = document.getElementById('company')
const companyListItems = document.getElementById('company-list-items')
const companyArrowDown = document.getElementById('com-arrow-down')
const closeMenu = document.querySelector('.close')
const hamburgerMenu = document.getElementById('bar')
const menuSection = document.querySelector('.menu-section')

features.addEventListener('click', () => {
    featuresListItems.toggleAttribute('hidden')
    featuresArrowDown.classList.toggle('arrow-up')
    featuresArrowDown.classList.toggle('arrow-downs')
})

company.addEventListener('click', () => {
    companyListItems.toggleAttribute('hidden')
    companyArrowDown.classList.toggle('arrow-up')
    companyArrowDown.classList.toggle('arrow-downs')
})

closeMenu.addEventListener('click', () => {
    menuSection.style.right = '-500px'
    menuSection.style.boxShadow = 'none'
    closeMenu.style.display = 'none'
})

hamburgerMenu.addEventListener('click', () => {
    menuSection.style.right = '0'
    menuSection.style.boxShadow = '-200px 0 100px 300px rgba(0,0,0,0.74)'
    closeMenu.style.display = 'flex'  
})

