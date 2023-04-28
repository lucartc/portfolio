function search_projects(message){
    return fetch('http://api.portfolio.jlucartc.tech/search_projects',{
        method: 'POST',
        body: JSON.stringify(message),
        headers: {'Content-Type': 'application/json'}
    })
}

function send_email(message){
    return fetch('http://api.portfolio.jlucartc.tech/send_email',{
        method: 'POST',
        body: JSON.stringify(message),
        headers: {'Content-Type': 'application/json'}
    })
}

function get_tags(){
    return fetch('http://api.portfolio.jlucartc.tech/get_tags',{method: 'GET'})
}

export {
    search_projects,
    send_email,
    get_tags
}
