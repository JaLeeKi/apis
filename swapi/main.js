const getResidents = document.querySelector('#getResidents');
const createHeader = document.createElement("H2");

function clickButton() {
    console.log('button clicked')
    axios
        .get('https://swapi.dev/api/planets/?search=alderaan')
        .then(function (res) {
            // const alderaan = results[0];

            console.log(res.data.alderaan)})
            // for (let i = 0; i < alderaan.residents.length; i++) {
            //     axios
            //         .get(alderaan.residents[i])
            //         .then(function () {
            //             createHeader.appendChild(`${alderaan.residents[i].name}`)
            //         })
        .catch(function(err) {console.log(err)})
};

getResidents.addEventListener('click', clickButton);