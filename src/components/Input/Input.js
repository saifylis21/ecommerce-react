import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>;
            break;

        // case('textarea'):
        //     inputElement = <textarea 
        //     className={inputClasses.join(' ')} 
        //     {...props.elementConfig} 
        //     value={props.value}
        //     onChange={props.changed}/>;
        //     break;

        // case('select'):
        //     inputElement = (
        //         <select
        //             className={inputClasses.join(' ')} 
        //             value={props.value}
        //             onChange={props.changed}>
        //                 {props.elementConfig.options.map(option => (
        //                     <option key={option.value} value={option.value}>
        //                         {option.displayValue}
        //                     </option>
        //                 ))}
        //         </select>
        //     );
        //     break;

        default:
            inputElement = <input 
            value={props.value}
            onChange={props.changed}/>;
    }


    return (
        <div>
            {inputElement}
        </div>
    )
}

export default input;