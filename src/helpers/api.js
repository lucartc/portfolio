const host = 'http://api.portfolio.jlucartc.tech'

function search_projects(message){
    return fetch(host+'/search_projects',{
        method: 'POST',
        body: JSON.stringify(message),
        headers: {'Content-Type': 'application/json'}
    })
}

function send_email(message){
    return fetch(host+'/send_email',{
        method: 'POST',
        body: JSON.stringify(message),
        headers: {'Content-Type': 'application/json'}
    })
}

function get_tags(){
    return fetch(host+'/get_tags',{method: 'GET'})
}

export {
    search_projects,
    send_email,
    get_tags
}
