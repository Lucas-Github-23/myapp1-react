import './MyButton.css'

function MyButton(props){
    return(
        <div className='box'>
            <h1>{props.name}</h1>
        </div>

    );
}
export default MyButton;