var sliderContainer = document.querySelector(".slide-controls");
var conditionsContainer = document.querySelector(".conditions-controls-list");

sliderContainer.addEventListener("click", function(event) {
  sliderToggle(
    event,
    ".slider-item.active",
    ".slide-control.active",
    "slide-control",
    "#slide"
  );
});

conditionsContainer.addEventListener("click", function(event) {
  sliderToggle(
    event,
    ".conditions-slide.active",
    ".conditions-control-button.active",
    "conditions-control",
    "#conditions-slide"
  );
});

function sliderToggle(
  event,
  activeSlideSelector,
  activeControlSelector,
  slideControlSelector,
  slideSelector
) {
  var activeSlide = document.querySelector(activeSlideSelector);
  var activeControl = document.querySelector(activeControlSelector);
  var eventTarget = event.target;
  var eventTargetId = eventTarget.id;
  var sliderItem;
  var dataSelector = eventTarget.dataset.number;

  if (eventTarget === activeControl) {
    return
  } else if (eventTargetId === slideControlSelector + "-" + dataSelector) {
    sliderItem = document.querySelector(slideSelector + "-" + dataSelector);
    activeControl.classList.remove("active");
    activeSlide.classList.remove("active");
    eventTarget.classList.add("active");
    sliderItem.classList.add("active");
  }
}
