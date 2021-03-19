import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from "./components/app/";


// 1. Create function WhoAmI and render it
// 2. Add more options to WhoAmI with extra combos name-lanme-linl --- create const All
//      and render it.
// 3. To have diffent WhoAmI varieities(instancies) -  create class WhoAmI
//  Dinamically change data in component -- can not do thiught props, only create own feature inside constructor -- state
// this.state  saves inner condition , it can be everything -- active slider position, current time, etc.


class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }

        // this.nextYear = this.nextYear.bind(this); // 1st case

        // this.nextYear = () => {                 // 2st case
        //     this.setState(state => ({           // 2st case
        //         years: ++state.years,           // 2st case
        //     }));                                // 2st case
        // };                                   // 2st case

    }

    nextYear = () => {                 //3rd case --experimental, classField feature
        this.setState(state => ({           // 3st case
            years: ++state.years,           // 3st case
        }));                                // 3st case
    };

    // nextYear() {                            // 1st case
    //     console.log(1);                     // 1st case
    //     // this.state.years++;
    //     this.setState(state => ({           // 1st case
    //         years: ++state.years,           // 1st case
    //     }));                                 // 1st case
    // }                                       // 1st case
    

    render() {
        const {name, lname, link } = this.props;
        const {years}= this.state;
        return (
            <>
                <button type="button" onClick={this.nextYear}>+++</button>
                <h3>My name is {name}, last name- {lname}, years- {years}</h3>
                <a href={link}>my profile</a>
            </>
        );
    }
}



// function WhoAmI({name, lname, link}) {
//     return (
//         <>
//             <h1>My name is {name} {lname}</h1>
//             <a href="{link}">my profile</a>
//         </>
//     )
// }


// create component All
const All = () => {
    return (
        // inner components
        <>         
            <WhoAmI name="John" lname='Duster' link='yahoo.com' />
            <WhoAmI name="Sam" lname='Milkind' link='facebook.com' />
            <WhoAmI name="Pete" lname='Melonkind' link='msn.com' />
        </>
    )
}


ReactDOM.render(<All />, document.getElementById('root'));
