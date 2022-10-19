// tabber 
function setUpsTabs () {
    document.querySelectorAll(".tab_button").forEach(button => {
      button.addEventListener("click", () => {
        const sidebar = button.parentElement;
        const tabsContainer = sidebar.parentElement.parentElement.parentElement.parentElement;
        const tabsNumber = button.dataset.forTab;
        const tabsToActivate = tabsContainer.querySelector(`.tabs_content[data-for-tab="${tabsNumber}"]`)

        sidebar.querySelectorAll(".tab_button").forEach(button => {
          button.classList.remove("tab_button_active");
        })

        tabsContainer.querySelectorAll(".tabs_content").forEach(tab => {
          tab.classList.remove("tab_content_active");
        })

        button.classList.add("tab_button_active");
        tabsToActivate.classList.add("tab_content_active");


      })
    })
  }
  document.addEventListener("DOMContentLoaded", () => {
    setUpsTabs();
  })

  // add class in 20 ft 
  document.getElementById('v-pills-profile-tab').addEventListener('click', function(){
    const refrigeratedContainerButton = document.getElementById("rc-20ft");
    refrigeratedContainerButton.classList.add("tab_button_active");
  })
  document.getElementById('v-pills-disabled-tab').addEventListener('click', function(){
    const refrigeratedContainerButton = document.getElementById("otc-20ft");
    refrigeratedContainerButton.classList.add("tab_button_active");
  })
  document.getElementById('v-pills-messages-tab').addEventListener('click', function(){
    const refrigeratedContainerButton = document.getElementById("frc-20ft");
    refrigeratedContainerButton.classList.add("tab_button_active");
  })
  document.getElementById('v-pills-settings-tab').addEventListener('click', function(){
    const refrigeratedContainerButton = document.getElementById("tc-20ft");
    refrigeratedContainerButton.classList.add("tab_button_active");
  })
  

  
// cross text in table 

  document.getElementById('v-pills-home-tab').addEventListener('click', function() {
    const firstText = 'Standard Container';
    const firstValue = firstText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = firstValue;
})

  document.getElementById('v-pills-profile-tab').addEventListener('click', function() {
    const secondText = 'Refrigerated Container';
    const secondValue = secondText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = secondValue;
})

  document.getElementById('v-pills-disabled-tab').addEventListener('click', function() {
    const thirdText = 'Open Top Container';
    const thirdValue = thirdText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = thirdValue;
})

  document.getElementById('v-pills-messages-tab').addEventListener('click', function() {
    const FourthText = 'Flat Rack Container';
    const FourthValue = FourthText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = FourthValue;
  })

  document.getElementById('v-pills-settings-tab').addEventListener('click', function() {
    const fifthText = 'Tank Container';
    const fifthValue = fifthText;
    const currentText = document.getElementById('cs-text');
    currentText.innerText = fifthValue;
})


// Standard Container crosstext 
document.getElementById('st-20ft').addEventListener('click', function() {
  const containerText = ' 20 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})
document.getElementById('st-40ft').addEventListener('click', function() {
  const containerText = ' 40 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})
document.getElementById('st-40HCft').addEventListener('click', function() {
  const containerText = ' 40HC Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})
document.getElementById('st-45ft').addEventListener('click', function() {
  const containerText = ' 45 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})


// Refrigerated Container cross text 
document.getElementById('rc-20ft').addEventListener('click', function() {
  const containerText = ' 20 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})
document.getElementById('rc-40ft').addEventListener('click', function() {
  const containerText = ' 40 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})


// Open top Container cross text 
document.getElementById('otc-20ft').addEventListener('click', function() {
  const containerText = ' 20 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})
document.getElementById('otc-40ft').addEventListener('click', function() {
  const containerText = ' 40 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})


// Open top Container cross text 
document.getElementById('frc-20ft').addEventListener('click', function() {
  const containerText = ' 20 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})
document.getElementById('frc-40ft').addEventListener('click', function() {
  const containerText = ' 40 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})


// Tank Container cross text 
document.getElementById('tc-20ft').addEventListener('click', function() {
  const containerText = ' 20 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})
document.getElementById('tc-40ft').addEventListener('click', function() {
  const containerText = ' 40 Ft';
  const containerValue = containerText;
  const currentText = document.getElementById('sub-text');
  currentText.innerText = containerValue
})


