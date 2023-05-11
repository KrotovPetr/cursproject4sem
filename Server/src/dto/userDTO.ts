export class userDTO {
    email;
    id;
    isActivated;
    firstName;
    lastName;
    role

    constructor(model) {
        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.email = model.email;
        this.id = model.idUser;
        this.isActivated = model.isActivated;
        this.role = model.role;
    }
}



