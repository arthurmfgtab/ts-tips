interface IImage {
    url: string
    height: number
    width: number
}

interface IUser {
    id: string
    name: string
    image: IImage | string
}

// ___________________________________

// The following is a bad example
const userExample1: IUser = {
    id: "1",
    name: "Arthur",
    image: "https://qqqqq.com",
}

// No adequade intelisense for image because TS doesn't know whether this is a string or property of type IImage
// userExample.image.

// ___________________________________

// A better solution for this would be the following:
const userExample2 = {
    id: "1",
    name: "Arthur",
    image: "https://qqqqq.com",
} satisfies IUser

// Now 'image' will be intered to be a string because the object 'userExample2' defines it as such
// userExample.image.
