class AuthService {
    constructor(){
        this._token = null;
        this._claims = null;
    }

    // get token(){

    // }
    // set token(){

    // }

    // isAuthorized(){

    // }

    // tokenIsNotExpired(){

    // }

    login(userData) {
        fetch('https://pizza-tele.ga/api/v1/user/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
            }).then(res => res.json())
            .then( (res) => {
                if (res.success == true) {
                    localStorage.setItem('Login', 'true');
                    window.location.hash = 'home';
                } else {
                    window.location.hash = 'login';
                }                
            });
    }

    registration(userData) {
        fetch('https://pizza-tele.ga/api/v1/user/create', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
                }).then(res => res.json())
        //      then(res => {
        //     if(res.ok){
        //        console.log(res.json());
        //     }
        //     throw new Error('${res.status}')
        // });
                .then( (res) => {
                    if (res.success == true) {
                        window.location.hash = 'login';
                    } else {
                        window.location.hash = 'registration';
                    }                
                });
    }

    parseJwtClaims(jwtToken) {
        if (jwtToken) {
            let base64Url = jwtToken.split('.')[1]
            let base64 = base64Url.replace('-', '+').replace('_', '/')
            return JSON.parse(window.atob(base64))
        }
        return {}
    }
}

export const AUTH_SERVICE = new AuthService();