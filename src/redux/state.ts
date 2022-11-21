export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePagePype = {
    posts: Array<PostType>
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePagePype
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts:[
            {id: 1, message: 'hi, how are you', likesCount: 0},
            {id: 2, message: 'okey, lets go', likesCount: 23}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Dimych'},
            {id: 6, name: 'Jon'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'yo-yo-yo!'},
            {id: 3, message: 'how are you?'}
        ]
    },
    sidebar: {}
}
export default state;