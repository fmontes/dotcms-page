function getFullContainers(column, containers) {
    return column.containers.map(container => {
        const fullContainer = containers[container.identifier];
        return {
            ...fullContainer.container,
            contentlets: fullContainer.contentlets
        };
    });
};

export function getUpdatedColumns(columns, containers) {
    return columns.map(column => {
        return {
            ...column,
            containers: getFullContainers(column, containers)
        };
    });
};
