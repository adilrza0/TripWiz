export const calculateDaysNights=(checkin, checkout)=> {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    
      const checkinMonth = monthNames.indexOf(checkin.month);
      const checkoutMonth = monthNames.indexOf(checkout.month);
    
      if (checkinMonth === -1 || checkoutMonth === -1) {
        return null; // Invalid month name
      }
    
      const checkinDate = new Date(
        checkin.year,
        checkinMonth, // Use the numerical value of the month
        checkin.day
      );
      const checkoutDate = new Date(
        checkout.year,
        checkoutMonth, // Use the numerical value of the month
        checkout.day
      );
    
      if (isNaN(checkinDate.getTime()) || isNaN(checkoutDate.getTime())) {
        return null; // Invalid date format
      }
    
      const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const nights = daysDifference - 1; // Assuming the check-in day doesn't count as a night
    
      return {
        days: daysDifference,
        nights: nights
      };
  }