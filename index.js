const plans = document.querySelectorAll('.plan');
const selectPlan = (planNumber) => {
  plans.forEach((plan, index) => {
    plan.classList.toggle('plan--selected', index === planNumber);
  });
};

plans.forEach((plan, index) => {
  plan.addEventListener('click', () => {
    selectPlan(index);
  });
});
