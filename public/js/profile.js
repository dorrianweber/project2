const init = async () => {

  const eatingRequest = await fetch('/api/eating', {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    },
  },
  );
  var eatIndex = ""
    eatingRequest.json().then((newEat) => {
      for (let index = 0; index < newEat.data.length; index++) {
        let foodDate = newEat.data[index].date;
        let foodName = newEat.data[index].food_name;
        eatIndex = (eatIndex) + (foodDate) + `: ` + (foodName) + `<br>`
        console.log(eatIndex)
      }
      document.getElementById('eatingData').innerHTML = eatIndex; 
    });

    const sleepingRequest = await fetch('/api/sleeping', {
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      },
    },
    );
    var sleepIndex = ""
    sleepingRequest.json().then((newSleep) => {
      console.log(newSleep.data)
      for (let index = 0; index < newSleep.data.length; index++) {
        let sleepDate = newSleep.data[index].date;
        let sleepTime = newSleep.data[index].hours;
        sleepIndex = (sleepIndex) + (sleepDate) + `: ` + (sleepTime) + `<br>`
        console.log(sleepIndex)
      }
      document.getElementById('sleepingData').innerHTML = sleepIndex; 
    });

    const spendingRequest = await fetch('/api/spending', {
      method: 'GET',
      headers: {
         "Content-type": "application/json"
      },
      },
      );
      var spendIndex = ""
     spendingRequest.json().then((newSpend) => {
       console.log(newSpend.data)
      for (let index = 0; index < newSpend.data.length; index++) {
        let spendDate = newSpend.data[index].date;
        let spendAmount = newSpend.data[index].restaurantSpent;
        spendIndex = (spendIndex) + (spendDate) + `: ` + (spendAmount) + `<br>`
        console.log(spendIndex)
      }
          document.getElementById('spendingData').innerHTML = spendIndex; 
        });
};

init();