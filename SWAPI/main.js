
const buttonPress = document.querySelector('#button');

function pressed () {
    // console.log("The button has been pressed");
   
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then(res => {
            const planet = res.data;
            console.log(planet);
            const val = planet.results.residents
            console.log(val);
            for(let i = 0 ; i < reside.length; i++){
                axios.get(reside[i])
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
        })
        .catch(err => {
           console.log(err)
        });
}

buttonPress.addEventListener('click', pressed);


