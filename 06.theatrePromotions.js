function theatrePromotions(day,age){
    let ticketPrice = 0;
    if (age <= 18 & age >= 0){
        if(day == 'Weekday'){
            ticketPrice = '12$';
        }
        else if (day == 'Weekend'){
            ticketPrice = '15$';
        }
        else{
            ticketPrice = '5$';
        }
    }
    else if (age <= 64 & !(age <= 0)){
        if(day == 'Weekday'){
            ticketPrice = '18$';
        }
        else if ( day == 'Weekend'){
            ticketPrice = '20$';
        }
        else{
            ticketPrice = '12$';
        }
    }
    else if(age <= 122 & !(age <= 0)) {
        if(day == 'Weekday'){
            ticketPrice = '12$'
        }
        else if (day == 'Weekend'){
            ticketPrice = '15$';
        }
        else {
            ticketPrice = '10$'
        }
    }
    else{
        ticketPrice = 'Error!';
    }
    console.log(ticketPrice);
}
theatrePromotions('Weekend',-12);