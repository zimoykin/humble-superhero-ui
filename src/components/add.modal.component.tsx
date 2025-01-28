import React from "react";
import { ApiClient } from "../networking/api-client";
import SpinnerComponent from "./spinner.component";

interface Props {
    onClose: (refresh?: boolean) => void;
}

const AddSupreheroModalComponent: React.FC<Props> = ({ onClose }) => {

    const [name, setName] = React.useState('Your hero name');
    const [superpower, setSuperpower] = React.useState('Your superpower');
    const [humilityScore, setHumilityScore] = React.useState(5);

    const [isLoading, setIsLoading] = React.useState(false);

    const handleAddSuperhero = () => {
        console.log('add superhero', { name, superpower, humilityScore });
        setIsLoading(true);
        ApiClient.post('/superheroes', { name, superpower, humilityScore })
            .then(() => {
                onClose(true);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                setIsLoading(false);
            });
    };


    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                onClick={() => onClose()}
            >
            </div>

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-secondary-bg rounded-lg p-4">
                <div className="flex flex-col justify-center items-center">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" placeholder="Name" className=" bg-main-bg border m-1 p-2 rounded" />
                    <input
                        value={superpower}
                        onChange={(e) => setSuperpower(e.target.value)}
                        type="text" placeholder="Superpower" className=" bg-main-bg border p-2 rounded" />
                    <div className="flex flex-row justify-center items-center">
                        <span className="mr-2"> humility score </span>
                        <input
                            value={humilityScore}
                            onChange={(e) => setHumilityScore(Number(e.target.value))}
                            type="range" min={0} max={10} className=" bg-main-bg border p-2 rounded" />
                        <p>{humilityScore}</p>
                    </div>

                    <div className="bg-primary-bg border shadow-2 p-2 shadow-lg rounded mt-4" onClick={handleAddSuperhero}>
                        <p>Add superhero</p>
                    </div>
                </div>
            </div>

            {isLoading &&
                <div className="fixed top-0 left-0 w-full h-full bg-blue-800">
                    <SpinnerComponent />
                </div>
            }

        </>
    );
};

export default AddSupreheroModalComponent;