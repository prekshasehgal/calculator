    
    const keyboard =  (event) => {
    const key = event.key;
  

    if (key >= '0' && key <= '9') {
      display.value += key;
    }
  

  if (key === '+' || key === '-' || key === '*' || key === '/') {

    
    if (['+', '-', '*', '/'].includes(display.value.slice(-1))) {

      display.value = display.value.slice(0, -1);
    }
    
    display.value += key;
  }
  
    if (key === 'Escape') {
        display.value = '';
      }
  
  
    if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    }

    if (key === 'Enter') {
      
        try {
        display.value = eval(display.value);
      } 

      catch (error) {
        display.value = 'Error';
      }
    }
  };

  document.addEventListener('keydown', keyboard)