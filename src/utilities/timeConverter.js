
export default function timeConverter (time) {
    const rawDate= new Date(time * 1000) ;
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = `${month[rawDate.getMonth()]} ${rawDate.getDate()}, ${rawDate.getFullYear()}  `; 

    return date
}