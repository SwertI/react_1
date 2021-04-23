let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: "Ddadgdgdsag", likesCount: 11 },
                { id: 4, message: "sSedfgg", likesCount: 1 },
            ],
            newPostText: 'it-kamasutra.com'
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
        },
        SideBar: {
            friends: [
                {id: 1, name: 'Deni', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'},
                {id: 2, name: 'Jane', avatar: 'https://icons8.com/wp-content/uploads/2020/03/bab-yoda-1024x1024.jpeg'},
                {id: 3, name: 'Moino', avatar: 'https://www.meme-arsenal.com/memes/6381871fb8afa41cab763e7309b86bfb.jpg'},
                
            ],
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log('State changed')
    },
    addPost () {
        let newPost ={
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    } 
}



export default store
window.store = store