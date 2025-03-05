
const hiddenNav = document.querySelector("#hidden-nav");

function handleMenu(){
    // console.log("clicked")
  hiddenNav.classList.toggle("hidden")      
}

const dtElements = document.querySelectorAll('dt');

dtElements.forEach(element =>{
  // console.log(element)
  element.addEventListener("click",()=>{
   const ddId = element.getAttribute("aria-controls");

   const ddElement=document.getElementById(ddId)

   const ddArrowIcon =element.querySelector('i')

   ddElement.classList.toggle('hidden');
   ddArrowIcon.classList.toggle('rotate-180')
  })
})