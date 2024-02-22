// const  SeatsLeft = getConvertedValue("total-seat");
// const seatsCount = getConvertedValue("seat-count");
// const TotalPrice = getConvertedValue("total-Cost");
// const GrandTotal = getConvertedValue("Grand-total");

const allBtn = document.getElementsByClassName("add-btn");


for (const bnt of allBtn) {
    bnt.addEventListener("click", function (event) {
        const name = event.target.childNodes[1].innerText;
        const className = 'economy';
        const price = 550;
        // console.log(typeof price);
        const selectedContainer = document.getElementById("selected-Container");



        event.target.setAttribute("disabled", false);
        event.target.style.background = "#1DD100";
        event.target.style.color = "#fff";




        // seates Count


        const fristSeatsCount = getConvertedValue("seat-count");

        if (fristSeatsCount + 1 > 4) {
            alert("No More Limit ");
            return;
        }




        const seatsLeft = getConvertedValue("total-seat");
        document.getElementById("total-seat").innerText = seatsLeft - 1;
        const seatsCount = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText = seatsCount + 1;




        const li = document.createElement("li");

        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p.innerText = name;
        p2.innerText = className;
        p3.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedContainer.appendChild(li);

        updateTotalPrice(price);
        updateGrandTotal();

    })
}

function updateGrandTotal(status) {
    const totalPrice = getConvertedValue("total-Cost");
    document.getElementById("Grand-total").innerText = totalPrice;
    if (status == undefined) {
        document.getElementById("Grand-total").innerText = totalPrice;
    }
    else {
        const couponCodeInput = document.getElementById("input-field").value;
        if (couponCodeInput == "NEW15") {
            const discounted = totalPrice * 0.15;
            document.getElementById("Grand-total").innerText = totalPrice - discounted;
            const hideCoupon = document.getElementById("coupon-hide");
            hideCoupon.classList.add("hidden");
        }
        if (couponCodeInput == "Couple 20") {
            const discounted = totalPrice * 0.2;
            document.getElementById("Grand-total").innerText = totalPrice - discounted;
            const hideCoupon = document.getElementById("coupon-hide");
            hideCoupon.classList.add("hidden");
        }
        else {
            alert("Please enter valid Code")
        }
    }
}



// // from & from btn

// function checkFrom() {
//     const f = document.forms['theForm'].elements;
//     const fieldsMustBeFilled = true;

//     for (const i = 0; i < f.length; i++) {
//         if (f[i].value.length == 0)
     
//         fieldsMustBeFilled = true;

//     }

// }




function updateTotalPrice(price) {
    const totalPrice = getConvertedValue("total-Cost");
    const sum = totalPrice + parseInt(price);
    document.getElementById("total-Cost").innerText = sum;

}




// coupon Code

// const btn = document.getElementById("Apply-btn");
// btn.addEventListener("click", function () {
//     const couponCode = document.getElementById("input-field").value;
//     const discounted = document.getElementById("Grand-total");

//     if (couponCode == "NEW15") {
//         const discountedAmount = tot * 0.15;
//         discounted.innerText = totalPrice - discountedAmount;
//     }
//     else {
//         alert("Please enter valid Coupon code")
//     }

// })







function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}