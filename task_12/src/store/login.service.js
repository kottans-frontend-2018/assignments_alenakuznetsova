class AuthService {
    constructor(){
        this._token = localStorage.getItem('token');
        this._claims = JSON.parse(localStorage.getItem('claims'));
    }

    get token(){
        return this._token;
    }
    set token(token){
        this._token = token;
        localStorage.setItem('token', token);
    }

    get claims(){
        return this._claims;
    }
    
    set claims(claims){
        this._claims = claims;
        localStorage.setItem('claims', JSON.stringify(claims));
    }

    clearStorage(){
        this._token = null;
        this._claims = null;
        localStorage.removeItem('token');
        localStorage.removeItem('claims');
    }

    isAuthorized(){
        if( !this.tokenIsNotExpired() ){
            this.clearStorage();
            return false
        }
        return true;
    }

    tokenIsNotExpired(){
        if(!this.token) return false;
        return this.claims.exp * 1000 > Date.now();
    }

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
                    this.token = res.token;
                    this.claims = this.parseJwtClaims(res.token);
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