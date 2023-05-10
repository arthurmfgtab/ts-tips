let userAny: any // Basically disables type checks for this variable

interface IUser {
    id: string
    name: string
}

interface IAdmin extends IUser {
    addNewUser: () => void
}

function _isAdminUser(object: unknown): object is IAdmin {
    if (object !== null && typeof object === "object") {
        return "addNewUser" in object
    }

    return false
}

async function fetchUser() {
    const response = await fetch("https://dummyjson.com/users/1")

    // This is bad because Typescript infers that 'badUser' is the type of 'any',
    // which is not ideal because it disables type checks
    const badUser = await response.json()

    const goodUser: unknown = await response.json()

    if (_isAdminUser(goodUser)) {
        console.log("Admin: ", goodUser)
    }
}
