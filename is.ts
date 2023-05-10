interface _IUser {
    id: string
    name: string
}

interface IAdmin extends IUser {
    addNewUser: () => void
}

// __________________________

// The commom usage of type guards is something like this:
function __isAdmin(user: object) {
    return "addNewUser" in user
}

const userExample0: _IUser = {
    id: "1",
    name: "Arthur",
}

if (__isAdmin(userExample0)) {
    // Intelisense won't be able to figure that this user has the 'addNewUser' method
}

// __________________________

// Use this instead:
function isAdminUser(object: unknown): object is IAdmin {
    if (object !== null && typeof object === "object") {
        return "addNewUser" in object
    }

    return false
}

if (isAdminUser(userExample0)) {
    // user.addNewUser
}
