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
        const offset = window.scrollY * 0.3; //
        text.style.transform = `translateX(${-offset}px)`;
      });
    });




    



(function() {
       window.addEventListener("message", function(event) {
           if (event.data["datawrapper-height"] !== undefined) {
               const iframes = document.querySelectorAll("iframe");
               for (let chartId in event.data["datawrapper-height"]) {
                   for (let i = 0; i < iframes.length; i++) {
                       if (iframes[i].contentWindow === event.source) {
                           iframes[i].style.height = event.data["datawrapper-height"][chartId] + "px";
                       }
                   }
               }
           }
       });
   })();




















  // Увеличение изображения

document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.t107__width');
    if (!img) return;

    const overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    document.body.appendChild(overlay);
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'close-zoom-btn';
    document.body.appendChild(closeBtn);

    const isMobile = () => window.innerWidth < 1024;
    function closeImage() {
        img.classList.remove('is-active');
        document.body.classList.remove('img-is-zoomed');
        img.style.objectPosition = 'center 0%';
    }
    function openImage() {
        img.classList.add('is-active');
        document.body.classList.add('img-is-zoomed');
    }
    overlay.addEventListener('click', closeImage);
    img.addEventListener('click', function(e) {
        if (isMobile()) return;
        e.preventDefault();
        if (!this.classList.contains('is-active')) openImage();
    });
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeImage();
    });
    img.addEventListener('mousemove', function(e) {
        if (!this.classList.contains('is-active') || isMobile()) return;
        const percentage = (e.clientY / window.innerHeight) * 100;
        this.style.objectPosition = `center ${percentage}%`;
    });
    img.addEventListener('touchmove', function(e) {
        if (!this.classList.contains('is-active') || isMobile()) return;
        const touch = e.touches[0];
        const percentage = (touch.clientY / window.innerHeight) * 100;
        const safePercent = Math.max(0, Math.min(100, percentage));
        this.style.objectPosition = `center ${safePercent}%`;
        e.preventDefault();
    }, { passive: false });
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeImage();
    });
});

