const init = async () => {
var thisWeek = [];
var today = new Date();
var minus1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
var minus2 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2);
var minus3 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3);
var minus4 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4);
var minus5 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
var minus6 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);
var minus7 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1);
var yy = String(today.getFullYear()).slice(-2);
today = mm + '/' + dd + '/' + yy;
var dd1 = String(minus1.getDate());
var mm1 = String(minus1.getMonth() + 1);
var yy1 = String(minus1.getFullYear()).slice(-2);
minus1 = mm1 + '/' + dd1 + '/' + yy1;
var dd2 = String(minus2.getDate());
var mm2 = String(minus2.getMonth() + 1);
var yy2 = String(minus2.getFullYear()).slice(-2);
minus2 = mm2 + '/' + dd2 + '/' + yy2;
var dd3 = String(minus3.getDate());
var mm3 = String(minus3.getMonth() + 1);
var yy3 = String(minus3.getFullYear()).slice(-2);
minus3 = mm3 + '/' + dd3 + '/' + yy3;
var dd4 = String(minus4.getDate());
var mm4 = String(minus4.getMonth() + 1);
var yy4 = String(minus4.getFullYear()).slice(-2);
minus4 = mm4 + '/' + dd4 + '/' + yy4;
var dd5 = String(minus5.getDate());
var mm5 = String(minus5.getMonth() + 1);
var yy5 = String(minus5.getFullYear()).slice(-2);
minus5 = mm5 + '/' + dd5 + '/' + yy5;
var dd6 = String(minus6.getDate());
var mm6 = String(minus6.getMonth() + 1);
var yy6 = String(minus6.getFullYear()).slice(-2);
minus6 = mm6 + '/' + dd6 + '/' + yy6;
var dd7 = String(minus7.getDate());
var mm7 = String(minus7.getMonth() + 1);
var yy7 = String(minus7.getFullYear()).slice(-2);
minus7 = mm7 + '/' + dd7 + '/' + yy7;
thisWeek = [];
thisWeek.push(minus7, minus6, minus5, minus4, minus3, minus2, minus1, today)
console.log(thisWeek);



var breakfasts = [];
var lunches = [];
var dinners = [];
var snacks = [];

