document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('click-audio');
  const links = document.querySelectorAll('.click');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const next = document.querySelector('.nextbtn');

  const descriptions = [
    "<br><br><br><br><br><br>There was a child who lived happily.",
    "<br><br><br><br><br><br><br>When the child grew up, adults asked what the child wanted to be and do.",
    "<br><br><br><br><br><br><br><br><br><br>The now-teenager replied: \“I want to be a child.\”",
    "<br><br><br><br><br><br><br><br><br><br><br><br>\“You cannot be a child.\”",
    "<br><br><br><br><br><br><br><br><br><br><br>\“But why? I was happy as a child.\”",
    "<br><br><br><br><br><br><br><br><br><br><br><br>\“That’s not enough for the world nowadays.\”",
    "<br><br><br><br><br><br><br><br><br><br><br><br>The child was quiet. The child stared up into the vast space where stars lived.",
    "<br><br><br><br><br><br><br><br>\“Then I’d like to be a star.\”",
    "<br><br><br><br><br><br><br><br><br><br><br>\“But that is not possible.\”",
    "<br><br><br><br><br><br><br><br><br><br><br><br>\“Why are you asking me what I want to be when you already know what I should be?\”",
    "<br><br><br><br><br><br><br><br><br><br><br><br><br>The child waited in silence but no answer came. So the child left.",
    "<br><br><br><br><br><br><br><br><br><br><br><br><br>There is a child who lives happily."
    
  ];

  links.forEach((link, index) => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      audio.volume = 0.5;
      audio.play();

      modal.classList.add('show');

      const image = link.querySelector('img');
      modalImage.src = image.src;
      modalDescription.innerHTML = descriptions[index];
    });
  });

  next.addEventListener('click', function(event) {
    event.preventDefault(); 
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = next.href;
    }, 1000);
  });

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
});






/*
const audio = document.getElementById('click-audio');
const links = document.querySelectorAll('.click');
const next = document.querySelector('.nextbtn')

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    audio.volume = 0.5;
    audio.play();
  });
});

next.addEventListener('click', function(event) {
  document.body.classList.add('fade-out');
  setTimeout(function() {
    window.location.href = next.href;
  }, 1000);
});

const vaseImages = document.querySelectorAll('.vase');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');

vaseImages.forEach((image, index) => {
  image.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add('show');
    
    modalImage.src = image.src;
    const descriptions = [
      "<br><br><br><br><br><br>There was a child who lived happily.",
      "<br><br><br><br><br><br><br>When the child grew up, adults asked what the child wanted to be and do.",
      "<br><br><br><br><br><br><br><br><br><br>The now-teenager replied: \“I want to be a child.\”",
      "<br><br><br><br><br><br><br><br><br><br><br><br>\“You cannot be a child.\”",
      "<br><br><br><br><br><br><br><br><br><br><br>\“But why? I was happy as a child.\”",
      "<br><br><br><br><br><br><br><br><br><br><br><br>\“That’s not enough for the world nowadays.\”",
      "<br><br><br><br><br><br><br><br><br><br><br><br>The child was quiet. The child stared up into the vast space where stars lived.",
      "<br><br><br><br><br><br><br><br>\“Then I’d like to be a star.\”",
      "<br><br><br><br><br><br><br><br><br><br><br>\“But that is not possible.\”",
      "<br><br><br><br><br><br><br><br><br><br><br><br>\“Why are you asking me what I want to be when you already know what I should be?\”",
      "<br><br><br><br><br><br><br><br><br><br><br><br><br>The child waited in silence but no answer came. So the child left.",
      "<br><br><br><br><br><br><br><br><br><br><br><br><br>There is a child who lives happily."
      
    ];
     modalDescription.innerHTML = descriptions[index];
  });
});


modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});
*/