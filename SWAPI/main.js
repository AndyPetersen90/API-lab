
const buttonPress = document.querySelector('#button');


function pressed () {
    // console.log("The button has been pressed");
   
    axios.get('https://swapi.dev/api/planets/2')
        .then(res => {
            const planet = res.data;
            const val = planet.residents
            for(let i = 0 ; i < val.length; i++){
                axios.get(val[i])
                    .then(response => {
                        console.log(response)

                        let person = document.createElement('h2')
                        person.textContent = response.data.name

                        document.querySelector('#resident-list').appendChild(person)
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


