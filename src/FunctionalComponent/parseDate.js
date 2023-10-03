export const parseDateTime=(dateTimeString)=> {
    const dateTime = new Date(dateTimeString);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    
    if (isNaN(dateTime.getTime())) {
      // Invalid date string
      return null;
    }
    
    const day = dateTime.getDate();
    const month = monthNames[dateTime.getMonth()];
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    
    return {
      day,
      month,
      year,
      time: `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
    };
  }