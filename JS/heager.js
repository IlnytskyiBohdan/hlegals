
      function toggleMenu() {
        const menu = document.getElementById("menu");
        const overlay = document.getElementById("overlay");
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
      }

      function setActiveLink() {
        const links = document.querySelectorAll(".nav-link");
        const currentPath = window.location.pathname;

        links.forEach((link) => {
          if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
          }
        });
      }
      window.onload = setActiveLink;

