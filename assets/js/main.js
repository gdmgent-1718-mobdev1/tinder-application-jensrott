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
                // Het object
                console.log(_currentTinderAppData);
                console.log('2.2 Update parking states user interface');
                console.log(_currentTinderAppData.results[200].login.username); 
                console.log(_currentTinderAppData.results[200].login.username);
                updateTinderAppUI();
                addToLocalStorage();
            
            })
            .catch(function(reject) {
                console.log('Something went wrong!');
            });
    }

    let tempStr = '';

    function updateTinderAppUI() {
       
            
            console.log('3.1 We get the data on the screen!');

            tempStr += `
            <div class="container" style="font-size: 50px;">
                <h1>Tinder App</h1>
                <img class="image_circle" src=${_currentTinderAppData.results[200].picture.medium}>
                <div class="card>

                    <div class="card-block">
                        
                        <div class='display-4 firstname'>Firstname: <bold>${_currentTinderAppData.results[200].name.first}</bold></div>
                        <div class='display-4 lastname'>Lastname: ${_currentTinderAppData.results[200].name.last}</div>
                        <div class='display-4 username'>Username: ${_currentTinderAppData.results[200].login.username}</div>
                        
                        <div class="button-box col-lg-12">
                            <i class="material-icons like_button">favorite</i>
                            <i class="material-icons next_button">highlight_off</i>
                        </div>
                    </div>
                </div>
            </div>
        `;

            _tinderAppElement.innerHTML = tempStr;
        
    }


    return {
        init: init
    }

    // Nog niet juist
    let like_button = document.querySelector('.like_button');

    function addToLocalStorage() {
        
    }

    like_button.addEventListener("click", reloadPage, false);


};

// load event window object
// all resources are loaded
window.addEventListener('load', function(ev) {
    // Make new instance of app
    const app = new App();
    app.init();
});