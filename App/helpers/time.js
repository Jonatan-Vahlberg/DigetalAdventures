/**
 * LIBRARY HELPER FUNCTIONS TIME
 * This is a library containging helper functions
 * dealing with time and date manipulations
 */

//HELPER FUNCTION - Breakout time from a ISO date string
export const breakoutTime = (ISODateString = '') => {
    return ISODateString.substr(ISODateString.lastIndexOf('T') + 1, 5);
};

//HELPER FUNCTION - Break out the date of a ISO date string
export const breakoutDate = (
    ISODateString = '',
    startIndex = 0,
    length = 10
) => {
    return ISODateString.substr(startIndex, length);
};

//HELPER FUNCTION - if card is today +- a weight
export const isToday = (dateString = '', weight = 0) => {
    const date = new Date(dateString);
    const today = new Date();
    return (
        date.getDate() === today.getDate() + weight &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() == today.getFullYear()
    );
};
//HELPER FUNCTION - if card is a future card
export const isFutureDate = (timeStamp = '', weight = 1) => {
    let date = new Date(timeStamp);
    let comingDate = new Date();
    comingDate.setDate(comingDate.getDate() + weight);

    return date > comingDate;
};
//HELPER FUNCTION - unsure of usage
export const reformTime = (hour = '') => {
    switch (hour) {
        case '13':
            return '13';
        case '14':
            return '14';
        case '15':
            return '15';
        case '16':
            return '16';
        case '17':
            return '17';
        case '18':
            return '18';
        case '19':
            return '19';
        case '20':
            return '20';
        case '21':
            return '21';
        case '22':
            return '22';
        case '23':
            return '15';
        default:
            return hour;
    }
};

//HELPER FUNCTION - Get the local timecode in AM:PM standard
export const getTimeCode = hour => {
    if (Number(hour) < 13) {
        return 'am';
    } else {
        return 'pm';
    }
};
//HELPER FUNCTION - Get the local timecode in AM:PM standard
export const getTimeCodeFromISO = timeStamp => {
    const hour = timeStamp.substr(timeStamp.lastIndexOf('T') + 1, 2);
    if (Number(hour) < 13) {
        return 'am';
    } else {
        return 'pm';
    }
};

//HELPER FUNCTION - Create a date string from date
export const createDateFrom = (date = new Date()) => {
    let dateString = '';
    dateString += `${getMonthFrom(date.getMonth().toString())} `;
    dateString += `${zerofy(date.getDate().toString(), 9)}, `;
    dateString += `${date.getFullYear().toString()}`;
    return dateString;
};

//HELPER FUNCTION - Create a time string from time
export const createTimeFrom = (time = new Date()) => {
    let timeString = '';
    timeString += `${zerofy(time.getHours().toString(), 9)}:`;
    timeString += `${zerofy(time.getMinutes().toString(), 9)}`;

    return timeString;
};

//HELPER FUNCTION - get month from month variable
export const getMonthFrom = (month = '1') => {
    switch (month) {
        case '0':
            return 'Jan';
        case '1':
            return 'Feb';
        case '2':
            return 'Mar';
        case '3':
            return 'Apr';
        case '4':
            return 'May';
        case '5':
            return 'Jun';
        case '6':
            return 'Jul';
        case '7':
            return 'Aug';
        case '8':
            return 'Sep';
        case '9':
            return 'Oct';
        case '10':
            return 'Nov';
        case '11':
            return 'Dec';
    }
};

//HELPER FUNCTION - what diffrence in hours exsists between dates
export const differenceInHoursBetweenDates = (
    startTime,
    endTime = new Date().toISOString()
) => {
    return (
        Math.abs(new Date(endTime).getTime() - new Date(startTime).getTime()) /
        36e5
    );
};

//HELPER FUNCTION - generate a 0 index clock aka 08,09,10 instead of 8,9,10
export const zerofy = (dateVaraible = '1', highestValue) => {
    return Number(dateVaraible) <= highestValue
        ? `0${dateVaraible}`
        : dateVaraible;
};

export const dateHasPassed = (dateString = '') => {
    return new Date(dateString) < new Date();
};
