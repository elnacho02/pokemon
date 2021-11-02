function setColor(type){
    switch (type) {
        case 'water':
            return ["rgb(0, 204, 255)","rgb(0, 102, 204)","white"] 

        case 'fire':
            return ["rgb(255, 153, 51)","rgb(255, 0, 0) ","white"]

        case 'steel':
            return ["white","rgb(92, 138, 138)", "black"]

        case 'grass':
            return ["rgb(51, 204, 51)","rgb(0, 102, 0)", "white"]
        
        case 'poison':
            return ["rgb(204, 0, 255)","rgb(153, 0, 255)", "white"]

        case 'bug':
                return["rgb(102, 102, 51)","rgb(102, 153, 0)", "white"]

                
        case 'fairy':
                return["rgb(255, 204, 255)","rgb(255, 102, 204)", "black"]

        
        case 'normal':
                return["white","rgb(204, 204, 204)", "black"]  

        case 'ground':
                return["rgb(153, 102, 51)","rgb(102, 51, 0)", "white"]
        case 'electric':
             return ["rgb(255, 255, 102)","rgb(230, 230, 25)","black"]  
         
        case 'dark':
            return ["rgb(77, 0, 153)","rgb(0, 0, 0)","white"]  
               
        case 'flying':
            return ["rgb(179, 236, 255)","rgb(0, 115, 153)","black"]
        
        case 'dragon':
            return ["rgb(102, 102, 255)","rgb(0, 41, 102)","white"]
        
        case 'fighting':
            return["rgb(230, 92, 0)","rgb(204, 41, 0)","white"]
        
        case 'ghost':
            return["rgb(0, 0, 0)","rgb(89, 89, 89)","white"]

        case 'ice':
            return ["rgb(179, 255, 255)","rgb(173, 235, 235)","black"]

        case 'psychic':
            return["rgb(255, 0, 102)","rgb(230, 0, 76)","white"]

        case 'rock':
            return["rgb(128, 128, 128)","rgb(77, 77, 77)","white"]
        
        default:
            break;
    }
}


function ordenar(array,key){
    
    if(key === "a-z") return array.sort((a,b)=> (a.name.toLowerCase() > b.name.toLowerCase()) ? 1:-1)
    if(key === "z-a") return array.sort((a,b)=> (a.name.toLowerCase() < b.name.toLowerCase()) ? 1:-1)
    if(key === "higher-str") return array.sort((a,b)=> (a.fuerza < b.fuerza) ? 1:-1)
    if(key === "lower-str") return array.sort((a,b)=> (a.fuerza > b.fuerza) ? 1:-1)
}

module.exports = {
    setColor,
    ordenar
}