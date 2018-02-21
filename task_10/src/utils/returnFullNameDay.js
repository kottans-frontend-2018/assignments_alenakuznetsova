export default returnFullNameDay;

function returnFullNameDay(shortName) {
    switch(shortName) {
        case 'Mon':  
            return 'Monday';
            break;      
        case 'Tue':
            return 'Tuesday';
            break;
        case 'Wed':
            return 'Wednesday';
            break;
        case 'Thu':
            return 'Thursday';
            break;
        case 'Fri':
            return 'Friday';
            break;
        case 'Sat':
            return 'Saturday';
            break;
        case 'Sun':
            return 'Sunday';
            break;
        default:
            return 'Could not find a week day'
          break;      
    }
}