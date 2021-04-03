const init = async () => {
  const eatingRequest = await fetch("/api/eating", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  var eatIndex = "";
  eatingRequest.json().then((newEat) => {
    for (let index = 0; index < newEat.data.length; index++) {
      let foodDate = newEat.data[index].date;
      let foodName = newEat.data[index].food_name;
      let foodCalories = newEat.data[index].calories;
      eatIndex =
        eatIndex +
        foodDate +
        `: ` +
        foodName +
        ` ` +
        foodCalories +
        `  ` +
        `<br>`;
      console.log(eatIndex);
    }
    document.getElementById("eatingData").innerHTML = eatIndex;
    two();
  });

  //second API call
  const two = async () => {
    const eatingRequest2 = await fetch("/api/eating", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    var eatIndex2 = ["Breakfast", "Lunch", "Dinner"];
    var foodDate2 = [];
    var foodName2 = [
      "Grand Slam",
      "PopEyes chicken sandwhich",
      "20oz Ribeye steak",
      "Veggie omellete",
      "Tuna sandwhich",
      "Pasta with meatballs",
    ];
    var date1 = [1500, 2000, 2500];
    var date2 = [400, 450, 700];
    // eatingRequest2.json().then((newEat) => {
    //   for (let index = 0; index < newEat.data.length; index++) {
    //     let foodDateE = newEat.data[index].date;
    //     foodName2 = newEat.data[index].food_name;
    //     let foodCaloriesE = newEat.data[index].calories;
    //     eatIndex2.push(foodDateE);
    //     foodCalories2.push(foodCaloriesE);
    //     console.log("foodCalories2", foodCalories2);
    //     console.log("eatindex2", eatIndex2);
    //   }

    //document.getElementById("eatingData").innerHTML = eatIndex2;
    // Chart section - need to add correct data
    // });
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: eatIndex2,
        datasets: [
          {
            data: date1,
            label: "3/27/21",
            backgroundColor: "#3e95cd",
          },
          {
            data: date2,
            label: "3/26/21",
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
  };

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
    }
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
    }
    document.getElementById("spendingData").innerHTML = spendIndex;
  });
};

init();
