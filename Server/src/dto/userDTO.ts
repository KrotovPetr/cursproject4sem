export class userDTO {
    email;
    id;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model.idUser;
        this.isActivated = model.isActivated;
    }
}



