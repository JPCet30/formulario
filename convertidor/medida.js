const valorConvertir = document.getElementById('valorConvertir');
const medidaConvertir = document.getElementById('medidaConvertir');

const valorConvertido = document.getElementById('valorConvertido');
const medidaConvertida = document.getElementById('medidaConvertida');

valorConvertir.addEventListener('change', convertir);
medidaConvertir.addEventListener('change', convertir);
medidaConvertida.addEventListener('change', convertir);

function convertir(){
    switch(medidaConvertir.value){
        case 'mm':
            if(medidaConvertida.value == 'cm'){valorConvertido.value = valorConvertir.value/10;}
            else if(medidaConvertida.value == 'dm'){valorConvertido.value = valorConvertir.value/100;}
            else if(medidaConvertida.value == 'm'){valorConvertido.value = valorConvertir.value/1000;}
            else if(medidaConvertida.value == 'dam'){valorConvertido.value = valorConvertir.value/10000;}
            else if(medidaConvertida.value == 'hm'){valorConvertido.value = valorConvertir.value/100000;}
            else if(medidaConvertida.value == 'km'){valorConvertido.value = valorConvertir.value/1000000;}
            else{valorConvertido.value = valorConvertir.value}
            break;
        case 'cm':
            if(medidaConvertida.value == 'mm'){valorConvertido.value = valorConvertir.value*10;}
            else if(medidaConvertida.value == 'dm'){valorConvertido.value = valorConvertir.value/10;}
            else if(medidaConvertida.value == 'm'){valorConvertido.value = valorConvertir.value/100;}
            else if(medidaConvertida.value == 'dam'){valorConvertido.value = valorConvertir.value/1000;}
            else if(medidaConvertida.value == 'hm'){valorConvertido.value = valorConvertir.value/10000;}
            else if(medidaConvertida.value == 'km'){valorConvertido.value = valorConvertir.value/100000;}
            else{valorConvertido.value = valorConvertir.value}
            break;
        case 'dm':
            if(medidaConvertida.value == 'mm'){valorConvertido.value = valorConvertir.value*100;}
            else if(medidaConvertida.value == 'cm'){valorConvertido.value = valorConvertir.value*10;}
            else if(medidaConvertida.value == 'm'){valorConvertido.value = valorConvertir.value/10;}
            else if(medidaConvertida.value == 'dam'){valorConvertido.value = valorConvertir.value/100;}
            else if(medidaConvertida.value == 'hm'){valorConvertido.value = valorConvertir.value/1000;}
            else if(medidaConvertida.value == 'km'){valorConvertido.value = valorConvertir.value/10000;}
            else{valorConvertido.value = valorConvertir.value}
            break;
        case 'm': 
            if(medidaConvertida.value == 'mm'){valorConvertido.value = valorConvertir.value*1000;}
            else if(medidaConvertida.value == 'cm'){valorConvertido.value = valorConvertir.value*100;}
            else if(medidaConvertida.value == 'dm'){valorConvertido.value = valorConvertir.value*10;}
            else if(medidaConvertida.value == 'dam'){valorConvertido.value = valorConvertir.value/10;}
            else if(medidaConvertida.value == 'hm'){valorConvertido.value = valorConvertir.value/100;}
            else if(medidaConvertida.value == 'km'){valorConvertido.value = valorConvertir.value/1000;}
            else{valorConvertido.value = valorConvertir.value}
            break;
        case 'dam':
            if(medidaConvertida.value == 'mm'){valorConvertido.value = valorConvertir.value*10000;}
            else if(medidaConvertida.value == 'cm'){valorConvertido.value = valorConvertir.value*1000;}
            else if(medidaConvertida.value == 'dm'){valorConvertido.value = valorConvertir.value*100;}
            else if(medidaConvertida.value == 'm'){valorConvertido.value = valorConvertir.value*10;}
            else if(medidaConvertida.value == 'hm'){valorConvertido.value = valorConvertir.value/10;}
            else if(medidaConvertida.value == 'km'){valorConvertido.value = valorConvertir.value/100;}
            else{valorConvertido.value = valorConvertir.value}
            break;
        case 'hm':
            if(medidaConvertida.value == 'mm'){valorConvertido.value = valorConvertir.value*100000;}
            else if(medidaConvertida.value == 'cm'){valorConvertido.value = valorConvertir.value*10000;}
            else if(medidaConvertida.value == 'dm'){valorConvertido.value = valorConvertir.value*1000;}
            else if(medidaConvertida.value == 'm'){valorConvertido.value = valorConvertir.value*100;}
            else if(medidaConvertida.value == 'dam'){valorConvertido.value = valorConvertir.value*10;}
            else if(medidaConvertida.value == 'km'){valorConvertido.value = valorConvertir.value/10;}
            else{valorConvertido.value = valorConvertir.value}
            break;
        case 'km':   
            if(medidaConvertida.value == 'mm'){valorConvertido.value = valorConvertir.value*1000000;}
            else if(medidaConvertida.value == 'cm'){valorConvertido.value = valorConvertir.value*100000;}
            else if(medidaConvertida.value == 'dm'){valorConvertido.value = valorConvertir.value*10000;}
            else if(medidaConvertida.value == 'm'){valorConvertido.value = valorConvertir.value*1000;}
            else if(medidaConvertida.value == 'dam'){valorConvertido.value = valorConvertir.value*100;}
            else if(medidaConvertida.value == 'hm'){valorConvertido.value = valorConvertir.value*10;}
            else{valorConvertido.value = valorConvertir.value}
            break;
    }
}
