export class LocalStorageUtils {

    public obterUsuario() {
        return JSON.parse(localStorage.getItem('login.user'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.userToken);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('login.token');
        localStorage.removeItem('login.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('login.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('login.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('login.user', JSON.stringify(user));
    }

}
