document.addEventListener('DOMContentLoaded', function () {
    // Initialize Sortable for the movie wrapper
    const movieWrapper = document.querySelector('.grid-wrapper');
    new Sortable(movieWrapper, {
        group: {
            name: 'movie-list',
            // pull:'clone', //კლონირების საშუალება
            //put:false //უკან ვეღარ დავაბრუნებთ ელემენტს
        },
        animation: 150,
        onStart(evt) {
            console.log('Sorting started:', evt);
        },
        onAdd: function (evt) {
            const tierId = evt.from.id; // Get the source tier ID
            const movieIndex = evt.newIndex; //element's id in array
            console.log("საიდან წამოვიღე");
            console.log(`Dropped movie to Tier ${tierId}`);
            console.log("რომელ პოზიციაზე ჩავაგდე");
            console.log('Movie index:', movieIndex);
        },
        onEnd(evt) {
            console.log('Sorting ended:', evt);
        },
        // swap:true, //საშუალებას გვაძლევს ადგილები გავუცვალოთ ელემენტებს
        // swapClass:"highlight", //საშუალებას გვაძლევს დავინახოდ უშუალოდ რომელ ელემენტს გაუცვლის ადგილს ჩვენი ელემენტი
        // ghostClass:"ghost" // საშუალებას გვაძლევს ვხედავდეთ არჩეულ ელემენტს სანამ არ დავამთავრებთ drag & drop -ს
    });

    //S tier
    const tier1 = document.getElementById("1");
    console.log(tier1);

    new Sortable(tier1,{
        group:{
            name:'movie-list'
        },
        animation:150,
    });

    //A tier
    const tier2 = document.getElementById("2");
    console.log(tier2);

    new Sortable(tier2,{
        group:{
            name:'movie-list'
        },
        animation:150,
    });
    //B tier 
    const tier3 = document.getElementById("3");
    console.log(tier3);

    new Sortable(tier3,{
        group:{
            name:'movie-list'
        },
        animation:150,
    });
    //C tier
    const tier4 = document.getElementById("4");
    console.log(tier4);

    new Sortable(tier4,{
        group:{
            name:'movie-list'
        },
        animation:150,
    });
    //D tier
    const tier5 = document.getElementById("5");
    console.log(tier5);

    new Sortable(tier5,{
        group:{
            name:'movie-list'
        },
        animation:150,
    });
});

// function ;
// array[]
// object)
