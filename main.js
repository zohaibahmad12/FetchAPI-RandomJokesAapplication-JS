

        let joke = document.getElementById("joke");
        let nextJoke = document.getElementById("nextJoke");

        nextJoke.addEventListener("click",async () => {

            joke.innerHTML = "Loading....";
            let requestHeader = {
                headers: {
                    Accept: "application/json"
                }
            }


           const response=await fetch("https://icanhazdadjoke.com/", requestHeader)

            const data=await response.json();
          
            joke.innerHTML=`${data.joke} &#x1F923; &#x1F923;`         


        })

   