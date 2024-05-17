console.log("feature-a");

const featurea = document.querySelector(".featurea");

featurea.addEventListener("click", (e) => {
   e.preventDefault()
   console.log({ value: e.target.value });
   console.log(this);
   console.log(window.location);
})