    // Показ/скрытие хедера

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const activeClass = "text-[#6a6ffeff]"; 
    const defaultClass = "text-white"; 

    const links = header ? Array.from(header.querySelectorAll(".menu-link")) : [];
    const sectionIds = ["intro", "vk", "tg", "x", "end"];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    window.addEventListener("scroll", () => {
        header.classList.toggle("hidden", window.scrollY <= 200);
    }, { passive: true });

    function highlightLink(id) {
        links.forEach(link => {
            const isActive = link.getAttribute("href") === `#${id}`;
            if (isActive) {
                link.classList.add(activeClass);
                link.classList.remove(defaultClass);
            } else {
                link.classList.remove(activeClass);
                link.classList.add(defaultClass);
            }
        });
    }
    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px", 
        threshold: 0 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                highlightLink(entry.target.id);
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});









// top-button

  document.addEventListener('DOMContentLoaded', () => {
    const btnContainer = document.getElementById('backToTopContainer');
    const btn = btnContainer ? btnContainer.querySelector('.t190__button') : null;

    if (!btnContainer || !btn) return;
    btnContainer.style.display = 'none';
    btnContainer.style.opacity = '0';
    btnContainer.style.transition = 'opacity 0.3s ease-in-out';
    btnContainer.style.position = 'fixed';
    btnContainer.style.bottom = '30px';
    btnContainer.style.left = '30px'; 
    btnContainer.style.right = 'auto'; 
    btnContainer.style.zIndex = '1000';


    const toggleVisible = () => {
      if (window.scrollY > 300) {
        btnContainer.style.display = 'block';
        setTimeout(() => {
             btnContainer.style.opacity = '1';
        }, 10);
      } else {
        btnContainer.style.opacity = '0';
        setTimeout(() => {
            btnContainer.style.display = 'none';
        }, 300);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });

