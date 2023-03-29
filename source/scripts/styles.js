const jaro = document.getElementById('imagenJaro');
const torre = document.getElementById('imagenTorre');
const biblioteca = document.getElementById('biblioteca');
const ponte = document.getElementById('ponte');

function imagenJaro() { 
    if (jaro.classList.contains('planta')) {
      jaro.classList.replace('planta', 'tower');
    } else {
      jaro.classList.replace('tower', 'planta');
    }
  };
  
  function torrer(){
    
    if( torre.className === 'torre'){
    torre.className = 'torre-segunda';
    }else{
            torre.className = 'torre';

        }

 };

function Lib(){
    if( biblioteca.className === 'biblioteca'){
        biblioteca.className = 'imagenNext';

    }else{
        biblioteca.className = 'biblioteca';
    }
};
function Ponte(){
    if(ponte.className === 'ponte'){
        ponte.className = 'imagenNextTwo';
    }else{
        ponte.className = 'ponte';
    }
}