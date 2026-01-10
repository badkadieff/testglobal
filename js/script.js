
  document.addEventListener("DOMContentLoaded", function() {
    function replacePrepositions(text) {
      const prepositions = ["в", "без", "до", "из", "к", "на", "по", "о", "от", "перед", "при", "через", "с", "у", "за", "над", "об", "под", "про", "и", "а", "но", "да", "или", "либо", "то", "ни", "не", "же"];
      const regex = new RegExp(`\\s(${prepositions.join("|")})\\s`, "gi");

      return text.replace(regex, " $1&nbsp;");
    }

    function processElements() {
      const elements = document.querySelectorAll(".no-break-prepositions");

      elements.forEach(function(element) {
        element.innerHTML = replacePrepositions(element.innerHTML);
      });
    }

    processElements();
  });






    document.addEventListener('DOMContentLoaded', () => {
      const text = document.getElementById('scrollText');

      window.addEventListener('scroll', () => {
        const offset = window.scrollY * 0.3; // скорость движения
        text.style.transform = `translateX(${-offset}px)`;
      });
    });