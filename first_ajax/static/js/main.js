document.addEventListener("DOMContentLoaded", function() {
  const getAjax = document.getElementById("ajax");

  getAjax.addEventListener("click", () => {
    console.log("CLICKED THE BUTTON");

    axios.get("http://intro-ajax-api.herokuapp.com/").then(response => {
      console.log("hi");
    });

    const getPing = document.getElementById("ping");

    getPing.addEventListener("click", () => {
      console.log("Clicked Yo");

      axios
        .get("http://intro-ajax-api.herokuapp.com/ping ")

        .then(response => {
          console.log("hello");
          console.log(response.data);

          const dataElem = document.createElement("section");
          dataElem.innerHTML = response.data;
          document.body.appendChild(dataElem);
        })

        .catch(error => {
          console.log(error.response.data);
          const dataError = document.createElement("section");
          dataError.innerHTML = "Sorry I try harder next time";
          document.body.appendChild(dataError);
        })

        .then(response => {
          console.log("Hey the request finished!", response);
        });
    });

    const count = document.getElementById("count");

    count.addEventListener("click", () => {
      console.log("Clicked Yo");

      axios
        .get("http://intro-ajax-api.herokuapp.com/count")

        .then(response => {
          console.log("NBA Champ!");
          console.log(response.data);

          const countNum = document.createElement("section");
          countNum.innerHTML = response.data;
          document.body.appendChild(countNum);
        });
    });
  });

    const time = document.getElementById("time");

    time.addEventListener("click", () => {
        console.log('Got Click?');
        
    axios
        .get("http://intro-ajax-api.herokuapp.com/time", {
            params:{
                timezone: "America/Mexico_City"
            }
        })

        .then(response => {
            console.log(response.data);

        const timeData = document.createElement("section");
        timeData.innerHTML = response.data;
        document.body.appendChild(timeData);
            
        })
    })

    const cars = document.getElementById("car");

    cars.addEventListener("click", () => {
        console.log('Word Up');
    
        axios
        .get("http://intro-ajax-api.herokuapp.com/a_car")
        .then(response => {
            console.log(response.data);

            const carGarage = document.createElement("section");
            document.body.appendChild(carGarage);    


            const carData = document.createElement("UL");
            carData.setAttribute("id", "myUL");
            carData.innerHTML = response.data;

            carGarage.appendChild(carData);    

        })
    })

});


