function TinderAppService() {
    const URL = 'https://api.randomuser.me/?results=500'; 
   

    function loadTinderApp() {
        return AJAX.loadJsonByPromise(URL);
    }

    return {
        loadTinderApp: loadTinderApp
    }
};