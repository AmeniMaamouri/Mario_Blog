
const initState = {
    projects: [
        { id: 1, title: 'Ameni Works', content: 'BLAAH BLAAH ' },
        { id: 2, title: 'You can do it', content: 'BLAAH BLAAH ' },
        { id: 3, title: 'Well done', content: 'BLAAH BLAAH ' },
        { id: 4, title: 'Ameni YUEEESSS Works', content: 'BLAAH BLAAH ' },

    ]

}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Project has been created' + action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create Project error' + action.err)
            return state

        default:
            return state

    }

}

export default projectReducer