export class userDTO {
    email;
    id;
    isActivated;

    constructor(model) {
        console.log(model)
        this.email = model.email;
        this.id = model.idUser;
        this.isActivated = model.isActivated;
    }
}



