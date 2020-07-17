const PriceStudioMayOrOctober = 50;
const PriceStudioJuneOrSeptember = 75.20;
const PriceStudioJulyOrAugust = 76;
const PriceApartmentMayOrOctober = 65;
const PriceApartmentJuneOrSeptember = 68.70;
const PriceApartmentJulyOrAugust = 77;

function payCheck(month, countOverNights) {
    countOverNights = Number(countOverNights);
    let totalSumForStudio = 0;
    let totalSumForApartment = 0;

    if (month == "May" || month == "October") {
        totalSumForStudio = countOverNights * 50;
        totalSumForApartment = countOverNights * 65;

        if (countOverNights > 14) {
            totalSumForStudio *= 0.70;
            totalSumForApartment *= 0.90;

        }
        else if(countOverNights > 7){
            totalSumForStudio *= 0.95;

        }

    }
    else if(month == "June" || month == "September"){
        totalSumForStudio = countOverNights * 75.20;
        totalSumForApartment = countOverNights * 68.70;

        if(countOverNights > 14){
            totalSumForStudio *= 0.80;
            totalSumForApartment *= 0.90;
        }

    }
    else if(month == "July" || month == "August"){
        totalSumForStudio = countOverNights * 76;
        totalSumForApartment = countOverNights * 77;

        if(countOverNights > 14){
            totalSumForApartment *= 0.90;
        }

    }

    console.log(`Apartment: ${totalSumForApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalSumForStudio.toFixed(2)} lv.`)
    
}

payCheck("August", 20)