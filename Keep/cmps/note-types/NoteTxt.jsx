import { keepService } from '../../service/keepService.js'
import { NotePreview } from '../NotePreview.jsx'



export class NoteTxt extends React.Component {

    state = {
        reviewToAdd: keepService.getEmptyTxtNote()
    }


    // onInputChange = (value, inputType) => {
    //     console.log(this.state.reviewToAdd);
    //     this.setState({
    //         reviewToAdd: { ...this.state.reviewToAdd, [inputType]: value }
    //     })
    // }




    render() {
        return (
            <div>
                <NotePreview/>
            </div>
        )
    }
}
