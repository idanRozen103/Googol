
import { NoteTxt } from './cmps/NoteTxt.jsx'
import { NoteImg} from './cmps/NoteImg.jsx'
import { NoteTodos } from './cmps/NoteTodos.jsx'


export class KeepApp extends React.Component {

    state = {
        currView: ''
    }


    render() {
        const { currView } = this.state.currView
        const DynamicCmp = (props) => {
            switch (currView) {
                case 'Hello':
                    return <NoteTxt {...props} />
                case 'GoodBye':
                    return <NoteTodos {...props} />
                case 'WelcomeBack':
                    return <NoteImg {...props} />
                default:
                    return //...some default error view
            }
        }
        return (
            <div>
                {/* <DynamicCmp props={} /> */}
                Im KeepApp
            </div>
        )
    }
}



