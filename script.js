// Obtiene el botón principal desde el HTML usando su id "mainBtn"
const mainBtn = document.getElementById('mainBtn');

// Obtiene el contenedor de los enlaces sociales usando su id "socialLinks"
const socialLinks = document.getElementById('socialLinks');

// Agrega un evento que se ejecuta cuando se hace clic en el botón principal
mainBtn.addEventListener('click', () => {

    // Agrega o quita la clase "active" para mostrar u ocultar los enlaces sociales
    socialLinks.classList.toggle('active');

    // Cambia el ícono del botón según el estado actual:
    // Si los enlaces están visibles (active), muestra una X para cerrar
    // Si los enlaces están ocultos, muestra el ícono de compartir
    mainBtn.innerHTML = socialLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-share-alt"></i>';
});

(function(){
    var lightbox    = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var closeBtn    = document.getElementById('lightboxClose');
    var galeriaImgs = document.querySelectorAll('.experiencia__grid .exp img');

    function abrir(img){
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('lightbox--activo');
      document.body.style.overflow = 'hidden';
    }
    function cerrar(){
      lightbox.classList.remove('lightbox--activo');
      document.body.style.overflow = '';
    }

    galeriaImgs.forEach(function(img){
      img.addEventListener('click', function(){ abrir(img); });
    });
    closeBtn.addEventListener('click', cerrar);
    lightbox.addEventListener('click', function(e){
      if(e.target === lightbox){ cerrar(); }
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ cerrar(); }
    });
  })();