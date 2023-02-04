//Função botao Comprar 1
function showButton1() {
    document.getElementById("botaoComprar1").style.display = "block";
  }
  
function hideButton1() {
    document.getElementById("botaoComprar1").style.display = "none";
  }
//Função botao Comprar 2
  function showButton2() {
    document.getElementById("botaoComprar2").style.display = "block";
  }
  
  function hideButton2() {
    document.getElementById("botaoComprar2").style.display = "none";
  }
  //Função botao Comprar 3
  function showButton3() {
    document.getElementById("botaoComprar3").style.display = "block";
  }
  
  function hideButton3() {
    document.getElementById("botaoComprar3").style.display = "none";
  }
  //Função botao Comprar 4
  function showButton4() {
    document.getElementById("botaoComprar4").style.display = "block";
  }
  
  function hideButton4() {
    document.getElementById("botaoComprar4").style.display = "none";
  }

  // MODAL!

  const showModalButton = document.getElementById('show-modal');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.close-button');
  
  showModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  