console.log(breakfasts)
console.log(lunches)
console.log(dinners)
console.log(snacks)



  const eatData = await fetch("/api/eating", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
  .then((eatingResponse) => {
    return eatingResponse.json();
      })
      .then((eatData) => {
        console.log(eatData.data)
        // console.log(eatData.data)
        // console.log(eatData);
        // const days = eatData.data.filter((day) => {
          for (let index = 0; index < 7; index++) {
            let element = thisWeek[index];
            let breakfastCheck = false
            let lunchCheck = false
            let dinnerCheck = false
            let snackCheck = false
            console.log(eatData.data.length)
          for (let index2 = 0; index2 < eatData.data.length; index2++) {
            // console.log(eatData.data[index2])
              if (eatData.data[index2] && eatData.data[index2].date == element) {
                if (eatData.data[index2].meal_type == "Breakfast") {
                  breakfasts.push(eatData.data[index2].calories)
                  breakfastCheck = true;
                } else if (eatData.data[index2].meal_type == "Lunch") {
                  lunches.push(eatData.data[index2].calories)
                  lunchCheck = true;
                } else if (eatData.data[index2].meal_type == "Dinner") {
                  dinners.push(eatData.data[index2].calories)
                  dinnerCheck = true;
                } else if (eatData.data[index2].meal_type == "Snack") {
                  snacks.push(eatData.data[index2].calories)
                  snackCheck = true;
                } else {console.log("error, no match found")};
                
              };
            };
                if (breakfastCheck == false) {
                      breakfasts.push(0)
                    };
                    if (lunchCheck == false) {
                      lunches.push(0)
                    };
                    if (dinnerCheck == false) {
                      dinners.push(0)
                    };
                    if (snackCheck == false) {
                      snacks.push(0)
                    };
          
            
        
        };
      });
      console.log(breakfasts)
            console.log(lunches)
            console.log(dinners)
            console.log(snacks)
  

            // const element = thisWeek[index];
            // let breakfastCheck = false
            // let lunchCheck = false
            // let dinnerCheck = false
            // let snackCheck = false

            //   if (day.date === element) {
            //     if (day.meal_type === "Breakfast") {
            //       breakfasts.push(day.calories)
            //       breakfastCheck = true
            //     } 
            //     if (day.meal_type === "Lunch") {
            //       lunches.push(day.calories)
            //       lunchCheck = true
            //     }
            //     if (day.meal_type === "Dinner") {
            //       dinners.push(day.calories)
            //       dinnerCheck = true
            //     }
            //     if (day.meal_type === "Snack") {
            //       snacks.push(day.calories)
            //       snackCheck = true
            //     }
            //   }
            //   if (breakfastCheck = false) {
            //     breakfasts.push(0)
            //   }
            //   if (lunchCheck = false) {
            //     lunches.push(0)
            //   }
            //   if (breakfastCheck = false) {
            //     breakfasts.push(0)
            //   }
            //   if (snackCheck = false) {
            //     snacks.push(0)
            //   }
            // };
            
            
          



       


  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: thisWeek,
      datasets: [
        {
          data: breakfasts,
          label: "Breakfast",
          backgroundColor: "#3e95cd",
        },
        {
          data: lunches,
          label: "Lunch",
          backgroundColor: "#8e5ea2",
        },
        {
          data: dinners,
          label: "Dinner",
          backgroundColor: "#8e5ea2",
        },
        {
          data: snacks,
          label: "Snack",
          backgroundColor: "#8e5ea2",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Calories per Meal",
      },
    },
  });
  // console.log(`Eating Data:`);
  //   console.log(eatData.data);
  //   for (let index = 0; index < eatData.data.length; index++) {
  //     let foodDate = eatData.data[index].date;
  //     let foodName = eatData.data[index].food_name;
  //     eatIndex = eatIndex + foodDate + `: ` + foodName + `<br>`;
  //   }
  //   document.getElementById("eatingData").innerHTML = eatIndex;



    // console.log(`Eating Data:`);
    // console.log(eatData.data);
    // for (let index = 0; index < eatData.data.length; index++) {
    //   let foodDate = eatData.data[index].date;
    //   let foodName = eatData.data[index].food_name;
    //   eatIndex = eatIndex + foodDate + `: ` + foodName + `<br>`;
    // }
    // document.getElementById("eatingData").innerHTML = eatIndex;


  



  //second API call
    // const calories1 = [];
    // fetch("/api/eating", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((eatingRequest2) => {
    //     return eatingRequest2.json();
    //   })
    //   .then((eatData) => {
    //     const day1 = eatData.data.filter((day) => {
    //       return day.date === "3/27/21";
    //     });
    //     console.log("day1: ", day1);
    //     day1.forEach((element) => {
    //       calories1.push(element.calories);
    //     });
    //     console.log("calories: ", calories1);

    //     var eatIndex2 = ["Breakfast", "Lunch", "Dinner"];
        // var foodDate2 = [];
        // var foodName2 = [
        //   "Grand Slam",
        //   "PopEyes chicken sandwhich",
        //   "20oz Ribeye steak",
        //   "Veggie omellete",
        //   "Tuna sandwhich",
        //   "Pasta with meatballs",
        // ];
        // var date1 = [1500, 2000, 2500];
        // var date2 = [400, 450, 700];
        // eatingRequest2.json().then((eatData) => {
        //   for (let index = 0; index < eatData.data.length; index++) {
        //     let foodDateE = eatData.data[index].date;
        //     foodName2 = eatData.data[index].food_name;
        //     let foodCaloriesE = eatData.data[index].calories;
        //     eatIndex2.push(foodDateE);
        //     foodCalories2.push(foodCaloriesE);
        //     console.log("foodCalories2", foodCalories2);
        //     console.log("eatindex2", eatIndex2);
        //   }

        //document.getElementById("eatingData").innerHTML = eatIndex2;
        // Chart section - need to add correct data
        // });
  //       var ctx = document.getElementById("myChart");
  //       var myChart = new Chart(ctx, {
  //         type: "bar",
  //         data: {
  //           labels: eatIndex2,
  //           datasets: [
  //             {
  //               data: calories1,
  //               label: "3/27/21",
  //               backgroundColor: "#3e95cd",
  //             },
  //             {
  //               data: date2,
  //               label: "3/26/21",
  //               backgroundColor: "#8e5ea2",
  //             },
  //           ],
  //         },
  //         options: {
  //           title: {
  //             display: true,
  //             text: "Calories per Meal",
  //           },
  //         },
  //       });
  //     });
  // };

  const sleepingRequest = await fetch("/api/sleeping", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  var sleepIndex = "";
  sleepingRequest.json().then((newSleep) => {
    console.log(newSleep.data);
    for (let index = 0; index < newSleep.data.length; index++) {
      let sleepDate = newSleep.data[index].date;
      let sleepTime = newSleep.data[index].hours;
      sleepIndex = sleepIndex + sleepDate + `: ` + sleepTime + `<br>`;
      console.log(sleepIndex);
    };
    document.getElementById("sleepingData").innerHTML = sleepIndex;
  });

  const spendingRequest = await fetch("/api/spending", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  var spendIndex = "";
  spendingRequest.json().then((newSpend) => {
    console.log(newSpend.data);
    for (let index = 0; index < newSpend.data.length; index++) {
      let spendDate = newSpend.data[index].date;
      let spendAmount = newSpend.data[index].restaurantSpent;
      spendIndex = spendIndex + spendDate + `: ` + spendAmount + `<br>`;
      console.log(spendIndex);
    };
    document.getElementById("spendingData").innerHTML = spendIndex;
  });
};


init();
