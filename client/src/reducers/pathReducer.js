const initialState = {
    paths: [
        { id: '1', name: 'test1', description: 'test1' },
        { id: '2', name: 'test2', description: 'test2' },
        { id: '3', name: 'test3', description: 'test3' },
    ],
};

const pathReducer = (state = initialState, action) => {
    return state;
};

export default pathReducer;
