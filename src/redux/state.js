const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: 'Ddadgdgdsag', likesCount: 11 },
                { id: 4, message: 'sSedfgg', likesCount: 1 },
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'HI' },
                { id: 2, message: 'Message 222' },
                { id: 3, message: 'Message 333' },
            ],
            dialogs: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Aleksaaaa' },
                { id: 3, name: 'Alexey' },
            ],
            newMessageBody: '',
        },
        SideBar: {
            friends: [
                {
                    id: 1,
                    name: 'Deni',
                    avatar:
                        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                },
                {
                    id: 2,
                    name: 'Jane',
                    avatar:
                        'https://icons8.com/wp-content/uploads/2020/03/bab-yoda-1024x1024.jpeg',
                },
                {
                    id: 3,
                    name: 'Moino',
                    avatar:
                        'https://www.meme-arsenal.com/memes/6381871fb8afa41cab763e7309b86bfb.jpg',
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({ id: 4, message: body })
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
})

export default store
//window.store = store
