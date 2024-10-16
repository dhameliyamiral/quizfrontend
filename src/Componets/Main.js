import React from 'react';


const Main = () => {
    return (
        <>
            <div className="container">
                <h2>Cards with Contextual classNamees</h2>
                <div className="card">
                    <div className="card-body">Basic card</div>
                </div>
                <br />
                <div className="card bg-primary text-white">
                    <div className="card-body">Primary card</div>
                </div>
                <br />
                <div className="card bg-success text-white">
                    <div className="card-body">Success card</div>
                </div>
                <br />
                <div className="card bg-info text-white">
                    <div className="card-body">Info card</div>
                </div>
                <br />
                <div className="card bg-warning text-white">
                    <div className="card-body">Warning card</div>
                </div>
                <br />
                <div className="card bg-danger text-white">
                    <div className="card-body">Danger card</div>
                </div>
                <br />
                <div className="card bg-secondary text-white">
                    <div className="card-body">Secondary card</div>
                </div>
                <br />
                <div className="card bg-dark text-white">
                    <div className="card-body">Dark card</div>
                </div>
                <br />
                <div className="card bg-light text-dark">
                    <div className="card-body">Light card</div>
                </div>
            </div>
        </>
    );
};

export default Main;