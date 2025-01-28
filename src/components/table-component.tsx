import React from 'react';

interface Props {
    data: Array<Record<string, any>>;
    commands: Array<{
        title: string;
        command: (index?: number) => void;
    }>;
}

const ButtonCommandPanel: React.FC<{ title: string, command: (index?: number) => void; }> = ({ title, command }) => {
    return (
        <div className="p-1">
            <button
                onClick={() => command()}
                className="bg-main-bg hover:bg-secondary-bg hover:scale-105 transition-all delay-75 duration-300 ease-in-out p-1 px-3 border-2 rounded-lg">
                <h2>{title}</h2>
            </button>
        </div>
    );
};

const TableComponent: React.FC<Props> = ({ data, commands }) => {

    const [picked, setPicked] = React.useState<number | null>(null);

    const pickTableLine = (index: number) => {
        if (picked === index) {
            setPicked(null);
            return;
        }
        setPicked(index);
    };

    const handleCommand = React.useCallback(
        (command: (index?: number) => void) => {
            command(picked ?? undefined);
        },
        [picked]
    );

    return (
        <table className="w-full">
            <thead >
                <tr className="text-left p-1 bg-main-bg text-main-col">
                    <th className="p-1">
                        <div className="flex p-1">
                            {commands.map((command) => {
                                return (
                                    <ButtonCommandPanel
                                        key={command.title}
                                        title={command.title}
                                        command={() => handleCommand(command.command)} />
                                );
                            })}
                        </div>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((skill, ind) => {
                        return (
                            <tr className={`border-2 border-main-bg p-2
                                hover:bg-secondary-bg hover:text-main-col hover:scale-101 transition-all duration-300 ease-in-out
                                ${picked === ind && 'text-red-900 bg-gray-200'}`}
                                onClick={() => pickTableLine(ind)}
                                key={ind}
                            >
                                {Object.values(skill).map((value, index) => (
                                    <td className="p-2" key={index}>{value}</td>
                                ))}
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default TableComponent;