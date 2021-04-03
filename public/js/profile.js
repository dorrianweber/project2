const init = async () => {
  const eatingRequest = await fetch("/api/eating", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  var eatIndex = "";
  eatingRequest.json().then((newEat) => {
    console.log(`Eating Data:`);
    console.log(newEat.data);
    for (let index = 0; index < newEat.data.length; index++) {
      let foodDate = newEat.data[index].date;
      let foodName = newEat.data[index].food_name;
      eatIndex = eatIndex + foodDate + `: ` + foodName + `<br>`;
    }
    document.getElementById("eatingData").innerHTML = eatIndex;
    two();
  });

  //second API call
  const two = () => {
    const calories1 = [];
    fetch("/api/eating", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((eatingRequest2) => {
        return eatingRequest2.json();
      })
      .then((newEat) => {
        const day1 = newEat.data.filter((day) => {
          return day.date === "3/27/21";
        });
        console.log("day1: ", day1);
        day1.forEach((element) => {
          calories1.push(element.calories);
        });
        console.log("calories: ", calories1);

        var eatIndex2 = ["Breakfast", "Lunch", "Dinner"];
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
                data: calories1,
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
