async function logIn(userId) {
    indigitall.logIn(userId, (device)=>{
        console.log('User logged in succesfully with device: ');
        console.log(device);
    }, (error)=>{
       console.log(error)
    });
}

async function logOut() {
    // NOTE: The documentation says that this function is called "logOut" but the implemented function is called "logout", with lowercase "O"
    indigitall.logout((device)=>{
        console.log('User logged out succesfully with device: ');
        console.log(device);
     }, (error)=>{
        console.log(error)
     });
}


async function sendCustomEvent(event) {
    indigitall.sendCustomEvent({
        eventType: event,
        customData: {},
        async: false,
    }, (response) => {
        console.log('Custom Event Response: ')
        console.log(response)   
    },(error)=>{
        console.log('Custom Event Error: ')
        console.log(error)   
    });  
}

async function subscribeToTopics(topicCodes) {        
    indigitall.topicsSubscribe(topicCodes, (topics) => {
        console.log(topics);
    }, (error) => {
        console.error(error);
    });
}

async function unsubscribeFromTopics(topicCodes) {
    indigitall.topicsUnsubscribe(topicCodes, (topics) => {
        console.log(topics);
    }, (error) => {
        console.error(error);
    });
}