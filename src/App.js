import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";



const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'

    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options =[
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label:'A Shade of Blue',
        value: 'blue'
    }
]

const showAccordion = () => {
    if (window.location.pathname === '/'){
        return <Accordion items={items} />
    }
    
};

const showList = () => {
    if (window.location.pathname === '/list'){
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown'){
        return <Dropdown />
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate'){
        return <Translate />
    }
}



export default () => {
    return (
        <div>
            <Route path = "/">
                <Accordion items = {items} />
            </Route>
            <Route path = "/list">
                <Search />
            </Route>
        </div>
    )
};

