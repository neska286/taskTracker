import ProtoTypes from 'prop-types';

const Button = ({color,text,clickButton})=>{
   
    return  <button  style={{backgroundColor:color}} onClick={clickButton} className="btn">{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.ProtoTypes = {
   text : ProtoTypes.string,
   color : ProtoTypes.string,
   clickButton : ProtoTypes.func
}

export default Button;