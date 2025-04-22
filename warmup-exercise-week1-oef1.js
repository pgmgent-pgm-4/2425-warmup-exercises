/* 
Facebook likes
---------------
Schrijf een functie die een array van namen accepteert als argument. 
De functie moet een string terug geven zoals hieronder beschreven:

[]                                -->  "Niemand vindt dit leuk"
["Peter"]                         -->  "Peter vindt dit leuk"
["Marc", "Alex"]                  -->  "Marc en Alex vinden dit leuk"
["Louise", "Lukas", "Bert"]       -->  "Louise, Lukas en Bert vinden dit leuk"
["Tom", "Sarah", "Marc", "Max"]   -->  "Tom, Sarah en 2 anderen vinden dit leuk"
*/

export function getLikesAsString(array) {
    switch (array.length) {
        case 0:
            return "Niemand vindt dit leuk";
        case 1:
            return `${array[0]} vindt dit leuk`;
        case 2:
            return `${array[0]} en ${array[1]} vinden dit leuk`;
        case 3:
            return `${array[0]}, ${array[1]} en ${array[2]} vinden dit leuk`;
        default:
            return `${array[0]}, ${array[1]} en ${array.length - 2} anderen vinden dit leuk`;
    }
}