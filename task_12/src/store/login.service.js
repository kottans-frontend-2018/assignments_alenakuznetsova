export class AuthService {
    constructor(){
        this._token = null;
        this._claims = null;
    }

    get token(){

    }
    set token(){

    }

    isAuthorized(){

    }

    tokenIsNotExpired(){
        
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