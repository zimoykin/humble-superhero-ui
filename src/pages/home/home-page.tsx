import React, { useEffect, useState } from 'react';
import { ISuperhero } from '../../interfaces/superhero.interface';
import SpinnerComponent from '../../components/spinner.component';
import { ApiClient } from '../../networking/api-client';
import TableComponent from '../../components/table-component';
import AddSupreheroModalComponent from '../../components/add.modal.component';

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Array<ISuperhero>>([]);

    const [isShowModal, setShowModal] = useState(false);

    const handleRequest = () => {
        setIsLoading(true);

        ApiClient.get<Array<ISuperhero>>('/superheroes').then((data) => {
            setData(data);
        })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });

    };

    useEffect(() => {
        handleRequest();
    }, [setData, setIsLoading]);

    return (<div className="flex flex-col justify-center items-center w-full max-w-6xl pt-2">
        {isLoading && <SpinnerComponent />}
        {!isLoading && <TableComponent
            data={data.map(({ name, superpower, humilityScore }) => ({ name, superpower, humilityScore }))}
            commands={[{
                title: "add", command: () => {
                    setShowModal(true);
                }
            }]} />}
        {isShowModal && <AddSupreheroModalComponent
            onClose={(needRefresh?) => {
                if (needRefresh)
                    handleRequest();
                setShowModal(false);
            }}
        />}
    </ div>);
};

export default HomePage;