function kilometerToMeter(kilo){
    if(kilo>0)
    {
        return  kilo * 1000;
    }
    else{
    return "kilo can't be negative";
    }
    
}


// budgetCalculator

function budgetCalculator ( watch , phone , laptop){
    if(watch>=0 && phone>=0 && laptop>=0){
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    var totalPrice = watchTotal + phoneTotal + laptopTotal;
    return totalPrice;
    }
    else{
        return "Amount can't be neagative";
    }
}

// hotelCost

function hotelCost(days){
    var first10Days =0;
    var second10Days = 0;
    var restDays = 0;
    if(days>0){
    for(var i= 1;i<=days; i++){
        if(i<=10){
            first10Days = i*100;
        }
        else if(i<=20){
            for(var j=1;j<=i-10;j++)
            second10Days=j*80;
        }
        else if(i>=21){
            for(var k=1;k<=i-20;k++)
            restDays = k*50;
        }
        
    }
    var totalCost= first10Days + second10Days + restDays;
    return totalCost;
    }
    else{
        return "Staying days can't be negetive or Zero."
    }
}

// megaFriend

function megaFriend(friendList){
    var space= 0;
    var largest;
    for(var i = 0;i<friendList.length;i++){
        if(friendList[i].length>space){
            space = friendList[i].length;
            largest= friendList[i];
        }
    }
    return largest;
}