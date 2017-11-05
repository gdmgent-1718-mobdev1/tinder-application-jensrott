function App() {
    let _tinderAppStatesService,
        _tinderAppElement,
        _currentTinderAppData;

    function init() {
        console.log('1 Initialize the application');
        console.log('1.1 Create a ParkingStatesService object');
        _tinderAppStatesService = new TinderAppService();
        console.log('1.2 Cache the active DOM-elements');
        _tinderAppElement = document.querySelector('.tinder-container');
        console.log('1.3 Load the parking states via _parkingStatesService object');
        
        loadTinderAppData();
        
    }

    function loadTinderAppData() {
        _tinderAppStatesService.loadTinderApp()
            .then(function(data) {
                console.log('2.1 Save the loaded data in _currentParkingStatesData');
                _currentTinderAppData = data;
                console.log(_currentTinderAppData);
                console.log('2.2 Update parking states user interface');
                console.log(_currentTinderAppData.results[200].login.username); 
                console.log(_currentTinderAppData.results[random].login.username);
                createTinderApp();
                        
            })
            .catch(function(reject) {
                console.log('Something went wrong!');
            });
    }

    // random tussen 1 en 500
    let random = Math.floor((Math.random() * 500) + 1);
    let tempStr = '';
    

    // Wat we kunnen toevoegen als het een vrouw is dan is de achtergrond kleur roze, anders als het een man is blauwachtig
    function createTinderApp() {

            
            let userName = _currentTinderAppData.results[random].login.username;
            let firstName = _currentTinderAppData.results[random].name.first;
            let lastName = _currentTinderAppData.results[random].name.last;
            let image = _currentTinderAppData.results[random].picture.large;
           
            let gender = _currentTinderAppData.results[random].gender;

            console.log(gender);

            let likedPeople = [];
            let dislikedPeople = [];

            let layout;


            checkGender();
            
            function checkGender() {
                
            if (gender === "female") {
                console.log("It's a woman!");
                layout = "female_class";
                
            } else {
                console.log("It's a male!");
                layout = "male_class";
            }  
        }

        
            
            console.log('3.1 We get the data on the screen!');

            tempStr += `
            <div class="container">
                <div class=${ layout }>
                    
                    <div class="text"> 
                        <div id="main_title">Tinder App</div>
                        <div id="username">Username: ${ userName }</div>
                        <img class="card-img-top image" src=${ image }>
                        <div id="firstname">Firstname: ${ firstName }</div>
                        <div id="lastname">Lastname: ${ lastName }</div>

                        <div class="buttons">
                            <button class="like_button">Like</button>
                            <button class="dislike_button">Dislike</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        `;

        

            _tinderAppElement.innerHTML = tempStr;

           /* function addLikeToLocalStorage() {
                console.log("like");
                likedPeople.push(firstName);
    
                console.log(likedPeople);
                return likedPeople;
            }
    
            function addDislikeToLocalStorage() {
                console.log("disliked");
                dislikedPeople.push(firstName);
                console.log(dislikedPeople);
                return dislikedPeople;
            }
    
                let like_button = document.querySelector('#like_button');
                like_button.addEventListener("click", addLikeToLocalStorage, false);
    
                let dislike_button = document.querySelector('#dislike_button');
                dislike_button.addEventListener("click", addDislikeToLocalStorage, false);  */
    
}

   

    return {
        init: init
    }
};

// load event window object
// all resources are loaded
window.addEventListener('load', function(ev) {
    // Make new instance of app
    const app = new App();
    app.init();
});