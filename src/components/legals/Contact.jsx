import React from 'react';
import parser from "html-react-parser";
async function getData(){
    await new Promise(resolve => setTimeout(resolve , 1000))
    return (await (await fetch(`${process.env.HOST}/api/features/policies?type=contact`)).json())['data']
}

const Contact =async () => {
    let data = await getData();

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-4"> {parser(data[0]['des'])} </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;