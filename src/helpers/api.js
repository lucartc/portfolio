function search_projects(){
    return new Promise((acc,rej) => {
        let data = [{
            title: "Clipit - video clipping web tool",
            description: "Create clips of your favorite videos in any platform(Youtube,Twitch,DailyMotion,etc.). Browser extension made for Chrome.",
            icon: "https://raw.githubusercontent.com/jlucartc/clipit/master/icon.png",
            github_link: "https://github.com/jlucartc/clipit",
            live_link: null,
            playstore_link: null,
            chrome_web_store_link: null,
            tags: ['javascript','extension','html','css']
        }]
        acc(data)
    }).then(data => { console.log('data: ',data); return data })
}

function send_message(){
    console.log('Sending message...')
}

export {
    search_projects,
    send_message
}
