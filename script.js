const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

let stage = 1; // Track the current stage of questions

// Save the initial position of the "No" button
const noBtnInitialPosition = {
    left: noBtn.style.left || `${noBtnRect.left - wrapperRect.left}px`,
    top: noBtn.style.top || `${noBtnRect.top - wrapperRect.top}px`,
};

yesBtn.addEventListener('click', () => {
    if (stage === 1) {
        question.innerHTML = 'Will you give me a full ride?'; // Update the question
        stage = 2; // Move to the next stage
        // Reset the "No" button to its original position
        noBtn.style.left = noBtnInitialPosition.left;
        noBtn.style.top = noBtnInitialPosition.top;
    } else if (stage === 2) {
        question.innerHTML = "Thank you! Here's my mail: mahdialwakil@gmail.com . Kindly send the offer there!";
        yesBtn.style.display = 'none'; // Hide both buttons
        noBtn.style.display = 'none';
    }
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});