 document.getElementById('activeButton').addEventListener('click',toggleBell)
 document.getElementById('activeInput').addEventListener('click',toggleSearch)
 document.addEventListener('click',remove)



function toggleBell() {
   const tri = document.querySelectorAll(".trigger")
   const page = [...tri]
    page.forEach(el => el.classList.toggle('active'))
}
//hover過Bell會導致滑鼠滑到選單上時選單消失 所以沒辦法跟原版一樣

function remove(e) {
    const tri = document.querySelectorAll(".trigger-input")
    const page = [...tri]
    const bor = document.querySelectorAll('.search-bar')
    const bors = [...bor]
   
    
    const testa = document.querySelector('.testa')
    const testb = document.querySelector('.testb')
   if(e.target !== testa && e.target !== testb){
    
    page.forEach(el => el.classList.remove('active'))
    bors.forEach(el => el.classList.remove('border'))
   }
}

function toggleSearch() {
    const tri = document.querySelectorAll(".trigger-input")
    const page = [...tri]
    const bor = document.querySelectorAll('.search-bar')
    const bors = [...bor]
   
     page.forEach(el => el.classList.add('active'))
     bors.forEach(el => el.classList.add('border'))
     
 }
 



// ------------
document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
handle = e.target
} else {
  handle = e.target.closest(".handle")
}
if (handle != null) onHandleClick(handle)
})

const throttleProgressBar = throttle(() => {
document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
}, 250)
window.addEventListener("resize", throttleProgressBar)

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

function calculateProgressBar(progressBar) {
progressBar.innerHTML = ""
const slider = progressBar.closest(".row").querySelector(".slider")
const itemCount = slider.children.length
const itemsPerScreen = parseInt(
  getComputedStyle(slider).getPropertyValue("--items-per-screen")
)
let sliderIndex = parseInt(
  getComputedStyle(slider).getPropertyValue("--slider-index")
)
const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)

if (sliderIndex >= progressBarItemCount) {
  slider.style.setProperty("--slider-index", progressBarItemCount - 1)
  sliderIndex = progressBarItemCount - 1
}

for (let i = 0; i < progressBarItemCount; i++) {
  const barItem = document.createElement("div")
  barItem.classList.add("progress-item")
  if (i === sliderIndex) {
    barItem.classList.add("active-test")
  }
  progressBar.append(barItem)
}
}

function onHandleClick(handle) {
const progressBar = handle.closest(".row").querySelector(".progress-bar")
const slider = handle.closest(".container").querySelector(".slider")
const sliderIndex = parseInt(
  getComputedStyle(slider).getPropertyValue("--slider-index")
)
const progressBarItemCount = progressBar.children.length
if (handle.classList.contains("left-handle")) {
  if (sliderIndex - 1 < 0) {
    slider.style.setProperty("--slider-index", progressBarItemCount - 1)
    progressBar.children[sliderIndex].classList.remove("active-test")
    progressBar.children[progressBarItemCount - 1].classList.add("active-test")
  } else {
    slider.style.setProperty("--slider-index", sliderIndex - 1)
    progressBar.children[sliderIndex].classList.remove("active-test")
    progressBar.children[sliderIndex - 1].classList.add("active-test")
  }
}

if (handle.classList.contains("right-handle")) {
  if (sliderIndex + 1 >= progressBarItemCount) {
    slider.style.setProperty("--slider-index", 0)
    progressBar.children[sliderIndex].classList.remove("active-test")
    progressBar.children[0].classList.add("active-test")
  } else {
    slider.style.setProperty("--slider-index", sliderIndex + 1)
    progressBar.children[sliderIndex].classList.remove("active-test")
    progressBar.children[sliderIndex + 1].classList.add("active-test")
  }
}
}

function throttle(cb, delay = 1000) {
let shouldWait = false
let waitingArgs
const timeoutFunc = () => {
  if (waitingArgs == null) {
    shouldWait = false
  } else {
    cb(...waitingArgs)
    waitingArgs = null
    setTimeout(timeoutFunc, delay)
  }
}

return (...args) => {
  if (shouldWait) {
    waitingArgs = args
    return
  }

  cb(...args)
  shouldWait = true
  setTimeout(timeoutFunc, delay)
}
}