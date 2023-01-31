import { createStore} from 'redux'

const dummyReducers = () => {
    return 100
}
const store = createStore(
    dummyReducers
)

export default store